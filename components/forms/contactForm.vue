<script setup lang="ts">
import type { ContactForm } from '~/types/contact.types'
import { contactSchema } from '~/types/contact.types'

const form = ref<ContactForm>({
  firstName: '',
  email: '',
  message: '',
  honeypot: '',
})

const errors = ref<Record<string, string | undefined>>({})
const loading = ref(false)
const submissionStatus = ref<'success' | 'error' | null>(null) // null: idle
const flashError = ref(false)
let successTimeout: any = null

const formRef = ref<HTMLElement | null>(null)

function clearError(field: 'firstName' | 'email' | 'message') {
  if (errors.value[field]) {
    errors.value[field] = undefined
  }
}

async function submitForm() {
  // clear previous success message
  if (submissionStatus.value === 'success')
    submissionStatus.value = null

  // clear any existing timeout
  if (successTimeout)
    clearTimeout(successTimeout)

  // scroll formm into view
  if (formRef.value) {
    window.scrollTo({
      top: window.scrollY + formRef.value.getBoundingClientRect().top - 100,
      behavior: 'smooth',
    })
  }

  loading.value = true
  errors.value = {}

  // 1. validate form
  const result = contactSchema.safeParse(form.value)

  if (!result.success) {
    const fieldErrors = result.error.flatten().fieldErrors
    errors.value = {
      firstName: fieldErrors.firstName?.[0],
      email: fieldErrors.email?.[0],
      message: fieldErrors.message?.[0],
    }
    loading.value = false
    return // Stop execution
  }

  // 2. validation succeeds
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: result.data,
    })

    // success
    submissionStatus.value = 'success'
    form.value = { firstName: '', email: '', message: '', honeypot: '' } // reset

    // clear success message
    successTimeout = setTimeout(() => {
      submissionStatus.value = null
    }, 5000)
  }
  catch {
    // error
    submissionStatus.value = 'error'

    // shake animation for feedback
    flashError.value = true
    setTimeout(() => {
      flashError.value = false
    }, 500)
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="sm:w-3/5 md:w-3/5">
    <div ref="formRef" class="mt-6 mb-4 min-h-[24px]">
      <!-- success -->
      <h3 v-if="submissionStatus === 'success'" class="text-[#249e40]">
        Email has been sent! I'll get back to you asap as possible.
      </h3>
      <!-- error -->
      <h3 v-else-if="submissionStatus === 'error'" class="text-red-600 dark:text-red-500" :class="{ 'animate-shake': flashError }">
        Error! Please try again, or email me directly at <a href="mailto:jackmayhew5@gmail.com">jackmayhew5@gmail.com</a>
      </h3>
      <!-- idle -->
      <h3 v-else>
        Send a message, or email me directly at <a href="mailto:jackmayhew5@gmail.com">jackmayhew5@gmail.com</a>
      </h3>
    </div>

    <form novalidate @submit.prevent="submitForm">
      <!-- honeypot -->
      <div class="absolute w-px h-px overflow-hidden -left-[5000px]">
        <label for="subject">Subject</label>
        <input id="subject" v-model="form.honeypot" type="text" name="subject" tabindex="-1">
      </div>

      <div class="flex flex-col relative pb-6">
        <label for="name">First Name*</label>
        <input
          id="name"
          v-model="form.firstName"
          type="text"
          name="name"
          class="p-2 h-12 rounded-md text-base border-2 dark:bg-transparent duration-200 ease-in-out"
          :class="errors.firstName ? 'border-red-500' : 'border-neutral-200 dark:border-gray-700 hover:border-neutral-300 focus:border-neutral-300'"
          @input="clearError('firstName')"
        >
        <span v-if="errors.firstName" class="text-red-600 dark:text-red-500 text-sm">{{ errors.firstName }}</span>
      </div>

      <div class="flex flex-col relative pb-6">
        <label for="email">Email*</label>
        <input
          id="email"
          v-model="form.email"
          type="text"
          name="email"
          class="p-2 h-12 rounded-md text-base border-2 dark:bg-transparent duration-200 ease-in-out"
          :class="errors.email ? 'border-red-500' : 'border-neutral-200 dark:border-gray-700 hover:border-neutral-300 focus:border-neutral-300'"
          @input="clearError('email')"
        >
        <span v-if="errors.email" class="text-red-600 dark:text-red-500 text-sm">{{ errors.email }}</span>
      </div>

      <div class="flex flex-col relative pb-6">
        <label for="message">Message*</label>
        <textarea
          id="message"
          v-model="form.message"
          name="message"
          class="align-top h-40 p-2 rounded-md text-base resize-none border-2 dark:bg-transparent duration-200 ease-in-out"
          :class="errors.message ? 'border-red-500' : 'border-neutral-200 dark:border-gray-700 hover:border-neutral-300 focus:border-neutral-300'"
          @input="clearError('message')"
        />
        <span v-if="errors.message" class="text-red-600 dark:text-red-500 text-sm">{{ errors.message }}</span>
      </div>

      <div class="w-full">
        <Button
          :text="loading ? 'Sending...' : 'Send'"
          icon-name="lucide:send"
          :disabled="loading"
          width="100%"
        />
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
