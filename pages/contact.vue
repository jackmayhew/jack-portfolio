<template>
  <main>
    <h1 class="text-4xl sm:text-5xl h1">Contact Jack</h1>
    <h2 class="mt-2 text-xl sm:text-2xl">Open to new projects and ideas—reach out!</h2>
    <div class="mt-6 text-lg">
      <div class="sm:w-3/5 md:w-3/5">
        <h3 class="mt-6 mb-4"
          :class="messageStatusColour === 'green' && 'text-[#249e40]', messageStatusColour === 'red' && 'text-red-600 dark:text-red-500'">
          {{ messageStatus }} <a :href="'mailto:' + messageStatusEmail" class="underline">{{ messageStatusEmail }}</a>
        </h3>
        <form @submit.prevent="submitForm">
          <div class="flex flex-col">
            <label for="name" class="">First Name</label>
            <input v-model="form.firstName" type="text" name="name"
              class="p-2 rounded-lg text-base border-2 border-neutral-200 dark:bg-transparent hover:border-neutral-300 focus:border-neutral-300 focus:ring-neutral-300 focus:outline-none outline-none duration-300 ease-in-out" />
            <span v-if="errors.firstName" class="text-red-600 dark:text-red-500">{{ errors.firstName }}</span>
          </div>
          <div class="flex flex-col mt-6">
            <label for="email" class="">Email</label>
            <input v-model="form.email" type="text" name="email"
              class="p-2 rounded-lg text-base border-2 border-neutral-200 dark:bg-transparent hover:border-neutral-300 focus:border-neutral-300 focus:ring-neutral-300 focus:outline-none outline-none duration-300 ease-in-out" />
            <span v-if="errors.email" class="text-red-600 dark:text-red-500">{{ errors.email }}</span>
          </div>
          <div class="flex flex-col mt-6">
            <label for="message" class="">Message</label>
            <textarea v-model="form.message" name="message"
              class="h-40 p-2 rounded-lg text-base resize-none border-2 border-neutral-200 dark:bg-transparent hover:border-neutral-300 focus:border-neutral-300 focus:ring-neutral-300 focus:outline-none outline-none duration-300 ease-in-out"></textarea>
            <span v-if="errors.message" class="text-red-600 dark:text-red-500">{{ errors.message }}</span>
          </div>
          <div class="mt-6 w-fit">
            <button class="flex px-6 py-2 rounded-lg border-2 border-neutral-200">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const messageStatus = ref("Send a message, or email me directly at ");
const messageStatusEmail = ref("jackmayhew5@gmail.com.");
const messageStatusColour = ref("");


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
  errors.value = {
    firstName: null,
    email: null,
    message: null
  };

  let isValid = true;

  if (form.value.firstName.trim().length === 0) {
    errors.value.firstName = 'First name required';
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.value.email)) {
    errors.value.email = 'Valid email required';
    isValid = false;
  }

  if (form.value.message.trim().length === 0) {
    errors.value.message = 'Message required';
    isValid = false;
  }

  if (isValid) {
    sendEmail();
  }
};

const sendEmail = () => {
  emailjs
    .send('service_fbnimec', 'template_eowm57c', {
      name: form.value.firstName,
      email: form.value.email,
      message: form.value.message,
    }, 'Er31CR8oClQqo_FMI')
    .then(
      () => {
        messageStatusColour.value = "green";
        messageStatusEmail.value = "";
        messageStatus.value = "Email has been sent! I'll get back to you asap as possible.";
        form.value = { firstName: '', email: '', message: '' };
      },
      (error) => {
        messageStatusColour.value = "red";
        messageStatusEmail.value = "jackmayhew5@gmail.com";
        messageStatus.value = "Error! Please try again, or email me directly at ";
      }
    );
};
</script>

<style scoped>


</style>
