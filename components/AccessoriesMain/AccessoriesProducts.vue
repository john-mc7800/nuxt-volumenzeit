<script setup lang="js">
import { ref, computed } from 'vue';
import Paginator from 'primevue/paginator';

const products = ref([
  { name: 'Dancing Pink Milanese Strap', color: 'Milanese Mesh Strap', price: '€20', imageUrl: '/Accessories/strap/milanese/beacelet3.webp', hoverImageUrl: '/Accessories/strap/bracelet/beacelet1.webp' },
  { name: 'Dusted Pink Bracelet', color: 'Stainless Steel Bracelet', price: '€20', imageUrl: '/Accessories/strap/milanese/beacelet4.webp', hoverImageUrl: '/Accessories/strap/bracelet/beacelet2.webp' },
  { name: 'Keychain Heart Song Black', color: 'Handcrafted Silicone Keychain', price: '€41', imageUrl: '/Accessories/KC1.webp', hoverImageUrl: '/Accessories/KC1a.webp' },
  { name: 'Keychain Heart Song Blue', color: 'Handcrafted Silicone Keychain', price: '€41', imageUrl: '/Accessories/KC2.webp', hoverImageUrl: '/Accessories/KC2a.webp' },
  { name: 'Keychain Heart Song Green', color: 'Handcrafted Silicone Keychain', price: '€41', imageUrl: '/Accessories/KC3.webp', hoverImageUrl: '/Accessories/KC3a.webp' },
  { name: 'Keychain Heart Song Pink', color: 'Handcrafted Silicone Keychain', price: '€41', imageUrl: '/Accessories/KC4.webp', hoverImageUrl: '/Accessories/KC4a.webp' },
  { name: 'Keychain Rising High Black', color: 'Handcrafted Silicone Keychain', price: '€41', imageUrl: '/Accessories/KC5.webp', hoverImageUrl: '/Accessories/KC5a.webp' },
  { name: 'Keychain Rising High Blue', color: 'Handcrafted Silicone Keychain', price: '€41', imageUrl: '/Accessories/KC6.webp', hoverImageUrl: '/Accessories/KC6a.webp' },
  { name: 'Keychain Rising High Green', color: 'Handcrafted Silicone Keychain', price: '€41', imageUrl: '/Accessories/KC7.webp', hoverImageUrl: '/Accessories/KC7a.webp' },
  { name: 'Keychain Rising High Pink', color: 'Handcrafted Silicone Keychain', price: '€41', imageUrl: '/Accessories/KC8.webp', hoverImageUrl: '/Accessories/KC8a.webp' },
  { name: 'Keychain Urban Eagle Black', color: 'Handcrafted Silicone Keychain', price: '€41', imageUrl: '/Accessories/KC9.webp', hoverImageUrl: '/Accessories/KC9a.webp' },
  { name: 'Keychain Urban Eagle Blue', color: 'Handcrafted Silicone Keychain', price: '€41', imageUrl: '/Accessories/kC10.webp', hoverImageUrl: '/Accessories/KC10a.webp' },
  { name: 'Keychain Rising High Blue', color: 'Handcrafted Silicone Keychain', price: '€41', imageUrl: '/Accessories/KC6.webp', hoverImageUrl: '/Accessories/KC6a.webp' },
  { name: 'Keychain Rising High Green', color: 'Handcrafted Silicone Keychain', price: '€41', imageUrl: '/Accessories/KC7.webp', hoverImageUrl: '/Accessories/KC7a.webp' },
  { name: 'Keychain Rising High Pink', color: 'Handcrafted Silicone Keychain', price: '€41', imageUrl: '/Accessories/KC8.webp', hoverImageUrl: '/Accessories/KC8a.webp' },
  { name: 'Keychain Urban Eagle Black', color: 'Handcrafted Silicone Keychain', price: '€41', imageUrl: '/Accessories/KC9.webp', hoverImageUrl: '/Accessories/KC9a.webp' },
  { name: 'Keychain Urban Eagle Blue', color: 'Handcrafted Silicone Keychain', price: '€41', imageUrl: '/Accessories/kC10.webp', hoverImageUrl: '/Accessories/KC10a.webp' },
]);

const currentPage = ref(1);
const itemsPerPage = 12;

const paginatedProducts = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  return products.value.slice(startIndex, startIndex + itemsPerPage);
});

const totalPages = computed(() => Math.ceil(products.value.length / itemsPerPage));

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};
</script>

<template>
  <div class="min-h-[850px]">
    <div class="mb-[70px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="product in paginatedProducts" :key="product.name" class="h-full w-full">
        <div class="h-92 m-0 text-center text-black" data-aos="fade-up">
          <NuxtLink href="/product" class="group relative mb-11 flex w-full flex-col items-center gap-y-1 object-contain text-center" @mouseenter="product.isHovered = true" @mouseleave="product.isHovered = false">
            <div class="h-full w-full rounded-xl">
              <img :src="product.isHovered ? product.hoverImageUrl : product.imageUrl" :alt="product.name" class="h-0.544 m-auto w-full object-contain transition-all duration-200 ease-in-out group-hover:scale-95" />
            </div>
            <h3 class="mb-1 text-center text-sm font-[500] leading-3 text-black">{{ product.name }}</h3>
            <p class="mB-1 leading-extra-loose text-center text-xs leading-3 text-[#939393]">{{ product.color }}</p>
            <h6 class="text-center text-lg leading-none text-black">{{ product.price }}</h6>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <!-- <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator> -->

  <div class="mt-6 grid w-full grid-cols-1 items-center justify-between lg:grid-cols-2">
    <div class="flex items-center justify-center lg:justify-start">
      <button @click="prevPage" :disabled="currentPage === 1" class="mx-2 rounded-md bg-customPurple px-4 py-2 text-white disabled:opacity-50">Previous</button>

      <div class="flex">
        <button v-for="page in totalPages" :key="page" @click="goToPage(page)" :class="['mx-1 rounded-md px-4 py-2', currentPage === page ? 'bg-customPurple text-white' : 'bg-gray-200 hover:bg-gray-300']">
          {{ page }}
        </button>
      </div>

      <button @click="nextPage" :disabled="currentPage === totalPages" class="mx-2 rounded-md bg-customPurple px-4 py-2 text-white disabled:opacity-50">Next</button>
    </div>

    <div class="mt-20 text-center lg:mt-0 lg:text-end">
      <NuxtLink to="#" class="rounded-md bg-customPurple px-11 py-5 text-white lg:pl-28 lg:pr-28"> Design Your Watch </NuxtLink>
    </div>
  </div>
</template>
