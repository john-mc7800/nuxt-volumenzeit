<script setup lang="js">
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { ref } from 'vue';

import DatePicker from 'primevue/datepicker';

const UserNameValue = ref(null);
const FirstNameValue = ref(null);
const LastNameValue = ref(null);
const EmailValue = ref(null);
const password = ref(null);
const confirmPassword = ref(null);
const date = ref();

const passwordvalue = ref(null);
</script>

<template>
  <div class="mx-4 max-w-[635px] text-[#939393] md:mx-auto">
    <div class="mb-3 mt-9 break-words text-center font-spaceAge text-[26px] tracking-tight text-black md:mx-0 md:text-5xl">
      <p>NEW TO VOLUMENZEIT?</p>
    </div>
    <div class="mb-[30px] text-center text-sm leading-7 text-[#939393]"><p>Create a new account</p></div>
    <div class="">
      <div class="my-[20px]">
        <InputText v-model="UserNameValue" type="text" size="large" placeholder="User Name" class="w-full rounded-md py-3 shadow-none placeholder:text-sm focus:outline focus:outline-1 focus:outline-black" />
      </div>
      <div class="mb-[20px]">
        <InputText v-model="FirstNameValue" type="text" size="large" placeholder="First Name" class="w-full rounded-md py-3 shadow-none placeholder:text-sm focus:outline focus:outline-1 focus:outline-black" />
      </div>
      <div class="mb-[20px]">
        <InputText v-model="LastNameValue" type="text" size="large" placeholder="Last Name" class="w-full rounded-md py-3 shadow-none placeholder:text-sm focus:outline focus:outline-1 focus:outline-black" />
      </div>

      <div class="mb-[14px]">
        <DatePicker v-model="date" showButtonBar class="w-full rounded-md py-3 text-sm text-customGray shadow-none" placeholder="Date" />
      </div>

      <div class="mb-[20px]">
        <InputText v-model="EmailValue" type="email" size="large" placeholder="Email" class="w-full rounded-md py-3 shadow-none placeholder:text-sm focus:outline focus:outline-1 focus:outline-black" />
      </div>
      <div class="mb-[20px]">
        <InputText v-model="password" type="password" size="large" placeholder="Password" class="w-full rounded-md py-3 shadow-none placeholder:text-sm focus:outline focus:outline-1 focus:outline-black" />
      </div>
      <div class="mb-[20px]">
        <InputText v-model="confirmPassword" type="password" size="large" placeholder="Confirm Password" class="w-full rounded-md py-3 shadow-none placeholder:text-sm focus:outline focus:outline-1 focus:outline-black" />
      </div>

      <div class="mx-auto mb-[14px] w-fit">
        <Button label="Create Account" severity="Account" class="text-thin w-full rounded-md border-none bg-customPurple px-24 py-4 text-sm text-white hover:bg-customPurple" />
      </div>
    </div>
  </div>
</template>
