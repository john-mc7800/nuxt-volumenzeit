<script setup lang="js">
import PriceRange from '../PriceRange.vue';
import Filters from '../Filters.vue';
import { useRoute } from 'vue-router';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import { ref, watch } from 'vue';
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';

const value3 = ref(null);

const props = defineProps({
  ShowFilters: {
    type: Boolean,
    default: true,
  },
});

watch(
  () => props.ShowFilters,
  (newVal) => {
    console.log('ShowFilters:', newVal);
  }
);

const route = useRoute();
</script>

<template>
  <!-- Filter/Leftside for large screens -->
  <div data-ao="fade-right" class="relative mr-7 hidden h-[978px] w-full justify-end bg-[#f9fafe] pb-24 pr-12 pt-8 text-xs md:flex">
    <div class="h-20 w-full max-w-52 space-y-2 text-start font-[400] text-[#939393]">
      <div class="w-fit max-w-52 space-y-2 border-b-2 border-gray-500 border-opacity-60 pb-3">
        <IconField>
          <InputIcon class="pi pi-search" />
          <InputText id="on_label" v-model="value3" autocomplete="on" class="h-0.54.50 w-fit max-w-52 bg-[#f9fafe]" />
        </IconField>
      </div>

      <h3 class="filter_heading pt-3">Select Products</h3>
      <div class="space-y-4 text-xs">
        <ul class="space-y-3">
          <li class="py-1 font-[400]">
            <NuxtLink to="/Watches" :class="{ 'font-[600] text-black transition-colors': route.path === '/Watches' }">Watches</NuxtLink>
          </li>
          <li class="py-1 font-[400]"><<NuxtLink to="#" :class="{ 'font-[600] text-black transition-colors': route.path === '/Jewelry' }">Jewelry</NuxtLink></li>
          <li class="py-1 font-[400]">
            <NuxtLink to="#" :class="{ 'font-[600] text-black transition-colors': route.path === '/Accessories' }">Accessories</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="space-y-2 border-b-2 border-gray-500 border-opacity-60">
        <div class="space-y-2">
          <h3 class="filter_heading pt-[3 !font-[600] text-black">Filter by price</h3>
          <div class="mb-6">
            <PriceRange />
          </div>
        </div>
      </div>
      <!-- Conditionally render Filters -->
      <div v-if="ShowFilters">
        <Filters />
      </div>
    </div>
  </div>
</template>

<style scoped>
.filter_heading {
  font-size: 10px;
  font-weight: 700;
  color: black;
}
</style>
