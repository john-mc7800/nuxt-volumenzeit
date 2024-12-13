<script setup lang="ts">
import Footer from '~/components/Footer/Footer.vue';
</script>

<template>
  <div>
    <Navbar />
    <div class="mt-[70px] md:mt-20">
      <slot />
    </div>
    <Footer />
  </div>
</template>
