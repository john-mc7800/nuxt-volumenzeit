<script setup lang="js">
import { ref } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';

const items = ref([
  { label: 'Product', route: '/product' },
  { label: 'Heart Song 1', route: '#' },
]);
</script>

<template>
  <!-- title section -->
  <div class="w-full bg-customPurple md:mt-24 lg:mt-0">
    <div class="mx-auto max-w-6xl px-7 py-3">
      <h1 data-aos="fade-right" class="font-spaceAge text-3xl text-white md:text-[42px]">Product</h1>
      <Breadcrumb :model="items" class="bg-transparent p-0 pb-4" data-aos="fade-right">
        <template #item="{ item, props }">
          <div>
            <NuxtLink v-if="item.route" :to="item.route" v-bind="props.action" @click="props.navigate" class="breadcrumb-link">
              <span :class="[item.icon, 'text-color']"></span>
              <span class="text-white">{{ item.label }}</span>
            </NuxtLink>
            <a v-else :href="item.url" :target="item.target" v-bind="props.action" class="breadcrumb-link">
              <span class="text-white">{{ item.label }}</span>
            </a>
          </div>
        </template>

        <template #separator>/</template>
      </Breadcrumb>
    </div>
  </div>
</template>

<style scoped>
/* Style corrections */
:v-deep(.p-breadcrumb-separator) {
  color: white !important;
}

:v-deep(.p-breadcrumb-list) {
  gap: 2px !important;
  font-size: 14px;
  line-height: 16px;
}

:v-deep(.p-breadcrumb-item-link) {
  gap: 2px !important;
  font-size: 14px;
  line-height: 16px;
}
</style>
