<template>
  <div>
    <vagas-favoritas></vagas-favoritas>
    <h1>Componente App</h1>
    <topo-padrao @navegar="componente = $event" />
    <conteudo v-if="visibilidade" :conteudo="componente"></conteudo>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      visibilidade: true,
      componente: "Home",
    };
  },
  components: {
    Conteudo: () => import("@/components/layouts/V-Conteudo.vue"),
    TopoPadrao: () => import("@/components/layouts/TopoPadrao.vue"),
    VagasFavoritas: () => import("@/components/comuns/vagasFavoritas.vue"),
  },
};
</script>

<style scoped>
</style>
