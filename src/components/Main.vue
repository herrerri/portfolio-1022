<template>
  <div class="max-w-3xl flex items-start flex-col font-sans px-8 antialiased">
    <section class="relative">
      <Blobs />
      <div class="relative text-white font-bold text-5xl leading-tight">
        Hi, I'm
        <span class="">Ricardo.</span>
      </div>
      <div class="relative">
        <div class="mt-4 flex gap-2">
          <a
            class="bg-rose-100 hover:bg-stone-100 transition py-2 px-2 rounded-md font-semibold"
            href="#AboutMe">
            About
          </a>
          <a
            class="bg-orange-100 hover:bg-stone-100 transition py-2 px-2 rounded-md font-semibold"
            href="#Projects">
            Projects
          </a>
          <a
            class="bg-green-100 hover:bg-stone-100 transition py-2 px-2 rounded-md font-semibold"
            href="#Contact">
            Contact
          </a>
        </div>
      </div>
    </section>
    <section
      class="mt-16 text-white transition-all duration-300 ease-out max-w-2xl"
      :class="scrolledDown ? 'opacity-0 ' : 'opacity-100'"
      id="AboutMe">
      <div class="font-bold pt-16 text-zinc-400">About Me</div>
      <p class="mt-12 text-base leading-relaxed text-justify">
        Currently finishing up my computer science degree at Grand Valley State
        University. I've been creating things on computers since 2011 when I was
        13 posting my digital art on graphic design forums. Recently, I worked
        on the frontend for a web app for the first time during my senior
        capstone and knew almost instantly it was the path I wanted to take my
        talents in.
      </p>
      <p class="mt-4">
        Outside of school and coding, I work part-time at a warehouse, play a
        variety of video games casually, and enter weekly Super Smash Bros.
        Melee tournaments!
      </p>
    </section>
    <section
      class="mt-16 text-white transition-all duration-300 ease-out min-w-full"
      :class="scrolledDown ? 'opacity-0 ' : 'opacity-100 '"
      id="Projects">
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
      id="Contact">
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
          href="mailto:98rherrerasantos@gmail.com">
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
        images: ['/images/01anim.webm', '/images/01.webp'],
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
        images: ['/images/02anim.webm', '/images/02.webp'],
      },
      {
        name: 'Portfolio Website',
        tech: ['Vue3', 'ES6', 'TailwindCSS'],
        links: [
          { name: 'Code', link: 'https://github.com/herrerri/portfolio-1022' },
        ],
        images: ['/images/03anim.webm', '/images/03.webp'],
      },
    ],
  }),
  props: {
    scrolledDown: Boolean,
  },
};
</script>
