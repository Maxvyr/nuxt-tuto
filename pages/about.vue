<script setup lang="ts">
const title = ref("About");

definePageMeta({
  title: "About",
});
</script>

<template>
  <section>
    <h1 class="text-2xl font-bold text-foreground">{{ title }}</h1>
    <p>This page will be displayed at the /about route.</p>
    <NuxtLink to="/">Home</NuxtLink>
  </section>
</template>
