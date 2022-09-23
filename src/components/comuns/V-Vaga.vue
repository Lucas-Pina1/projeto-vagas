<template>
  <div class="card">
    <div class="card-header bg-dark text-white">{{ titulo }}</div>
    <div class="card-body">
      <p>{{ descricao }}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"
        >Salário: R$ {{ salario }} | Modalidade: {{ getModalidade }} | Tipo:
        {{ getTipo }} | Publicação: {{ getPublicacao }}</small
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "V-Vaga",
  //props: ['tituloVagaTeste', 'descricaoVaga', 'salario', 'modalidade', 'tipo', 'publicacao'],
  props: {
    titulo: {
      type: String,
      required: true,
      validator(value) {
        if (value.length < 6) return false; //se estiver inválido
        return true; //se estiver válido
      },
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
  },
  computed: {
    getModalidade() {
      const tipoModalidade = {
        1: "Home Oficce",
        2: "Presencial",
      };
      return tipoModalidade[this.modalidade];

      // switch(this.modalidade) {
      //     case '1': return 'Home Office'
      //     case '2': return 'Presencial'
      // }
    },
    getTipo() {
      const tipoContratacao = {
        1: "CLT",
        2: "PJ",
      };
      return tipoContratacao[this.tipo];
    },
    getPublicacao() {
      let dataPublicacao = new Date(this.publicacao);
      return dataPublicacao.toLocaleDateString("pt-BR");
    },
  },
};
</script>