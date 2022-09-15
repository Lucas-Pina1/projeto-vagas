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
      vagas: [
        {
          titulo: "Analista Programador PHP Pleno",
          descricao:
            "Profissional com conhecimentos em PHP, Laravel e MySQL. Necessário 3 anos de experiências. Atuará na manutenção de sistemas legados da empresa.",
          salario: 6000,
          modalidade: "Home Office",
          tipo: "PJ",
          publicacao: "2021-10-10",
        },
        {
          titulo: "Programador JavaScript Angular",
          descricao:
            "Profissional com conhecimentos avançados em JavaScript e Angular.",
          salario: 5000,
          modalidade: "Presencial",
          tipo: "CLT",
          publicacao: "2021-10-07",
        },
        {
          titulo: "Programador JavaScript Vue",
          descricao:
            "Profissional com conhecimentos avançados em JavaScript e Vue.",
          salario: 5000,
          modalidade: "Home Office",
          tipo: "CLT",
          publicacao: "2021-10-06",
        },
        {
          titulo: "Analista de Banco de Dados Sênior",
          descricao:
            "Domínio dos bancos de dados SQL Server, Oracle, Postgre e MySQL",
          salario: 9000,
          modalidade: "Presencial",
          tipo: "PJ",
          publicacao: "2021-10-06",
        },
        {
          titulo: "Programador Web Júnior",
          descricao:
            "Conhecimentos básicos em HTML, CSS, JavaScript, Bootstrap, PHP e MySQL",
          salario: 3000,
          modalidade: "Presencial",
          tipo: "CLT",
          publicacao: "2021-10-05",
        },
      ],
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
