<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  label: string
  labelSmall?: string
  error?: string
  type?: 'text' | 'textarea' | 'email'
  name: string
  id: string
  required?: boolean
}>()

const emit = defineEmits(['update:modelValue'])

const inputType = computed(() => props.type || 'text')

const inputClasses = computed(() => [
  // base styles for all states
  'p-2 rounded-md text-base border-2 dark:bg-transparent duration-200 ease-in-out focus:outline-none focus:ring-2 border-[#121212] dark:border-gray-600',

  // conditionals
  props.error
    ? 'focus:ring-red-600' // error state
    : 'focus:ring-orange-light', // default state

  // conditionals for input type
  inputType.value === 'textarea' ? 'align-top h-40 resize-none' : 'h-12',
])

function handleInput(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="relative flex flex-col relative pb-6">
    <label class="flex items-center" :for="id">
      {{ label }}
      <span v-if="required">*</span>
      <span v-if="labelSmall" class="text-xs ml-1">
        {{ labelSmall }}
      </span>
    </label>
    <textarea
      v-if="inputType === 'textarea'"
      :id="id"
      :name="name"
      :value="modelValue"
      :aria-required="required"
      :class="inputClasses"
      @input="handleInput"
    />
    <input
      v-else
      :id="id"
      :name="name"
      :type="inputType"
      :value="modelValue"
      :aria-required="required"
      :class="inputClasses"
      autocomplete="true"
      @input="handleInput"
    >
    <span v-if="error" class="absolute bottom-1 text-red-600 dark:text-red-500 text-sm">{{ error }}</span>
  </div>
</template>
