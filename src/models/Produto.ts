import Categoria from "./Categoria";

export interface Produto {
    id: number;
    nome: string;
    descricao: string;
    valor: number; 
    imagem?: string; 
    categoria: Categoria; 
    tipoProduto: string;
    bula?: string;
    marca?: string;
  
    // Relacionamentos com PedidoProduto e CarrinhoProduto, se necessário
    //pedidoProdutos?: PedidoProduto[];
    //carrinhoProdutos?: CarrinhoProduto[];
  }