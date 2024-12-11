
<script setup lang="ts">
  import About from '~/components/Home/About/About.vue';
import Design from '~/components/Home/design/Design.vue';
import Features from '~/components/Home/Features/Features.vue';
import Hero from '~/components/Home/Hero/Hero.vue';
import Mission from '~/components/Home/mission/Mission.vue';
import NewsLetter from '~/components/Home/NewsLetter/NewsLetter.vue';
import Watches from '~/components/Home/Watches/Watches.vue';
</script><template>
     <div class="overflow-hidden bg-customGray">
    <Hero/>
    <Features />
    <Design />
    <Mission />
    <Watches />
    <About />
    <NewsLetter />
  </div>
</template>
