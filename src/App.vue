<template>
  <div>
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
  },
};
</script>

<style scoped>
</style>
