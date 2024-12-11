<script setup lang="js">
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

defineProps({
  title: String,
  content: String,
  name: String,
  email: String,
  linkText: String,
  linkTo: String,
});
</script>

<template>
  <div class="m-5 rounded-[10px] border border-[#EAECF5] bg-white px-4 py-2 md:px-[60px] md:py-[30px]">
    <p class="text-[20px] font-semibold leading-loose text-customTextGray">{{ title }}</p>
    <RouterLink v-if="linkText && linkTo" :to="linkTo" class="relative -top-10 float-right hidden text-sm leading-[46px] text-customPurple sm350:block">{{ linkText }} </RouterLink>
    <p v-if="content" class="w-full text-sm leading-7 text-customTextGray">{{ content }}</p>
    <p v-if="name" class="text-sm font-normal leading-7 text-black">Name:{{ name }}</p>
    <p v-if="email" class="text-sm font-normal leading-7 text-black">Email: {{ email }}</p>
  </div>
</template>
