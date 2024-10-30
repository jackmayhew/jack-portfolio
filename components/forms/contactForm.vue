<template>
  <div class="sm:w-3/5 md:w-3/5">
    <h3 class="mt-6 mb-4" :class="messageStatusClass">{{ messageStatus }}
      <a v-if="messageStatusEmail" href="mailto:jackmayhew5@gmail.com">jackmayhew5@gmail.com</a>
    </h3>
    <form @submit.prevent="submitForm">
      <div class="flex flex-col">
        <label for="name">First Name*</label>
        <!-- tailwind @apply not working, so just leaving these long class names for now -->
        <input v-model="form.firstName" type="text" name="name"
          class="p-2 rounded-lg text-base border-2 border-neutral-200 dark:border-gray-700 dark:bg-transparent hover:border-neutral-300 focus:border-neutral-300 focus:ring-neutral-300 focus:outline-none outline-none duration-300 ease-in-out" />
        <span v-if="errors.firstName" class="text-red-600 dark:text-red-500">{{ errors.firstName }}</span>
      </div>
      <div class="flex flex-col mt-6">
        <label for="email">Email*</label>
        <input v-model="form.email" type="text" name="email"
          class="p-2 rounded-lg text-base border-2 border-neutral-200 dark:border-gray-700 dark:bg-transparent hover:border-neutral-300 focus:border-neutral-300 focus:ring-neutral-300 focus:outline-none outline-none duration-300 ease-in-out" />
        <span v-if="errors.email" class="text-red-600 dark:text-red-500">{{ errors.email }}</span>
      </div>
      <div class="flex flex-col mt-6">
        <label for="message">Message*</label>
        <textarea v-model="form.message" name="message"
          class="h-40 p-2 rounded-lg text-base resize-none border-2 border-neutral-200 dark:border-gray-700 dark:bg-transparent hover:border-neutral-300 focus:border-neutral-300 focus:ring-neutral-300 focus:outline-none outline-none duration-300 ease-in-out"></textarea>
        <span v-if="errors.message" class="text-red-600 dark:text-red-500">{{ errors.message }}</span>
      </div>
      <div class="mt-6 w-fit">
        <button class="flex px-6 py-2 rounded-lg border-2 border-neutral-200 dark:border-gray-700">Submit</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const messageStatus = ref("Send a message, or email me directly at ");
const messageStatusEmail = ref(true);
const messageStatusResponse = ref(0);

const form = ref({
  firstName: '',
  email: '',
  message: ''
});

const errors = ref({
  firstName: null,
  email: null,
  message: null
});

const submitForm = () => {
  // pretty loose email check. no need to go crazy
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let isValid = true;
  errors.value = { firstName: null, email: null, message: null };

  if (!form.value.firstName.trim()) {
    errors.value.firstName = 'First name required';
    isValid = false;
  }

  if (!emailRegex.test(form.value.email)) {
    errors.value.email = 'Valid email required';
    isValid = false;
  }

  if (!form.value.message.trim()) {
    errors.value.message = 'Message required';
    isValid = false;
  }

  if (isValid) {
    sendEmail();
  }

  // reset states if user clicks 'submit' again after a successful form submition
  if (messageStatusResponse.value == 200) {
    messageStatus.value = "Send a message, or email me directly at ";
    messageStatusEmail.value = true;
    messageStatusResponse.value = 0;
  }
};

const sendEmail = () => {
  emailjs
    .send(useRuntimeConfig().public.EMAILJS_SERVICE_ID, useRuntimeConfig().public.EMAILJS_TEMPLATE_ID, {
      name: form.value.firstName,
      email: form.value.email,
      message: form.value.message,
    }, useRuntimeConfig().public.EMAILJS_PUBLIC_KEY)
    .then(
      () => {
        messageStatusResponse.value = 200;
        messageStatusEmail.value = false;
        messageStatus.value = "Email has been sent! I'll get back to you asap as possible";

        window.scrollTo({ top: 0, behavior: 'smooth' });
        form.value = { firstName: '', email: '', message: '' };
      },
      () => {
        messageStatusResponse.value = 400;
        messageStatusEmail.value = true;
        messageStatus.value = "Error! Please try again, or email me directly at ";
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    );
};

const messageStatusClass = computed(() => {
  if (messageStatusResponse.value === 200) return 'text-[#249e40]';
  if (messageStatusResponse.value === 400) return 'text-red-600 dark:text-red-500';
  return '';
});
</script>

<style scoped></style>