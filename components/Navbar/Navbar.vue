<script setup lang="js">
import { ref, onMounted } from 'vue';
// import { useRoute } from 'vue-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Icon } from '@iconify/vue';

import Drawer from 'primevue/drawer';
import AddToCart from '../AddToCart/AddToCart.vue';

const visibleRight = ref(false);
const isMenuOpen = ref(false);
const route = useRoute();

const navLinks = [
  { label: 'Home', to: '/', delay: 50 },
  { label: 'Watches', to: '/watches', delay: 100 },
  { label: 'Jewelry', to: '/jewelry', delay: 150 },
  { label: 'Accessories', to: '/accessories', delay: 200 },
  { label: 'Brand', to: '/brand', delay: 250 },
];

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
});

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const isHovered = ref(false);
const handleMouseEnter = () => {
  isHovered.value = true;
};
const handleMouseLeave = () => {
  isHovered.value = false;
};
</script>

<template>
  <header class="md:px-1rem fixed top-0 z-30 flex w-full flex-row justify-center bg-custombgGray bg-opacity-90 px-3 py-3 shadow-lg md:py-[1.5rem] lg:mx-0 lg:w-full lg:px-4 lg:py-4">
    <div class="container z-30 m-auto flex max-w-[70rem] items-center justify-between py-2 lg:gap-7">
      <span data-aos="fade-right opacity-100">
        <NuxtLink to="/" class="w m-0 text-customGray lg:p-0">
          <img data-aos="fade-right" src="@/assets/images/logo.svg" alt="Logo" class="h-8 w-64 lg:h-9 lg:w-[270px]" />
        </NuxtLink>
      </span>

      <nav class="hidden justify-center lg:flex lg:flex-[1_1_auto]">
        <ul class="flex gap-10 text-sm font-medium text-customTextGray">
          <li v-for="link in navLinks" :key="link.to" :data-aos="'fade-right'" :data-aos-delay="link.delay">
            <NuxtLink :to="link.to" :class="{ 'border-b border-customPurple pb-4 text-black transition-colors': route.path === link.to }" :data-goto-top="'120'" :data-goto="link.goto">
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="hidden items-center gap-8 md:flex">
        <div @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" class="relative">
          <i class="pi pi-user text-2xl text-customTextGray"></i>
          <div v-if="isHovered" class="absolute -left-28 top-0 w-56 bg-transparent">
            <div class="mt-12 flex flex-col justify-center gap-4 rounded-md bg-white p-4 shadow">
              <div class="h-0.54 absolute left-[50%] top-10 z-10 w-4 rotate-45 bg-white"></div>
              <NuxtLink to="/auth/login" class="text rounded-md bg-black px-11 py-5 text-center text-sm text-white">Log in</NuxtLink>
              <NuxtLink to="/auth/sign-up" class="text rounded-md border border-black bg-white px-11 py-5 text-center text-sm text-black">Sign up</NuxtLink>
            </div>
          </div>
        </div>
        <span data-aos="fade-left" class="hidden md:block" @click="visibleRight = true">
          <NuxtLink to="#" class="">
            <i class="pi pi-shopping-bag text-2xl text-customTextGray"></i>
          </NuxtLink>

          <Drawer v-model:visible="visibleRight" position="right" class="text-5 z-50 bg-[#f9fafe] p-0 px-0 font-spaceAge !font-thin leading-5 md:w-[27%]">
            <template #header>
              <div class="drawer-header-custom bg-[#f9fafe]">
                <span class="header-title py-4 text-center">your cart</span>
              </div>
            </template>
            <AddToCart />
          </Drawer>
        </span>
      </div>
    </div>

    <!-- Mobile Menu Button -->
    <button @click="toggleMenu" class="z-40 text-3xl text-customTextGray lg:hidden" aria-label="Toggle menu">
      <span v-if="!isMenuOpen">
        <Icon icon="rivet-icons:menu" class="text-4xl text-customPurple" />
      </span>
      <span v-else>
        <Icon icon="rivet-icons:close" class="text-3xl text-customPurple" />
      </span>
    </button>
    <div v-if="isMenuOpen" class="fixed inset-0 top-0 z-30 w-full bg-custombgGray lg:hidden">
      <div class="flex flex-col items-center gap-6 pt-16 font-medium">
        <ul class="flex flex-col items-center gap-6 text-xl font-normal text-customTextGray">
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLink :to="link.to" class="text-center transition-colors" :class="{ 'border-b border-customPurple pb-4 text-black': route.path === link.to }" :data-goto-top="'120'" :data-goto="link.goto" @click="toggleMenu">
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
        <span class="block md:hidden">
          <NuxtLink to="/loginSignup" class="" @click="toggleMenu">
            <i class="pi pi-user text-2xl text-customTextGray"></i>
          </NuxtLink>
        </span>
        <span class="block md:hidden" @click="visibleRight = true">
          <NuxtLink to="#" class="" @click="toggleMenu">
            <i class="pi pi-shopping-bag text-xl text-customTextGray"></i>
          </NuxtLink>

          <Drawer autoZIndex="true" v-model:visible="visibleRight" position="right" class="text-5 z-50 w-[100%] bg-[#f9fafe] p-0 px-0 font-spaceAge !font-thin leading-5">
            <template #header>
              <div class="drawer-header-custom bg-[#f9fafe]">
                <span class="header-title">your cart</span>
              </div>
            </template>
            <AddToCart />
          </Drawer>
        </span>
      </div>
    </div>
  </header>
</template>

<style scoped>
.custom-drawer .p-drawer-content {
  background-color: #e5e5e5;
  padding: 0px;
  border-radius: 8px;
}

.custom-content {
  color: #222;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.drawer-header-custom {
  width: 100%;
  padding: 10px;
}
</style>
