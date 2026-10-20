<template>
  <div class="pagina">
    <h2>Notícias da Loja</h2>

    <!-- Formulário para adicionar nova notícia -->
    <form @submit.prevent="adicionarNoticia" class="form">
      <input v-model="novoTitulo" placeholder="Título da notícia" required />
      <input v-model="novoTexto" placeholder="Texto da notícia" required />
      <button type="submit">Cadastrar</button>
    </form>

    <!-- Lista de notícias -->
    <ul>
      <li v-for="item in noticias" :key="item.id">
        <span><strong>{{ item.titulo }}</strong> - {{ item.texto }}</span>
        <button @click="removerNoticia(item.id)" class="btn-excluir">Excluir</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const noticias = ref([])
const novoTitulo = ref('')
const novoTexto = ref('')

// 1. Carrega os dados salvos quando a página abre
onMounted(() => {
  const dadosSalvos = localStorage.getItem('minhas_noticias')
  if (dadosSalvos) {
    noticias.value = JSON.parse(dadosSalvos)
  } else {
    // Dados padrão caso o localStorage esteja vazio
    noticias.value = [
      { id: 1, titulo: 'Lançamento', texto: 'Novo jogo disponível na loja!' },
      { id: 2, titulo: 'Manutenção', texto: 'Servidores em manutenção hoje.' }
    ]
    salvarNoLocalStorage()
  }
})

// 2. Salva a lista atual no localStorage
function salvarNoLocalStorage() {
  localStorage.setItem('minhas_noticias', JSON.stringify(noticias.value))
}

// 3. Adiciona um novo item na lista e salva
function adicionarNoticia() {
  noticias.value.push({
    id: Date.now(),
    titulo: novoTitulo.value,
    texto: novoTexto.value
  })
  salvarNoLocalStorage()
  novoTitulo.value = ''
  novoTexto.value = ''
}

// 4. Remove um item da lista e salva
function removerNoticia(id) {
  noticias.value = noticias.value.filter(item => item.id !== id)
  salvarNoLocalStorage()
}
</script>

<style scoped>
.pagina {
  max-width: 600px;
  margin: 0 auto;
}

.form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input {
  padding: 8px;
  flex: 1;
}

button {
  padding: 8px 12px;
  background-color: #2c3e50;
  color: white;
  border: none;
  cursor: pointer;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  margin-bottom: 8px;
  border: 1px solid #ddd;
}

.btn-excluir {
  background-color: #e74c3c;
}
</style>