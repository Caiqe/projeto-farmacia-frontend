import React, { useEffect, useState, useRef } from "react";
import { Produto } from "../../../models/Produto";
import { buscar } from "../../../services/Service";
import { ArrowRight, MagnifyingGlass } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function BarraDePesquisa() {
  const [busca, setBusca] = useState(""); // Guarda o que foi digitado
  const [produtos, setProdutos] = useState<Produto[]>([]); // Todos os produtos
  const [resultados, setResultados] = useState<Produto[]>([]); // Produtos filtrados
  const [mostrarSugestoes, setMostrarSugestoes] = useState(false); // Controla a exibição da lista

  const barraRef = useRef<HTMLDivElement>(null); // Referência para detectar clique fora

  // Buscar todos os produtos ao carregar a página
  useEffect(() => {
    async function buscarProdutos() {
      try {
        await buscar("/produtos", setProdutos);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }
    buscarProdutos();
  }, []);

  // Filtrar produtos ao digitar
  useEffect(() => {
    if (busca.trim() === "") {
      setResultados([]);
      setMostrarSugestoes(false);
    } else {
      const filtrados = produtos.filter((produto) =>
        produto.nome.toLowerCase().includes(busca.toLowerCase())
      );
      setResultados(filtrados);
      setMostrarSugestoes(filtrados.length > 0);
    }
  }, [busca, produtos]);

  // Fechar a lista ao clicar fora da barra de pesquisa
  useEffect(() => {
    function handleClickFora(event: MouseEvent) {
      if (
        barraRef.current &&
        !barraRef.current.contains(event.target as Node)
      ) {
        setMostrarSugestoes(false);
      }
    }
    document.addEventListener("mousedown", handleClickFora);
    return () => {
      document.removeEventListener("mousedown", handleClickFora);
    };
  }, []);

  return (
    <div
      ref={barraRef}
      className="relative hidden md:flex col-start-3 col-span-5"
    >
      {/* Campo de pesquisa */}
      <div className="flex w-full items-center bg-white border border-gray-300 rounded-4xl px-3">
        <input
          type="text"
          placeholder="O que você precisa?"
          className="w-full p-3 text-black outline-none bg-transparent"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          onFocus={() => setMostrarSugestoes(resultados.length > 0)} // Mostra a lista ao clicar
        />
        <MagnifyingGlass
          size={30}
          color="#121212"
          weight="bold"
          className="p-2 hover:cursor-pointer"
        />
      </div>

      {mostrarSugestoes && (
        <div>
          <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-4xl mt-1 shadow-lg z-10">
            {resultados.map((produto) => (
              <li
                key={produto.id}
                className="p-2 hover:bg-gray-200 rounded-4xl"
              >
                <Link
                  to={`/produtos/id/${produto.id}`}
                  onClick={() => setMostrarSugestoes(false)}
                >
                  <div className="flex flex-row justify-between items-center mx-10">
                    <p>{produto.nome}</p>
                    <p>R${produto.valor}</p>
                  </div>
                </Link>
              </li>
            ))}
            <div className="flex flex-row justify-end mr-6 items-center gap-1  p-2 rounded-3xl">
              <Link to="/produtos">
                <p className="hover:underline hover:cursor-pointer">
                  Todos os Produtos{" "}
                </p>
              </Link>
              <ArrowRight size={16} />
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default BarraDePesquisa;
