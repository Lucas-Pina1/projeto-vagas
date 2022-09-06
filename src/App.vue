<template>
  <div id="app">
    <topo-padrao />
    <conteudo></conteudo>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    Conteudo: () => import("@/components/layouts/V-Conteudo.vue"),
    TopoPadrao: () => import("@/components/layouts/TopoPadrao.vue"),
  },
};
</script>

<style scoped>
</style>
