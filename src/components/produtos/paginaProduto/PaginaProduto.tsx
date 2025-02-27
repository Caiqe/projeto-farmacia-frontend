import React, { useEffect, useState } from "react";
import { Produto } from "../../../models/Produto";
import { useParams } from "react-router-dom";
import { buscar } from "../../../services/Service";
import Categoria from "../../../models/Categoria";
import ProdutosPorCategoria from "../produtosPorCategoria/ProdutosPorCategoria";
import ListaProdutos from "../listaprodutos/ListaProdutos";
import { Basket } from "@phosphor-icons/react";

function PaginaProduto() {
  const [produto, setProduto] = useState<Produto>();
  const { produtoId } = useParams<{ produtoId: string }>();
  const [categoria, setCategoria] = useState<Categoria>();

  async function buscarProdutoPorId(Id: string) {
    try {
      await buscar(`produtos/id/${Id}`, setProduto);
    } catch (error: any) {
      console.log(error.toString());
    }
  }

  async function buscarCategoriaPorId(Id: string) {
    try {
      await buscar(`categoria/${Id}`, setCategoria);
    } catch (error: any) {
      console.log(error.toString());
    }
  }

  useEffect(() => {
    if (produto?.categoria?.id) {
      buscarCategoriaPorId(produto.categoria.id.toString());
    }
  }, [produto]);

  useEffect(() => {
    if (produtoId !== undefined) {
      buscarProdutoPorId(produtoId);
    }
  }, [produtoId]);
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center my-8 bg-offwhite p-4 rounded-2xl gap-4">
        {/* Imagem do Produto */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end p-4">
          <img
            src={produto?.imagem}
            alt="Imagem do produto"
            className="rounded-2xl w-full max-w-xs md:max-w-md shadow-2xl"
          />
        </div>

        {/* Informações do Produto */}
        <div className="w-full md:w-1/3 border border-gray-400 rounded-2xl p-6 flex flex-col items-center text-center">
          <p className="text-3xl font-bold">{produto?.nome}</p>
          <p className="text-lg text-gray-600">
            Categoria: {produto?.categoria?.descricao}
          </p>
          <hr className="w-3/4 my-2" />
          <p className="w-full md:w-80 text-gray-700">{produto?.descricao}</p>
          <hr className="w-3/4 my-2" />

          {/* Preço e Botão de Comprar */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full mt-4 gap-4">
            <p className="text-4xl font-bold text-green-600">
              R${produto?.valor}
            </p>
            <button className="bg-green-400 hover:bg-green-500 text-white px-6 py-2 rounded-2xl flex items-center gap-2">
              Comprar <Basket size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Produtos Semelhantes */}
      <div className="flex flex-col justify-center items-center">

        <h2 className="text-4xl underline text-center md:text-left">
          Produtos Semelhantes
        </h2>
      <div className="grid grid-cols-1  mt-8 justify-center items-center">
        <ListaProdutos categoriaId={produto?.categoria?.id || undefined} />
      </div>
      </div>
    </>
  );
}

export default PaginaProduto;
