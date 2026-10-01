const { createApp, ref, watch } = Vue

const lancheifrn = createApp({
    setup() {
        const dadosSalvos = JSON.parse(localStorage.getItem('lancheifrn') || '{"lanches":[],"frutas":[]}')

        const lanches = ref(
            dadosSalvos.lanches && dadosSalvos.lanches.length
                ? dadosSalvos.lanches
                : [
                    {
                        descricao: 'Bolo',
                        ativo: true,
                        imagem: 'bolo.jpg'
                    },
                    {
                        descricao: 'Bolacha',
                        ativo: false,
                        imagem: 'bolacha.jpg'
                    },
                    {
                        descricao: 'Tapioca',
                        ativo: false,
                        imagem: 'tapioca.jpg'
                    }
                ]
        )

        const frutas = ref(
            dadosSalvos.frutas && dadosSalvos.frutas.length
                ? dadosSalvos.frutas
                : [
                    { descricao: 'Banana', ativo: false, imagem: 'banana.jpg' },
                    { descricao: 'Maçã', ativo: false, imagem: 'maca.jpg' },
                    { descricao: 'Laranja', ativo: false, imagem: 'laranja.jpg' }
                ]
        )

        watch(
            [lanches, frutas],
            () => {
                localStorage.setItem(
                    'lancheifrn',
                    JSON.stringify({
                        lanches: lanches.value,
                        frutas: frutas.value
                    })
                )
            },
            { deep: true, immediate: true }
        )

        function mudarAtivo(item) {
            lanches.value.forEach(lanche => {
                lanche.ativo = false
            })
            item.ativo = !item.ativo
        }

        function adicionarItem(lista, descricao, imagem = 'bolo.jpg') {
            const item = descricao.trim()

            if (!item) return

            lista.value.push({
                descricao: item,
                ativo: false,
                imagem
            })
        }

        const novoLancheInput = ref('')
        const novaFrutaInput = ref('')

        function novoLanche() {
            adicionarItem(lanches, novoLancheInput.value, 'bolo.jpg')
            novoLancheInput.value = ''
        }

        function novaFruta() {
            adicionarItem(frutas, novaFrutaInput.value, 'fruta.jpg')
            novaFrutaInput.value = ''
        }

        function excluirUltimoLanche() {
            lanches.value.pop()
        }

        function excluirLanche(index) {
            if (index >= 0 && index < lanches.value.length) {
                lanches.value.splice(index, 1)
            }
        }

        function excluirFruta(index) {
            if (index >= 0 && index < frutas.value.length) {
                frutas.value.splice(index, 1)
            }
        }

        function editarLanche(index) {
            const novoNome = prompt('Digite o novo nome do lanche:')

            if (novoNome && novoNome.trim() && index >= 0 && index < lanches.value.length) {
                lanches.value[index].descricao = novoNome.trim()
            }
        }

        function editarFruta(index) {
            const novoNome = prompt('Digite o novo nome da fruta:')

            if (novoNome && novoNome.trim() && index >= 0 && index < frutas.value.length) {
                frutas.value[index].descricao = novoNome.trim()
            }
        }

        return {
            mensagem: ref('Olá, Mundo!!'),
            lanches,
            frutas,
            mudarAtivo,
            novoLancheInput,
            novaFrutaInput,
            novoLanche,
            novaFruta,
            excluirUltimoLanche,
            excluirLanche,
            excluirFruta,
            editarLanche,
            editarFruta
        }
    }
})

lancheifrn.component('app-header', AppHeader)
lancheifrn.component('app-footer', AppFooter)
lancheifrn.mount('#app')

