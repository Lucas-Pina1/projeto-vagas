<template>
  <div>
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

  props: {
    conteudo: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>