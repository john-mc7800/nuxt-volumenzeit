<script setup lang="js">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="z-1 relative -mt-[305px] mb-16 bg-customPurple pt-64 text-white">
    <div class="h-full bg-[url('@/assets/images/answer-decor.png')] bg-cover bg-center">
      <div class="mx-auto w-full max-w-6xl py-32 text-center md:py-40">
        <h2 class="mb-4 text-4xl font-[700] text-white">Cant Find The Answer?</h2>
        <p class="mb-[70px] text-sm text-white">Get in touch with our proffessional team and we will get your answer in less then 24h</p>
        <RouterLink to="#" class="rounded-md bg-black px-16 py-5 text-sm text-white transition-all duration-200 hover:border-b-2 hover:border-black hover:bg-white hover:text-black 2xl:text-2xl">Contact Us</RouterLink>
      </div>
    </div>
  </div>
</template>
