<template>
  <div class="card">
    <div class="card-header bg-dark text-white">{{ Titulo }}</div>
    <div class="card-body">
      <p>{{ descricao }}</p>
    </div>
    <div class="card-footer">
      <small class="text-mutted"
        >{{ salario }} | {{ modalidade }} | {{ tipo }} | {{ publicacao }}</small
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "v-vaga",
  // props: ["titulo", "descricao", "salario", "modalidade", "tipo", "publicacao"],
  props: {
    titulo: String,
    descricao: String,
    salario: [Number, String],
    modalidade: String,
    tipo: String,
    publicacao: String,
  },
};
</script>

<style>
</style>