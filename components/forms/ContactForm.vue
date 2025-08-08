<script setup lang="ts">
import type { ContactForm } from '~/types/contact.types'
import FormField from '~/components/forms/ContactFormField.vue'
import { contactSchema } from '~/types/contact.types'

// --- state ---
const form = ref<ContactForm>({ firstName: '', email: '', message: '', honeypot: '' })
const errors = ref<Record<string, string | undefined>>({})
const loading = ref(false)
const submissionStatus = ref<'success' | 'error' | null>(null)
const flashError = ref(false)
const formRef = ref<HTMLElement | null>(null)

// --- helpers ---
function clearError(field: keyof Omit<ContactForm, 'honeypot'>) {
  errors.value[field] = undefined
}

function scrollToForm() {
  if (!formRef.value)
    return
  window.scrollTo({
    top: window.scrollY + formRef.value.getBoundingClientRect().top - 100,
    behavior: 'smooth',
  })
}

function handleSuccess() {
  submissionStatus.value = 'success'
  form.value = { firstName: '', email: '', message: '', honeypot: '' }
  setTimeout(() => {
    submissionStatus.value = null
  }, 5000)
}

function handleError() {
  submissionStatus.value = 'error'
  flashError.value = true
  setTimeout(() => {
    flashError.value = false
  }, 500)
}

// --- core logic ---
function validateForm() {
  const result = contactSchema.safeParse(form.value)
  if (!result.success) {
    const fieldErrors = result.error.flatten().fieldErrors
    errors.value = {
      firstName: fieldErrors.firstName?.[0],
      email: fieldErrors.email?.[0],
      message: fieldErrors.message?.[0],
    }
    return null // validation failure
  }
  return result.data
}

// --- submission ---
async function submitForm() {
  loading.value = true
  if (submissionStatus.value === 'success')
    submissionStatus.value = null
  errors.value = {}
  scrollToForm()

  try {
    const validatedData = validateForm()
    if (!validatedData) {
      // validation failed, validateForm already set the errors
      return
    }

    await $fetch('/api/contact', {
      method: 'POST',
      body: validatedData,
    })

    handleSuccess()
  }
  catch {
    handleError()
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="sm:w-3/5 md:w-3/5">
    <div ref="formRef" class="mt-6 mb-4 min-h-[24px]">
      <h3 v-if="submissionStatus === 'success'" class="text-[#249e40]">
        Email has been sent! I'll get back to you asap as possible.
      </h3>
      <h3 v-else-if="submissionStatus === 'error'" class="text-red-600 dark:text-red-500" :class="{ 'animate-shake': flashError }">
        Error! Please try again, or email me directly at <a href="mailto:jackmayhew5@gmail.com">jackmayhew5@gmail.com</a>
      </h3>
      <h3 v-else>
        Send a message, or email me directly at <a href="mailto:jackmayhew5@gmail.com">jackmayhew5@gmail.com</a>
      </h3>
    </div>

    <form novalidate @submit.prevent="submitForm">
      <div class="absolute w-px h-px overflow-hidden -left-[5000px]">
        <label for="subject">Subject</label>
        <input id="subject" v-model="form.honeypot" type="text" name="subject" tabindex="-1">
      </div>

      <FormField
        id="name"
        v-model="form.firstName"
        label="First Name"
        name="name"
        :error="errors.firstName"
        required
        @update:model-value="clearError('firstName')"
      />

      <FormField
        id="email"
        v-model="form.email"
        label="Email"
        name="email"
        type="email"
        :error="errors.email"
        required
        @update:model-value="clearError('email')"
      />

      <FormField
        id="message"
        v-model="form.message"
        label="Message"
        name="message"
        type="textarea"
        :error="errors.message"
        required
        @update:model-value="clearError('message')"
      />

      <div class="w-full">
        <Button :text="loading ? 'Sending...' : 'Send'" icon-name="lucide:send" :disabled="loading" width="100%" />
      </div>
    </form>
  </div>
</template>

<style scoped>
/* prevent autofill styling */
input:-webkit-autofill {
  -webkit-text-fill-color: #131212;
  transition: background-color 0s 9999999s;
  box-shadow: 0 0 0 1000px #fff inset;
}

.dark-mode input:-webkit-autofill {
  -webkit-text-fill-color: #dddddd;
  box-shadow: 0 0 0 1000px #121212 inset;
}

/* shake animation for error feedback */
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}
.animate-shake {
  animation: shake 0.3s ease-in-out;
}
</style>
