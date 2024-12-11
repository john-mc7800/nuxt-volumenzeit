<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <h1 v-if="error.statusCode === 404" class="text-red-500 text-4xl font-bold mb-4">
      404 - Page Not Found
    </h1>
    <h1 v-else class="text-red-500 text-4xl font-bold mb-4">
      An error occurred
    </h1>
    <p class="text-gray-700 text-lg">{{ error.statusMessage }}</p>
    <NuxtLink to="/" class="text-blue-500 mt-4 underline">
      Go back to Home
    </NuxtLink>
  </div>
</template>

<script setup>
const error = useError();
</script>
