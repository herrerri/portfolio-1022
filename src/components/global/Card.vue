<template>
  <div
    :style="{
      backgroundImage: `url(${project.images[0]})`,
      backgroundSize: 'cover',
    }"
    class="drop-shadow-xl rounded-lg max-w-2xl mt-9 bg-[url(project.images[1])]">
    <div
      class="hover:opacity-100 md:opacity-0 transition rounded-[6px] bg-gradient-to-t from-zinc-900 via-zinc-900/80">
      <div class="pt-48 pb-8 px-5">
        <div class="font-medium text-2xl">{{ project.name }}</div>
        <div class="text-sm font-medium mt-[2px] text-zinc-400 flex gap-4">
          <text v-for="item in project.tech">{{ item }}</text>
        </div>
        <div class="text-sm font-medium mt-3 flex gap-2">
          <a
            v-for="item in project.links"
            :href="item.link"
            target="_blank"
            class="hover:text-stone-400"
            >{{ item.name }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { project: Object },
};
</script>
