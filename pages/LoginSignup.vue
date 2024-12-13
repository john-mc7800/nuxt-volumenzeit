<script setup>
import Login from '~/components/loginSignup/Login.vue';
import SignUp from '~/components/loginSignup/SignUp.vue';
import { useRoute } from '#app';

definePageMeta({
  layout: '',
});

const route = useRoute();

const navigateToPath = (path) => {
  navigateTo(path);
};

console.log(route);
console.log(route.name);
</script>

<template>
  <div class="bg-white pt-0 md:pt-[170px]">
    <div class="mx-auto w-full max-w-[280px] bg-white md:max-w-[970px]">
      <div class="relative z-20 rounded-[10px] bg-white p-[0px] md:p-[58px]">
        <div class="card border-#EAECF5 flex flex-col items-center space-y-4 rounded-[10px] border py-8">
          <div class="grid w-full grid-cols-1 gap-0 pb-4 md:max-w-[78%] md:grid-cols-2">
            <div class="w-fill mb-8 text-center">
              <button @click="navigateToPath('/login')" :class="['border-b border-gray-300 px-24 pb-4 text-xl font-[600] text-black lg:px-[140px]', route.path === '/login' ? 'overflow-hidden border-b-[5px] border-b-customPurple' : '']">Login</button>
            </div>
            <div class="text-center">
              <button :class="['box-content border-b border-gray-300 px-10 pb-4 text-xl font-[600] text-black lg:px-[84px]', route.path === '/signup' ? 'overflow-hidden border-b-[5px] border-b-customPurple' : '']">Create Account</button>
              <!-- <button @click="navigateToPath('/signup')" :class="['border-b border-gray-300 px-16 pb-4 text-xl font-[600] text-black lg:px-[140px]', route.path === '/signup' ? 'overflow-hidden border-b-[5px] border-b-customPurple' : '']">Create Account</button> -->
            </div>
          </div>

          <div class="w-full">
            <div>{{ route.path }}</div>
            <div class="">
              <SignUp v-if="route.path === '/signup'" />
              <Login v-if="route.path === '/login'" />
            </div>
          </div>
        </div>
      </div>
      <div class="relative z-10 mx-60 h-20 w-auto rounded-b-xl bg-[#2b1b8e] blur-2xl"></div>
    </div>
    <div class="z-1 relative -mt-[305px] mb-[64px] bg-customPurple pt-[250px] text-white">
      <div class="h-full bg-[url('@/assets/images/answer-decor.png')] bg-cover bg-center">
        <div class="mx-auto w-full max-w-[1140px] py-[120px] text-center md:py-[160px]"></div>
      </div>
    </div>
  </div>
</template>
