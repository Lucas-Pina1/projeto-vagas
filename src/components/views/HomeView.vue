<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vaga></pesquisar-vaga>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col">
        <v-vaga></v-vaga>
        <div class="card-footer">
          <small class="text-mutted"
            >Salário: R$ 6.000,00 | Modalidade: Home Office | Tipo: CLT |
            Publicação: 10/11/2021
          </small>
        </div>
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
};
</script>

<style scoped></style>
