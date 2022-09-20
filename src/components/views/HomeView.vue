<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vaga></pesquisar-vaga>
      </div>
    </div>

    <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
      <div class="col">
        <v-vaga v-bind="vaga"></v-vaga>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-4">
        <v-indicador
          titulo="Vagas abertas"
          indicador="100"
          bg="bg-dark"
          color="text-white"
        ></v-indicador>
      </div>

      <div class="col-4">
        <v-indicador
          titulo="Profissionais cadastrados"
          indicador="225"
          bg="bg-dark"
          color="text-white"
        >
        </v-indicador>
      </div>

      <div class="col-4">
        <v-indicador
          titulo="Visitantes online"
          :indicador="usuariosOnline"
          bg="bg-dark"
          color="text-white"
        ></v-indicador>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {
    PesquisarVaga: () => import("@/components/comuns/PesquisarVaga.vue"),
    VIndicador: () => import("@/components/comuns/V-Indicador.vue"),
    VVaga: () => import("@/components/comuns/V-Vaga.vue"),
  },
  data() {
    return {
      usuariosOnline: 0,
      vagas: [],
    };
  },
  methods: {
    getsUsuariosOnline() {
      this.usuariosOnline = Math.floor(Math.random() * 101); // entre 0 e 100
    },
  },
  created() {
    setInterval(this.getsUsuariosOnline, 1000); // cada 1 segundo
  },
  activated() {
    this.vagas = JSON.parse(localStorage.getItem("vagas"));
  },
};
</script>

<style scoped></style>
