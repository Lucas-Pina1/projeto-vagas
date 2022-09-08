<template>
  <div>
    <h1>Componente App</h1>
    <button @click="desmontarComponente()">
      Desmontar o componente Conteudo
    </button>
    <topo-padrao />
    <conteudo v-if="visibilidade"></conteudo>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      visibilidade: true,
    };
  },
  methods: {
    desmontarComponente() {
      this.visibilidade = false;
    },
  },
  components: {
    Conteudo: () => import("@/components/layouts/V-Conteudo.vue"),
    TopoPadrao: () => import("@/components/layouts/TopoPadrao.vue"),
  },
};
</script>

<style scoped>
</style>
