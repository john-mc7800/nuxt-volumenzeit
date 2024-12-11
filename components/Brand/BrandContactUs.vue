<script setup lang="js">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="z-1 relative -mt-[305px] mb-[64px] bg-customPurple pt-[250px] text-white">
    <div class="h-full bg-[url('@/assets/images/answer-decor.png')] bg-cover bg-center">
      <div class="mx-auto w-full max-w-[1140px] py-[120px] text-center md:py-[160px]">
        <h2 class="mb-[18px] text-[36px] font-[700] text-white">Cant Find The Answer?</h2>
        <p class="mb-[70px] text-[14px] text-white">Get in touch with our proffessional team and we will get your answer in less then 24h</p>
        <RouterLink to="#" class="rounded-[5px] bg-black px-[65px] py-[20px] text-sm text-white transition-all duration-200 hover:border-b-2 hover:border-black hover:bg-white hover:text-black 2xl:text-2xl">Contact Us</RouterLink>
      </div>
    </div>
  </div>
</template>
