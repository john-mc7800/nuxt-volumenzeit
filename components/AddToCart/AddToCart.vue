<script setup lang="ts"></script>

<template>
  <div class="relative flex h-[100%] flex-col justify-center overflow-y-auto bg-white px-0 text-center font-sans">
    <div class="h-[45%] md:h-[35%]">
      <p class="text-sm font-normal leading-loose text-[#939393]">Your cart is currently empty!</p>
    </div>
    <div class="h-0.540 absolute bottom-0 w-full bg-[#f9fafe]">
      <div class="mb-7 px-4">
        <div class="py-4">
          <strong class="flex flex-row items-center justify-between">
            <span class="text-xs font-normal">Shipping:</span>
            <span class="text-xl leading-7">€0</span>
          </strong>
        </div>
        <div class="mb-3 border-b pb-2 text-left leading-loose">
          <p class="text-xs font-normal leading-loose">Shipping, taxes, and discounts calculated at checkout.</p>
        </div>
        <div class="pb-2">
          <strong class="flex flex-row items-center justify-between">
            <span class="text-left text-xs font-normal">Subtotal:</span>
            <span class="text-xl leading-7">€0</span>
          </strong>
        </div>
      </div>
    </div>
  </div>
</template>
