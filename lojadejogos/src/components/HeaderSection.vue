<template>
  <header>
    <h1><router-link to="/">Loja de jogos</router-link></h1>
    <nav>
      <ol>
        <li><router-link to="/">Início</router-link></li>
        <li><router-link to="/jogos">Jogos</router-link></li>
        <li><router-link to="/contato">Contato</router-link></li>
      </ol>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderSection'
}
</script>