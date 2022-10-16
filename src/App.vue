<template>
  <div class="bg-[#1d1e21] h-auto items-center flex flex-col">
    <Hero />
    <MainVue :scrolledDown="!scrolledDown" />
  </div>
</template>

<script>
import debounce from 'lodash/debounce';
import Hero from './components/Hero.vue';
import MainVue from './components/Main.vue';

export default {
  components: {
    Hero,
    MainVue,
  },
  data: () => ({
    scrolledDown: false,
  }),
  mounted() {
    this.handleDebouncedScroll = debounce(this.detectScroll, 5);
    window.addEventListener('scroll', this.handleDebouncedScroll);
    let anchors = document.querySelectorAll('a[href^="#"]');

    for (let item of anchors) {
      item.addEventListener('click', (e) => {
        let hashval = item.getAttribute('href');
        let target = document.querySelector(hashval);
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        history.pushState(null, null, hashval);
        e.preventDefault();
      });
    }
  },
  methods: {
    detectScroll() {
      this.scrolledDown = window.scrollY > 0 ? true : false;
    },
  },
};
</script>
