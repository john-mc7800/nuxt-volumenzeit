<script setup lang="js">
import { ref } from 'vue';

// Data and reactive properties
const strap = ref();
const attributes = [
  { label: 'Case Color', value: 'Charcoal Stone' },
  { label: 'Case Size', value: '42 mm' },
  { label: 'Coating', value: 'Color anodized anti-scratch' },
  { label: 'Dial Color', value: 'Fuchsia Tinge' },
  { label: 'Dial Design', value: 'Heart Song' },
  { label: 'Glass', value: 'Sapphire Crystal' },
  { label: 'Instantaneous rate', value: '-10/ +20 sec/month' },
  { label: 'Movement', value: 'Swiss Parts RONDA 762E' },
  { label: 'Standard Battery life', value: '10 years' },
  { label: 'Straps', value: '22 mm Leather Strap' },
  { label: 'Water Resistance', value: '5 ATM/50 meters' },
  { label: 'Strap Design', value: 'Shadow Black Leather' },
];
const products = ref([
  { name: 'Keychain Heart Song Pink', color: 'Handcrafted Silicone Keychain', price: '€41', imageUrl: new URL('@/assets/images/Accessories/KC4.webp', import.meta.url).href, hoverImageUrl: new URL('@/assets/images/Accessories/KC4a.webp', import.meta.url).href },
  { name: 'Heart Song Pendant', color: 'Silver Pendant + Silver Chain', price: '€104', imageUrl: new URL('@/assets/images/Jewelry/Pendant_HeartSong_with_chain.webp', import.meta.url).href },
]);
const images = [
  { src: '/images/warchespage/watches2/watches1.webp', alt: 'Watches Image 1', class: '' },
  { src: '/images/warchespage/watches/watches1.webp', alt: 'Watches Image 2', class: '' },
  { src: '/images/productpage/p1.webp', alt: 'Product Image 1', class: 'h-53 w-full rounded-md' },
  { src: '/images/productpage/p2.jpg', alt: 'Product Image 2', class: 'h-[240px] w-full rounded-md' },
];
</script>

<template>
  <div class="bg-white">
    <div class="grid-col-1 mx-auto grid max-w-[1140px] bg-white px-4 pb-[115px] pt-[45px] lg:grid-cols-[730px_1fr]">
      <!-- Left Side -->
      <div class="lg::pr-5 mx-auto h-auto w-full max-w-[730px]">
        <div class="mx-auto grid grid-cols-1 gap-7 md:grid-cols-2">
          <!-- Images Section -->
          <div v-for="(image, index) in images" :key="index" class="h-full w-full object-contain">
            <img dataAos="zoom-in-up" , dataAosDelay="100" dataAosDuration="1000" :src="image.src" :alt="image.alt" :class="image.class" />
          </div>
        </div>
        <!-- Product Details -->
        <div class="text-[12px] text-black">
          <h3 class="mb-[20px] mt-[30px] text-lg font-[600]">About the product</h3>
          <p class="text-customTextGray">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
        </div>
        <div class="py-20">
          <h1 class="text-[25px] text-black">You may also like</h1>
          <!-- card  -->
          <div class="grid max-w-[825px] grid-cols-1 gap-8 pt-[24px] md:grid-cols-[40%_40%]">
            <div v-for="product in products" :key="product.name" class="h-full md:mr-[31px]">
              <div class="m-0 text-center text-black" data-aos="fade-up">
                <a href="#" class="group relative mx-auto mb-[15px] flex w-full flex-col items-center gap-y-4 text-center" @mouseenter="product.isHovered = true" @mouseleave="product.isHovered = false">
                  <div class="h-full w-full rounded-xl">
                    <img :src="product.imageUrl" :alt="product.name" class="m-auto h-auto w-full object-contain transition-all duration-200 ease-in-out group-hover:scale-95" height="200px" width="200px" />
                  </div>
                  <h3 class="mb-1 text-center text-sm font-normal leading-3 text-customTextGray">{{ product.name }}</h3>
                  <h6 class="text-center text-lg leading-none text-black">{{ product.price }}</h6>
                  <div class="mb-6 mt-1 w-full items-center justify-center">
                    <button class="w-full rounded-[5px] bg-customPurple py-5 text-center leading-none text-white">Place an Order</button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Side -->
      <div class="mx-auto flex w-full flex-col pt-4 md:px-12 lg:max-w-[350px] lg:px-0 lg:pt-0">
        <h2 class="mb-[15px] mt-4 text-center text-[25px] font-[450] leading-5 text-black md:mt-0 md:text-left md:leading-none">Heart Song 1</h2>
        <p class="mb-2 text-center text-sm leading-tight text-customTextGray md:mb-[17px] md:text-left">Fuchsia Tinge</p>

        <!-- Attributes -->
        <div class="border-y py-3">
          <div v-for="(item, index) in attributes" :key="index" class="grid grid-cols-2">
            <div class="py-1 text-left text-[12px] font-normal text-customTextGray">{{ item.label }}</div>
            <div class="text-right text-[12px] font-normal text-customTextGray">{{ item.value }}</div>
          </div>
        </div>

        <!-- Extra Strap Option -->
        <div class="my-[13px] w-full space-y-3 bg-white">
          <div class="flex items-center gap-[5px] text-[12px] font-normal leading-loose text-[#939393]">
            <input id="ingredient1" type="checkbox" v-model="strap" class="checked:before:-mt-0.7 h-5 w-5 cursor-default appearance-none rounded-md bg-gray-100 text-sm leading-tight text-customTextGray checked:border-purple-600 checked:bg-purple-600 checked:before:flex checked:before:justify-center checked:before:text-sm checked:before:text-white checked:before:content-['✔']" />
            <label for="ingredient1" class="text-sm font-medium text-customTextGray"> Extra Strap </label>
            <p class="cursor-default">(From €20)</p>
            <button class="h-0.54 flex w-6 cursor-default items-center justify-center rounded-full text-gray-600 transition-colors duration-200">
              <i class="pi pi-info-circle" style="font-size: 1rem"></i>
            </button>
          </div>
          <div class="flex items-center gap-[5px] text-[12px] font-normal leading-loose text-[#939393]">
            <input id="ingredient1" type="checkbox" v-model="strap" class="checked:before:-mt-0.7 h-5 w-5 cursor-default appearance-none rounded-md bg-gray-100 text-sm leading-tight text-customTextGray checked:border-purple-600 checked:bg-purple-600 checked:before:flex checked:before:justify-center checked:before:text-sm checked:before:text-white checked:before:content-['✔']" />
            <label for="ingredient1" class="text-sm font-medium text-customTextGray"> Laser Engraving </label>
            <p class="cursor-default">(+€20)</p>
            <button class="h-0.54 flex w-6 cursor-default items-center justify-center rounded-full text-gray-600 transition-colors duration-200">
              <i class="pi pi-info-circle" style="font-size: 1rem"></i>
            </button>
          </div>
        </div>

        <div class="mb-6 mt-1 grid w-full min-w-max grid-cols-1 items-center justify-center gap-4 md:grid-cols-2 md:gap-0">
          <button class="rounded-[5px] bg-customPurple px-11 py-5 text-center leading-none text-white">Place an Order</button>
          <p class="w-full max-w-full text-center text-xl font-normal text-black">€297</p>
        </div>
        <RouterLink to="#" class="mb-5 flex flex-row items-center justify-center gap-2 rounded-[5px] border border-black px-5 py-3">
          <img :src="require('@/assets/images/box.png')" alt="Box Image" class="h-8 w-8 rounded-md" />

          Try on in AR Online</RouterLink
        >
        <RouterLink to="#" class="mb-5 w-full rounded-[5px] bg-customPurple py-4 text-center text-white">Design Your Watch</RouterLink>
      </div>
    </div>
  </div>
</template>
