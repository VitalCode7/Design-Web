import type { StringDecoder } from "string_decoder"

export interface projeto{
  id: number
  nome: string
  descricao: string
  status: 'Em andamento' | 'concluído'
}
// para cada gerenciamento de estado, é importante fazer uma interface
