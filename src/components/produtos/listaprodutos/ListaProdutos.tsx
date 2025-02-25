import React, { useEffect, useState } from "react";
import { Produto } from "../../../models/Produto";
import { buscar } from "../../../services/Service";
import CardProdutos from "../cardprodutos/CardProdutos";
import Categoria from "../../../models/Categoria";

interface ListaProdutosProps {
  categoriaId?: number; // Parâmetro opcional para filtrar produtos
}

function ListaProdutos({ categoriaId }: ListaProdutosProps) {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  async function buscarProdutos() {
    try {
      const url = categoriaId
        ? `/produtos/categoria/${categoriaId}`
        : "/produtos";
      await buscar(url, setProdutos);
    } catch (error: any) {
      console.log(error.toString());
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, [categoriaId]); // Recarrega sempre que a categoria mudar

  const [categoria, setCategoria] = useState<Categoria>();
  async function getCategoria() {
    try {
      await buscar(`/categorias/${categoriaId}`, setCategoria);
    } catch (error: any) {
      console.log(error.toString());
    }
  }
  useEffect(() => {
    getCategoria();
  }, [categoriaId]);

  return (
    <div className="flex flex-col justify-around items-center bg-cream">
      <div className="flex flex-col">
        <h1 className="text-5xl px-8 py-16 text-green-400 font-bold">
          {categoriaId ? categoria?.descricao : "Todos os Produtos"}
        </h1>
      </div>

      <div className="w-5xl mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {produtos.length > 0 ? (
          produtos.map((produto) => (
            <CardProdutos key={produto.id} produto={produto} />
          ))
        ) : (
          <p className="text-xl text-gray-500 ">Nenhum produto encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default ListaProdutos;
