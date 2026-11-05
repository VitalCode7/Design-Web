<script setup lang="ts">
import SectionHeader from './components/SectionHeader.vue';

</script>

<template>
  <SectionHeader />
  <main>
    <!-- a marcação de router view ficará aqui porque o conteúdo dos
    arquvios "view's" ficarão exatamente nesse espaço dentro do "main"-->
    <RouterView />
  </main>
</template>


