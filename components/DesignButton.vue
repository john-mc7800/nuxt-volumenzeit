<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <NuxtLink to="#" class="main__button rounded-md bg-[#735cff] px-[2.375rem] py-[1.375rem] text-white transition-all duration-200 hover:border-b-2 hover:border-[#735cff] hover:bg-white hover:text-customPurple 2xl:text-2xl">
    {{ label }}
  </NuxtLink>
</template>
