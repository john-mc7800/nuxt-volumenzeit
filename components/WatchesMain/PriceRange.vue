<script setup>
import Slider from 'primevue/slider';
import { ref } from 'vue';

const value = ref([20, 80]);
</script>
<template>
  <div class="mx-auto w-full max-w-md px-1">
    <div class="relative pb-4 pt-6">
      <div class="card flex justify-center">
        <Slider v-model="value" range class="w-56" :min="0" :max="300" />
      </div>
      <div class="mt-4 flex justify-between text-[.875em] text-gray-600">
        <input type="text" :value="`€ 0`" class="w-auto max-w-16 p-2 text-center" />
        <input type="text" :value="`€ 300`" class="w-auto max-w-16 p-2 text-center" />
      </div>
    </div>
  </div>
</template>
