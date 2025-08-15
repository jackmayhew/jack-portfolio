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
  'p-2 rounded-md text-base border-2 dark:bg-transparent duration-200 ease-in-out',
  props.error
    ? 'border-red-500'
    : 'border-neutral-200 dark:border-gray-700 hover:border-neutral-300 focus:border-neutral-300',
  inputType.value === 'textarea' ? 'align-top h-40 resize-none' : 'h-12',
])

function handleInput(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="flex flex-col relative pb-6">
    <label class="flex items-center" :for="id">{{ label }}<span v-if="required">*</span><span v-if="labelSmall" class="text-xs ml-1">{{ labelSmall }}</span></label>
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
      @input="handleInput"
    >
    <span v-if="error" class="text-red-600 dark:text-red-500 text-sm">{{ error }}</span>
  </div>
</template>
