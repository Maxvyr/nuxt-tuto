<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Pandamy` : "Pandamy";
  },
});

const title = ref("Hello world");
</script>

<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="title" />
    <!-- <Style type="text/css" children="body { background-color: green; }"></Style> -->
  </Head>
  <Body>
    <h1 class="text-2xl font-bold text-foreground">{{ title }}</h1>
    <h3>This is an auto-imported component</h3>
    <div class="flex flex-row items-center justify-between p-4">
      <nav>
        <ul>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/posts/1">Post 1</NuxtLink></li>
          <li><NuxtLink to="/posts/2">Post 2</NuxtLink></li>
          <li><NuxtLink to="/dashboard">Dashboard</NuxtLink></li>
          <li><NuxtLink to="/login">Login</NuxtLink></li>
        </ul>
      </nav>
      <img class="size-1/2" src="/img/nuxt.png" alt="Discover Nuxt 3" />
    </div>
  </Body>
</template>
