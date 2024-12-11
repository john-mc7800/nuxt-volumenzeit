<script setup lang="ts"></script>

<template>
  <div class="relative flex h-[100%] flex-col justify-center overflow-y-auto bg-white px-0 text-center font-sans">
    <div class="h-[45%] md:h-[35%]">
      <p class="text-sm font-normal leading-loose text-[#939393]">Your cart is currently empty!</p>
    </div>
    <div class="px- absolute bottom-0 h-[160px] w-full bg-[#f9fafe]">
      <div class="mb-[28px]">
        <div class="py-[16px]">
          <strong class="flex flex-row items-center justify-between">
            <span class="text-[10px] font-normal">Shipping:</span>
            <span class="text-[20px] leading-7">€0</span>
          </strong>
        </div>
        <div class="mb-[10px] border-b pb-[6px] text-left leading-loose">
          <p class="text-[10px] font-normal leading-loose">Shipping, taxes, and discounts calculated at checkout.</p>
        </div>
        <div class="pb-[6px]">
          <strong class="flex flex-row items-center justify-between">
            <span class="text-left text-[10px] font-normal">Subtotal:</span>
            <span class="text-[20px] leading-7">€0</span>
          </strong>
        </div>
      </div>
    </div>
  </div>
</template>
