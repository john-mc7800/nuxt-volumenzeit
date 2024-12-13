<script setup></script>

<template>
  <div class="bg-bg-[#F9FAFE chance bg-[url('@/assets/images/form/bg.jpg')] bg-cover bg-center pb-9 pt-16 sm:pb-[70px] sm:pt-14 lg:pb-14 lg:pt-16">
    <div class="chance__container mx-auto box-content flex max-w-6xl flex-col items-center justify-center gap-7 px-4">
      <h4 class="text-center text-3xl font-[700] capitalize leading-10 text-white sm:text-3xl lg:text-4xl">Don't miss your chance to get free Giveaway Sign up to our newsletter</h4>
      <p class="text-center text-sm leading-7 text-white">We will inform you about coming Giveaways, Offers, Online Store preparation progress and start of sales</p>
      <form action="files/sendmail/sendmail.php" method="POST" class="flex flex-col items-center justify-center gap-7">
        <div class="chance__form-top grid grid-cols-1 gap-5 lg:grid-cols-2">
          <input type="text" name="form[name]" placeholder="Name" class="input max-w-80 rounded-md bg-white px-7 py-3 md:py-6" />
          <input type="text" name="form[email]" placeholder="Email" class="input max-w-80 rounded-md bg-white px-7 py-3 md:py-5" />
        </div>
        <span>
          <button type="submit" class="button chance__button rounded-md border-b-2 border-black bg-black px-14 py-3 text-white hover:bg-white hover:text-black md:py-5">Sign Up</button>
        </span>
        <p class="chance__text text-center text-sm leading-7 text-white">You agree to our <a href="#">Terms and Conditions</a></p>
      </form>
    </div>
  </div>
</template>
