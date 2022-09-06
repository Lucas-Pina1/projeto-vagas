<template>
  <div>
    <h1>Componente Conteudo</h1>
    <home-view></home-view>
    <publicar-vaga></publicar-vaga>
  </div>
</template>

<script>
export default {
  name: "V-Conteudo",
  components: {
    HomeView: () => import("@/components/views/HomeView.vue"),
    PublicarVaga: () => import("@/components/views/PublicarVaga.vue"),
  },
};
</script>

<style scoped>
</style>