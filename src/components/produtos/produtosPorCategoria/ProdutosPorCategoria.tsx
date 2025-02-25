import { useParams } from "react-router-dom";
import ListaProdutos from "../listaprodutos/ListaProdutos";


function ProdutosPorCategoria() {
  const { categoriaId } = useParams<{ categoriaId: string }>();

  return <ListaProdutos categoriaId={Number(categoriaId)} />;
}

export default ProdutosPorCategoria;
