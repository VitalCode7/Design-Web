<script setup lang="ts">

defineProps({
  titulo: {
    type: String,
    required: true
  },
  subtitulo: {
    type: String,
  },
  imagem: {
    type: String,
  }

})
</script>
<template>
  <div class="card">
    <img v-if="imagem" :src="imagem" alt=""/>
    <h3>{{ titulo }}</h3>
    <p v-if="subtitulo">{{ subtitulo }}</p>
  </div>
</template>

<style scoped>
  div.card {
    width: 300px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 1rem;
  }
  div img {
    width: 100%;
    height: 180px;
  }
  div.card div{
    padding: 12px 16px;
    color: #333333;
  }
  div.card h3 {
    margin: 0 0 4px 0;
    font-size: 1.1rem;
  }
  div.card p {
    margin: 0 0 8px 0;
    font-size: 0.9rem;
    color: #444444;
  }
</style>
