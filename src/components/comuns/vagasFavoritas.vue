<template>
  <div>
    <div class="button-offcanvas">
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Vagas Favoritas
      </button>
    </div>

    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">Offcanvas right</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">...</div>
    </div>
  </div>
</template>

<script>
import emitter from "@/services/emitter";

export default {
  name: "VagasFavoritas",

  mounted() {
    emitter.on("eventoGlobal1", (p) => {
      console.log('Componente VagasFavoritas: ', p);
    })
  }
};
</script>

<style scoped>
.button-offcanvas {
  position: absolute;
  z-index: 1;
  top: 70px;
  right: 0px;
}
</style>