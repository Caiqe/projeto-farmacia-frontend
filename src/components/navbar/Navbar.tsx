import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full flex flex-row justify-around bg-red-700 py-1">
        <div>
          <Link
            to="/home"
            className="hover:underline text-white font-bold text-6xl"
          >
            Farmácia
          </Link>
        </div>
        <div className="flex flex-row gap-4 font-bold text-white text-3xl">
          <p>Produtos</p>
          <Link to="/categorias" className="hover:underline">
            Categorias
          </Link>
          <Link to="/cadastrarcategoria" className="hover:underline">
            Cadastrar Categoria
          </Link>
          <p>usuário</p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
