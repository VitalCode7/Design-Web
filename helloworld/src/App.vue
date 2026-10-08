<template>
  <HeaderSection/>
  <p>Este é o arquivo app.vue</p>

  <HeaderFooter/>
  <p>footer</p>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue'
import HeaderFooter from './components/HeaderFooter.vue';

export default {
  name: 'App',
  components: {
    HeaderSection, HeaderFooter
  }
}
</script>

<style>
#app {
  background-color: #f2f2f2;
}
</style>
