<script setup lang="js">
import DashBoardCard from '../MyAccount/DashboardCard.vue';
</script>

<template>
  <div class="md:pb-32">
    <div class="-mt-16 pb-10">
      <p class="text-center text-4xl font-[500] leading-10 text-black md:text-5xl md:font-[600]">Hey, Usama Mehmood</p>
      <p class="mx-3 mt-4 text-center text-sm font-normal leading-loose text-customTextGray md:mx-0">Welcome to your dashboard, your one-stop-shop for all your recent Volumenzeit account activity.</p>
    </div>
    <!-- Using Reusable Card Component -->
    <DashBoardCard title="Recent Orders" content="You haven't placed any order yet." />
    <DashBoardCard title="My Info" linkText="Manage Info" linkTo="#" content="Personal Information" name=" Usama Mehmood" email="mehmoodusama65@gmail.com" />
    <DashBoardCard title="Address Book" linkText="Manage Addresses" linkTo="#" content="You have not set up this type of address yet." />
    <DashBoardCard title="Subscriptions" linkText="Manage Subscriptions" linkTo="#" />
    <div class="mx-auto mb-16 w-fit pt-10 md:pb-12">
      <RouterLink to="#" class="rounded-md bg-customPurple px-16 py-4 text-sm leading-none text-white">Add New</RouterLink>
    </div>
  </div>
</template>
