<template>
  <div class="card">
    <div class="card-header bg-dark text-white">{{ Titulo }}</div>
    <div class="card-body">
      <p>{{ descricao }}</p>
    </div>
    <div class="card-footer">
      <small class="text-mutted"
        >{{ salario }} | {{ getModalidade }} | {{ getTipo }} |
        {{ publicacao }}</small
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "v-vaga",
  // props: ["titulo", "descricao", "salario", "modalidade", "tipo", "publicacao"],
  props: {
    titulo: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
      default() {
        return "*".repeat(20);
      },
    },
    salario: {
      type: [Number, String],
      required: true,
    },
    modalidade: {
      type: String,
      required: true,
    },
    tipo: {
      type: String,
      required: true,
    },
    publicacao: {
      type: String,
      required: true,
    },
    computed: {
      getMOdalidae() {
        switch (this.modaldiade) {
          case "1":
            return "Home Office";
          case "2":
            return "Presencial";
        }
      },
      getTipo() {
        switch (this.tipo) {
          case "1":
            return "CLT";
          case "2":
            return "PJ";
        }
      },
    },
  },
};
</script>

<style>
</style>