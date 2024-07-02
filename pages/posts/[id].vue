<script setup lang="ts">
const route = useRoute();
// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id);

useHead({
  title: "Post " + route.params.id,
  meta: [{ name: "post details", content: "This is the post details page" }],
  // script: [{ innerHTML: "console.log('Hello world')" }],
});
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h2 class="text-2xl font-bold text-foreground">
      Post {{ $route.params.id }}
    </h2>
  </div>
</template>
