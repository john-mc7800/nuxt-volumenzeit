<script setup lang="js">
import { RouterLink, useRoute } from 'vue-router';
import NewsLetter from '../components/Home/NewsLetter/NewsLetter.vue';
import Dashboard from '../components/MyAccount/DashBoard.vue';
import Order from '../components/MyAccount/Order.vue';
import Contact from '../components/MyAccount/Contact.vue';
const route = useRoute();
// console.log(route);

const navItems = [
  { name: 'Dashboard', path: '/my-account', paddingClass: 'px-20 lg:px-[102px]' },
  { name: 'Order History', path: '/order', paddingClass: 'px-[70px] lg:px-[102px]' },
  { name: 'Contact Us', path: '/contact', paddingClass: 'px-20 lg:px-[102px]' },
];
</script>

<template>
  <div>
    <div class="w-full bg-customPurple md:mt-[95px] lg:mt-0">
      <div class="mx-auto max-w-[1140px] py-[20px]">
        <h1 data-aos="fade-right" class="text-center font-spaceAge text-[42px] text-white">volumenzeit account</h1>
      </div>
    </div>
    <div class="bg-[#F9FAFE]">
      <div class="mx-auto max-w-[1140px] pt-[47px]">
        <div class="mx-auto mb-[136px] grid w-full max-w-[1040px] grid-cols-1 items-center justify-center gap-8 pb-4 md:grid-cols-3 md:gap-0">
          <div v-for="(item, index) in navItems" :key="index" class="text-center">
            <NuxtLink :to="item.path" :class="['box-content w-full border-b border-gray-300 pb-4 text-xl font-[600] text-black md:px-12', item.paddingClass, route.path === item.path ? 'overflow-hidden border-b-[5px] border-b-customPurple' : '']">
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
        <div class="mx-auto w-full max-w-[1100px]">
          {{ router.name }}
          <Order v-if="route.name === 'Order'" />
          <Dashboard v-if="route.name === 'My Account'" />
          <Contact v-if="route.name === 'Contact'" />
        </div>
      </div>
    </div>
    <NewsLetter />
  </div>
</template>
