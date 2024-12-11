<script setup lang="js">
import { ref } from 'vue';

const options = [
  { label: 'Default', value: 'Default' },
  { label: 'Popularity', value: 'Popularity' },
  { label: "What's New", value: "What's New" },
  { label: 'Price Low to High', value: 'Price Low to High' },
  { label: 'Price High to Low', value: 'Price High to Low' },
];

const selectedOption = ref(options[0].label);
const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectOption = (option) => {
  selectedOption.value = option;
  isDropdownOpen.value = false;
};
</script>

<template>
  <div class="flex flex-col items-center space-y-4 py-4 md:items-end">
    <div class="relative mx-0 w-48 md:mx-8">
      <button class="flex w-full appearance-none flex-row items-center justify-center rounded bg-[#f9fafe] py-4 text-center text-sm text-[#939393] shadow-sm focus:outline-none focus:ring-0" @click="toggleDropdown">
        <i class="pi pi-angle-down pointer-events-none transform px-2 text-gray-500"></i>
        <!-- <span :class="${selectedOption && 'text-black'}" > {{ selectedOption }}</span> -->
        <span :class="selectedOption ? 'text-black' : ''"> {{ selectedOption }}</span>
      </button>

      <ul v-show="isDropdownOpen" class="absolute left-0 z-10 mt-1 w-full rounded-md bg-white text-sm shadow-lg">
        <li v-for="option in options" :key="option.value" @click="selectOption(option.label)" :class="{ 'cursor-pointer px-4 py-2 text-xs text-[#939393]': true, 'text-black': selectedOption === option.label }">{{ option.label }}</li>
      </ul>
    </div>
  </div>
</template>
