import React from "react";
import { Link } from "react-router-dom";
import { Produto } from "../../../models/Produto";
import { Basket } from "@phosphor-icons/react";

interface CardProdutosProps {
  produto: Produto;
}

function CardProdutos({ produto }: CardProdutosProps) {
  return (
    <>
      <Link to={`/produtos/id/${produto.id}`}>
        <div className="group max-w-sm rounded-2xl overflow-hidden shadow-2xl p-4 bg-offwhite    hover:cursor-pointer ">
          <img
            className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 rounded-4xl"
            src={produto.imagem}
            alt="foto do produto"
          />
          <div className="py-4  rounded-4xl px-2 mt-2 ">
            <h2 className="text-xl font-bold text-gray-900">{produto.nome}</h2>
            <p className="text-lg text-green-600 font-semibold mt-1 ">
              R$ {produto.valor}
            </p>
            {produto.tipoProduto === "COSMÉTICO" ? (
              <p className="font-semibold">{produto.marca}</p>
            ) : (
              <></>
            )}

          </div>
          <div className=" flex flex-row justify-evenly pt-2 align-bottom my-3 py-2 px-4">
            <Link to={`/editarproduto/${produto.id}`}>
              <button className="bg-green-400 hover:bg-green-500 text-white px-6 py-2 rounded-2xl flex items-center gap-2">
                Comprar <Basket size={22} />
              </button>
            </Link>
          </div>
        </div>
      </Link>
    </>
  );
}

export default CardProdutos;
