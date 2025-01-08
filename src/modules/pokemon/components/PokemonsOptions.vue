<script setup lang="ts">
import type { Pokemon } from '../interface';

interface Props {
  options: Pokemon[];
  blockSelection: boolean;
  correctAnswer: number;
}
defineProps<Props>();

defineEmits<{
  selectOption: [id: number];
}>();
</script>

<template>
  <section class="mt-5 flex flex-col">
    <button
      v-for="{ name, id } in options"
      :key="id"
      @click="$emit('selectOption', id)"
      :class="[
        'capitalize disabled:shadow-none disabled:bg-gray-100',
        {
          correct: id === correctAnswer && blockSelection,
          inconrrect: id !== correctAnswer && blockSelection,
        },
      ]"
      :disabled="blockSelection"
    >
      {{ name }}
    </button>
  </section>
</template>

<style scoped>
button {
  @apply bg-white shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all hover:bg-gray-100;
}

.correct {
  @apply bg-blue-500 text-white;
}

.inconrrect {
  @apply bg-red-300 opacity-70;
}
</style>
