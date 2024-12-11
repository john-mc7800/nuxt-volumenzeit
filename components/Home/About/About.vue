<script setup></script>
<template>
  <div class="about overflow-hidde box-border bg-[#fff] pb-[2.5rem] pt-[3.125rem]">
    <div class="about__container lg:rid-cols-[40%_1fr] relative mx-auto grid w-[85%] grid-cols-1 items-center justify-between gap-7 md:grid-cols-2 md:px-[.9375rem]">
      <div class="about__left box-border md:ml-10 lg:w-[24.75rem]">
        <h3 class="about__text-nav mb-[2.8125rem] text-center font-spaceAge text-[1.75rem] font-[400] leading-6 text-black sm:text-[2rem] lg:text-start lg:text-[2.625rem]">About us</h3>
        <p class="about__text-nav box-border break-words text-center leading-7 lg:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan volutpat tristique metus, nibh massa quam iaculis lectus. A dui nam phasellus porttitor nisi. Eget a quam est, eget dictum nisi. Sit donec aenean vivamus sagittis, blandit. Eleifend bibendum aliquet orci risus, velit. Lectus tellus amet</p>
      </div>
      <div class="about__right group relative">
        <a href="#" class="before:absolute before:h-[100%] before:w-[100%] before:rounded-md before:bg-gradient-to-t before:from-[#735cff] before:to-[#735cff] before:opacity-80 before:transition-opacity before:duration-500 before:ease-in-out before:content-[''] before:group-hover:opacity-50 2xl:before:h-96">
          <img class="about__video 2xl:w w-full 2xl:h-96" src="/public/images/about/video.png" alt="" />
          <span class="about__poligon absolute left-1/2 top-1/2 z-10 h-[60px] w-[60px] -translate-x-[39px] -translate-y-[39px] transform rounded-full bg-[#f5f9ff] transition-transform duration-500 ease-in-out before:absolute before:left-[calc(50%-51px)] before:top-[calc(50%-51px)] before:h-[102px] before:w-[102px] before:rounded-full before:bg-[#f5f9ff] before:opacity-20 before:content-[''] group-hover:scale-110 md:h-[80px] md:w-[80px]">
            <img class="w--8 absolute left-[31%] top-[21%] h-8 transition-transform duration-500 ease-in-out group-hover:scale-110 md:left-[24%] md:top-[20%] md:h-[50px] md:w-[50px]" src="/public/images/about/Polygon 1.svg" alt="" />
          </span>
        </a>
      </div>
    </div>
  </div>
</template>
