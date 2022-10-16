<template>
  <div class="max-w-3xl flex items-start flex-col font-sans px-8 antialiased">
    <section class="relative">
      <Blobs />
      <div class="relative text-white font-bold text-6xl leading-tight">
        Hi, I'm Ricardo.
      </div>
      <div class="relative">
        <div class="mt-4 flex gap-2">
          <a
            class="bg-rose-100 hover:bg-stone-100 py-2 px-4 rounded-md font-semibold"
            href="#AboutMe"
          >
            About
          </a>
          <a
            class="bg-orange-100 hover:bg-stone-100 py-2 px-4 rounded-md font-semibold"
            href="#Projects"
          >
            Projects
          </a>
          <a
            class="bg-green-100 hover:bg-stone-100 py-2 px-4 rounded-md font-semibold"
            href="#Contact"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
    <section
      class="mt-16 text-white transition-all duration-300 ease-out max-w-2xl"
      :class="scrolledDown ? 'opacity-0 ' : 'opacity-100'"
      id="AboutMe"
    >
      <div class="font-bold pt-16 text-zinc-400">About Me</div>
      <div class="mt-12 text-base leading-relaxed text-justify">
        Currently finishing up my studies at Grand Valley State University. I
        worked on a web application for the first time during my senior capstone
        and knew almost instantly it was the direction I wanted to head in.
      </div>
    </section>
    <section
      class="mt-16 text-white transition-all duration-300 ease-out min-w-full"
      :class="scrolledDown ? 'opacity-0 ' : 'opacity-100 '"
      id="Projects"
    >
      <div class="font-bold pt-16 text-zinc-400" id="Projects">Projects</div>
      <div class="mt-12 text-base leading-relaxed">
        <Card :project="projects[0]" />
        <Card :project="projects[1]" />
        <Card :project="projects[2]" />
      </div>
    </section>
    <section
      class="mt-16 mb-[70vh] text-white transition-all duration-300 ease-out"
      :class="scrolledDown ? 'opacity-0 ' : 'opacity-100 '"
      id="Contact"
    >
      <div class="font-bold pt-16 text-zinc-400">Contact</div>
      <div class="mt-12 text-base leading-relaxed pb-36">
        <a href="https://github.com/herrerri" target="_blank" class="underline"
          >https://github.com/herrerri</a
        >
        <br />
        98rherrerasantos@gmail.com
        <br />
        <a
          class="font-semibold underline"
          href="mailto:98rherrerasantos@gmail.com"
        >
          Send Email
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import Card from './global/Card.vue';
import Blobs from './global/Blobs.vue';

export default {
  components: { Card, Blobs },
  data: () => ({
    projects: [
      {
        name: 'Fate/Grand Order Planner',
        tech: ['React', 'ES6', 'Axios', 'CRUD'],
        links: [
          { name: 'Demo', link: 'https://fgo-planner.netlify.app/' },
          { name: 'Code', link: 'https://github.com/herrerri/fgo-planner' },
        ],
        images: ['/images/01anim.gif', '/images/01.png'],
      },
      {
        name: 'Pokemon Dashboard',
        tech: ['React', 'ES6', 'Component Library'],
        links: [
          { name: 'Demo', link: 'https://pokemon-dashboard-22.netlify.app/' },
          {
            name: 'Code',
            link: 'https://github.com/herrerri/pokemon-dashboard',
          },
        ],
        images: ['/images/02anim.gif', '/images/02.png'],
      },
      {
        name: 'Portfolio Website',
        tech: ['Vue3', 'ES6', 'TailwindCSS'],
        links: [
          { name: 'Code', link: 'https://github.com/herrerri/portfolio-1022' },
        ],
        images: ['/images/03anim.gif', '/images/03.png'],
      },
    ],
  }),
  props: {
    scrolledDown: Boolean,
  },
};
</script>
