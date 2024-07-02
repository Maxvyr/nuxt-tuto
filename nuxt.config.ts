// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Nuxt App",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
    // pageTransition: {
    //   name: "page",
    //   mode: "out-in",
    // },
  },
  // experimental: {
  //   componentIslands: true,
  // },
});
