<template>
  <p>Arquivo app.vue</p>

  <routerView/>
  <nav>
    <router-link to="/organizacao">Organização</router-link>
    <router-link to="/contato">Contato</router-link>
  </nav>
  
  <section class="dicas">
    <CartaoDica dica="tomar água" />
    <CartaoDica dica="correr rápido" />
    <CartaoDica dica="não parar no meio da corrida" />
    <CartaoDica dica="ir até o fim" />
    <CartaoDica dica="não desistir" />
  </section>

</template>

<script>
import CartaoDica from './components/CartaoDica.vue';


export default {
  name: 'App',
  components: {
    CartaoDica
  }
}
</script>

<style>
.dicas{
  display: flex;
  flex-wrap: wrap;
}
</style>
