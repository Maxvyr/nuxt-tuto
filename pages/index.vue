<template>
  <h1>Welcome to the homepage</h1>
  <AppAlert> This is an auto-imported component </AppAlert>
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
</template>
