<template>
  <div>
    <h1>{{ titulo }}</h1>
    <button @click="atualizarComponente()">Atualizar</button>
    <button @click="conteudo = 'home-view'">Home</button>
    <button @click="conteudo = 'publicar-vaga'">Publicar Vaga</button>

    <keep-alive>
      <component :is="conteudo" />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "V-Conteudo",
  components: {
    HomeView: () => import("@/components/views/HomeView.vue"),
    PublicarVaga: () => import("@/components/views/PublicarVaga.vue"),
  },
  data() {
    return {
      teste: "o componente foi criado",
      titulo: "Componente Conteudo",
      conteudo: "home-view",
    };
  },
  methods: {
    atualizarComponente() {
      this.titulo += "*";
    },
    // },
    // beforeCreate() {
    //   console.log(" Antes de criar", this.teste);
    // },
    // created() {
    //   console.log("Criado", this.teste);
    // },
    // beforeMount() {
    //   console.log("Antes de montar o template");
    // },
    // mounted() {
    //   console.log("Montado");
    // },
    // beforeUpdate() {
    //   console.log("Antes de atualizar");
    // },
    // update() {
    //   console.log("Atualizado");
    // },
    // beforeUnmount() {
    //   console.log("Antes de desmontar/destruir");
    // },
    // Unmounted() {
    //   console.log("Desmontado/destruido");
    // },
    // errorCaptured() {
    //   console.log("Erro capturado");
    // },
    // renderTracked() {
    //   console.log("Re-renderização rastreada");
    // },
    // renderTriggerd() {
    //   console.log("Re-rederização acionada");
    // },
  },
};
</script>

<style scoped>
</style>