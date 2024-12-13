<template>
  <div class="flex h-screen flex-col items-center justify-center">
    <h1 v-if="error.statusCode === 404" class="mb-11 text-4xl font-bold text-red-500">404 - Page Not Found</h1>
    <h1 v-else class="mb-11 text-4xl font-bold text-red-500">An error occurred</h1>
    <p class="text-lg text-gray-700">{{ error.statusMessage }}</p>
    <NuxtLink to="/" class="mt-4 text-blue-500 underline"> Go back to Home </NuxtLink>
  </div>
</template>

<script setup>
const error = useError();
</script>
