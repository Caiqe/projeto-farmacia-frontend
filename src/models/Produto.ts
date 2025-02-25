import Categoria from "./Categoria";

export interface Produto {
    id: number;
    nome: string;
    descricao: string;
    valor: number; 
    imagem?: string; 
    categoria: Categoria; 
    tipo_produto: String;
  
    // Relacionamentos com PedidoProduto e CarrinhoProduto, se necessário
    //pedidoProdutos?: PedidoProduto[];
    //carrinhoProdutos?: CarrinhoProduto[];
  }