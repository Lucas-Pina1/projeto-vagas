<template>
  <div class="card">
    <div class="card-header bg-dark text-white">
      <div class="row">
        <div class="col d-flex justify-content-between-">
          {{ titulo }}
        </div>
      </div>
      <div>
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox">
          <label class="form-check-label">Favoritar</label>
          <button class="btn btn-danger" @click="dispararEventoComitt">teste</button>
        </div>
      </div>

    </div>
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
import emitter from "@/services/emitter";

export default {
  name: "V-Vaga",
  //props: ['tituloVagaTeste', 'descricaoVaga', 'salario', 'modalidade', 'tipo', 'publicacao'],
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
  },
  computed: {
    getModalidade() {
      const tipoModalidade = {
        1: "Home Oficce",
        2: "Presencial",
      };
      return tipoModalidade[this.modalidade];
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
  methods: {
    dispararEventoComitt() {
      emitter.emit('eventoGlobal1', 'Teste captura evento parametro')
    }
  }
};
</script>