<template>
  <div>
    <h2>Promoções da Semana 🏷️</h2>
    <p>Aproveite nossos descontos especiais!</p>

    <ul>
      <li v-for="promo in promocoes" :key="promo.id">
        <strong>{{ promo.jogo }}</strong> - {{ promo.desconto }} de desconto!
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const promocoes = ref([
  { id: 1, jogo: 'FIFA 23', desconto: '30%' },
  { id: 2, jogo: 'GTA V', desconto: '50%' },
  { id: 3, jogo: 'Minecraft', desconto: '20%' }
])
</script>