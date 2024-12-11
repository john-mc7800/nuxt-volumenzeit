<script setup lang="js">
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
import { ref } from 'vue';
const inputvalue = ref(null);
const pizza = ref();

const passwordvalue = ref(null);
</script>

<template>
  <div class="mx-4 max-w-[635px] text-[#939393] md:mx-auto">
    <div class="mb-3 mt-9 break-words text-center font-spaceAge text-[26px] tracking-tight text-black md:mx-0 md:text-5xl">
      <p>WELCOME BACK</p>
    </div>
    <div class="mb-[30px] text-center text-sm leading-7 text-[#939393]"><p>Sign into your existing account to earn rewards, check existing orders and more</p></div>
    <div class="">
      <div class="mb-[14px] grid grid-cols-1 items-center md:grid-cols-[30%_1fr]">
        <label for="" class="text-left text-sm">Username or Email</label>
        <InputText type="text" v-model="inputvalue" class="w-full rounded-sm py-1 shadow-none focus:outline focus:outline-1 focus:outline-black" />
      </div>
      <div class="mb-[14px] grid w-full grid-cols-1 items-center md:grid-cols-[30%_1fr]">
        <label for="" class="text-left text-sm">Password</label>
        <InputText type="password" v-model="passwordvalue" class="w-full rounded-sm py-1 shadow-none focus:outline focus:outline-1 focus:outline-black" />
      </div>

      <div class="mb-[14px] grid grid-cols-2 items-center gap-4 md:ml-[78px]">
        <div class="flex items-center text-end">
          <Checkbox v-model="pizza" inputId="ingredient1" name="Remember" value="Remember Me" class="focus:bg-customPurple" />
          <label for="ingredient1" class="pl-4 text-left text-sm leading-loose md:text-right">Remember Me</label>
        </div>
        <div class="">
          <a href="#" class="text-sm leading-loose">Forgot Password</a>
        </div>
      </div>

      <div class="mx-auto mb-[14px] w-fit">
        <Button label="Log In" severity="LogIn" class="text-thin w-full rounded-md border-none bg-customPurple px-24 py-4 text-sm text-white hover:bg-customPurple" />
      </div>
    </div>
  </div>
</template>
