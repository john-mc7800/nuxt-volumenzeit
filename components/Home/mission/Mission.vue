<script setup>
import DesignButton from '@/components/DesignButton.vue';
</script>
<template>
  <div data-watch="navigator" data-watch-margin="-40%" class="mission relative grid grid-cols-1 overflow-hidden bg-black text-white before:absolute before:right-[-46px] before:top-[-71px] before:box-border before:h-[133.31px] before:w-[100px] before:rotate-[-45deg] before:bg-[#735cff] before:content-none after:absolute after:bottom-0 after:left-0 after:h-[110px] after:w-[45%] after:bg-cover after:bg-right after:bg-no-repeat after:content-[''] lg:min-w-[821px] lg:grid-cols-[35%_75%] lg:before:content-[''] lg:after:bg-[url('@/assets/images/mission/rectg.svg')]">
    <div class="h-[100%] w-full before:content-none after:bottom-0 after:left-[368px] after:right-0 after:top-0 after:h-full after:w-[107px] after:bg-gradient-to-l after:from-black after:to-transparent lg:before:content-[''] lg:after:absolute xl:after:left-[400px] 2xl:after:left-[800px]">
      <img src="@/assets/images/mission/Volumenzeit_M-25 1.png" alt="" class="h-[100%] w-full text-start align-top" />
    </div>

    <div class="mission__container relative mx-auto my-10 flex max-w-6xl flex-col items-end p-3 px-4 text-center lg:my-0 lg:px-0 lg:text-start">
      <div class="mission__inner flex h-[100%] flex-col items-start justify-center gap-10 text-[#dedede] lg:w-[404px]">
        <h3 data-aos="fade-left" class="mx-auto font-spaceAge text-3xl font-normal leading-6 text-white lg:mx-0 lg:text-5xl 2xl:text-6xl">Our Mission</h3>
        <p data-aos="fade-left" data-aos-delay="50" class="text-sm font-normal leading-7 2xl:text-2xl">We have invested 6 year of our lifes to invent a new technology of production a 3D dials with quality of wristwatch industry. All what we need to turn on our imagination on maximum.</p>
        <p data-aos="fade-left" data-aos-delay="100" class="mx-4 text-sm font-normal leading-7 lg:mx-0 2xl:text-2xl">We love Out-of-the-box designs and believe there are many people who thinks the same.</p>
        <div class="button2 mx-auto mb-16 w-fit lg:mx-0 lg:mb-0" data-aos="fade-left" data-aos-delay="150">
          <DesignButton label="Design Your Watch" />
        </div>
      </div>
    </div>
  </div>
</template>
