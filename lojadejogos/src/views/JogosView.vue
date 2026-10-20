<template>
  <div>
    <h2>Lista de Jogos</h2>
    <ul>
      <li v-for="(jogo, index) in jogos" :key="index">
        {{ jogo }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'JogosView',
  data() {
    return {
      jogos: [
        'Roblox',
        'Minecraft',
        'FIFA 17',
        'Mario Kart'
      ]
    }
  }
}
</script>