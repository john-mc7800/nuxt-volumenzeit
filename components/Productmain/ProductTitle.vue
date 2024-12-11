<script setup lang="js">
import { ref } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';

const items = ref([
  { label: 'Product', route: '/product' },
  { label: 'Heart Song 1', route: '#' },
]);
</script>

<template>
  <!-- title section  -->
  <div class="w-full bg-customPurple md:mt-[95px] lg:mt-0">
    <div class="mx-auto max-w-[1140px] px-7 py-[10px]">
      <h1 data-aos="fade-right" class="font-spaceAge text-[28px] text-white md:text-[42px]">Product</h1>
      <Breadcrumb :model="items" class="bg-transparent p-0 pb-4" data-aos="fade-right">
        <template #item="{ item, props }">
          <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a :href="href" v-bind="props.action" @click="navigate" class="breadcrumb-link">
              <span :class="[item.icon, 'text-color']" />
              <span class="text-white">{{ item.label }}</span>
            </a>
          </router-link>
          <a v-else :href="item.url" :target="item.target" v-bind="props.action" class="breadcrumb-link">
            <span class="text-white">{{ item.label }}</span>
          </a>
        </template>
        <template #separator>/</template>
      </Breadcrumb>
    </div>
  </div>
</template>

<style lang="" scoped>
:v-deep .p-breadcrumb-separator {
  color: white !important;
}

:v-deep .p-breadcrumb-list {
  gap: 2px !important;
  font-size: 14px;
  line-height: 16px;
}
:v-deep .p-breadcrumb-item-link {
  gap: 2px !important;
  font-size: 14px;
  line-height: 16px;
}
</style>
