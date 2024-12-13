<template>
  <div class="block">
    <div class="relative flex items-center py-2 ps-6 md:pe-8 md:ps-12" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
      <!-- Icon, replace with the one from your icon library -->
      <span class="cursor-pointer text-base text-indigo-700"> login </span>

      <!-- Search form appears when isHovered is true -->
      <div v-if="isHovered">
        <form class="absolute right-0 top-0 mt-8 flex w-72 bg-white px-2 py-2 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out md:right-8 md:w-80">
          <input type="search" placeholder="Type Here" class="me-2 w-full border border-gray-300 bg-customGray p-2 text-lg outline-none placeholder:ps-4 placeholder:text-sm" />
          <button class="bg-customPurple px-6 py-4 text-sm text-white">search</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import { ref } from 'vue';

const isHovered = ref(false);

const handleMouseEnter = () => {
  isHovered.value = true;
};

const handleMouseLeave = () => {
  isHovered.value = false;
};
</script>
