<script setup lang="ts">
import {ref, onMounted } from 'vue';
import CardPadrao from '@/components/CardPadrao.vue';

  const estados = ref([]); //variável reativa

  //async - porque essa função faz uma conexão externa e o valor demora
  async function buscarEstados(){
    try{
    //await porque a conexão demora, logo é necessário esperar
    const resposta = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
    const dados = await resposta.json();
    estados.value = dados;
  }catch(erro){
    console.error('Erro com a conexão com a API')
  }
}
  onMounted(buscarEstados);

</script>
<template>
  <h2>Estados</h2>
  <section>
    <CardPadrao v-for="item in estados"
    :key="item.id"
    :titulo="item.nome"
    :subtitulo="item.sigla"
    />
  </section>
</template>
<style scoped>
  section{
    display: flex;
    flex-wrap: wrap;
  }
</style>
