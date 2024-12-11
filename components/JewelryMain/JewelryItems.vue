<script setup lang="js">
import JewelryProducts from '../JewelryMain/JewelryProducts.vue';

import { ref } from 'vue';
import DefaultDropdown from '../reuseComponents/DefaultDropdown.vue';

const isDropdownOpen = ref(false);
const selectedOption = ref('Default');

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectOption = (option) => {
  selectedOption.value = option;
  isDropdownOpen.value = false;
};
</script>

<template>
  <div data-aos="fade-up" class="mx-auto w-[90%] pt-2 lg:ml-4">
    <DefaultDropdown />
    <JewelryProducts />
  </div>
</template>
