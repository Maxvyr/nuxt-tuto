<script setup lang="ts">
const route = useRoute();

useHead({
  meta: [{ property: "og:title", content: `App Name - ${route.meta.title}` }],
});
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold">
      Some default layout content shared across all pages
    </h1>
    <slot />
  </div>
</template>
