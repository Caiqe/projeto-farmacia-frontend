import {
  Basket,
  Divide,
  List,
  MagnifyingGlass,
  UserCircle,
} from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import { buscar } from "../../services/Service";
import Categoria from "../../models/Categoria";

function ListaCategorias() {
  const navigate = useNavigate();

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias);
    } catch (error: any) {
      console.log("Erro: " + error.toString());
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);
}

function Navbar() {
  return (
    <>
      <div className=" mt-0 w-full grid grid-cols-12 bg-gray-800 py-4  mb-4 ">
        <div className="col-span-2 col-start-1">
          <Link
            to="/home"
            className="hover:underline  text-white font-bold text-4xl"
          >
            <h2>Farmárcia</h2>
          </Link>
        </div>
        <div className="hidden md:block col-start-3 col-span-5 bg-white rounded-4xl justify-between items-center px-6">
          <div className=" grid grid-cols-10 items-center">
            <form action="" className="col-span-8 col-start-1 p-3  text-black">
              <input
                type="text"
                placeholder="O que você precisa?"
                className="border-0"
              />
            </form>
            <MagnifyingGlass
              size={30}
              color="#121212"
              weight="bold"
              className="col-start-10 border-l-2 pl-2 hover:cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-row gap-8 col-start-9 col-span-6">
          <Popup
            trigger={
              <div className="flex flex-row text-white text- justify-center items-center gap-2">
                {" "}
                <List
                  size={32}
                  color="#fffafa"
                  
                  className="hover:cursor-pointer hover:scale-110 rounded-full  "
                />{" "}
                <h2 className="hidden md:block">Categorias</h2>
              </div>
            }
            on="hover"
            closeOnDocumentClick
            mouseLeaveDelay={100}
            mouseEnterDelay={0}
            contentStyle={{ padding: "0px", border: "none" }}
            arrow={false}
          >
            <div className="bg-gray-900 text-white hover:cursor-pointer p-10  rounded-3xl">
              <div>
                <Link to="/categorias">
                  <h2 className="text-3xl underline mb-2 ">Categorias</h2>
                </Link>
                <ul className="gap-2 list-disc p-2 ">
                  <li className="hover:underline">Verão</li>
                  <li className="hover:underline">Beleza</li>
                  <li className="hover:underline">Higiene</li>
                  <li className="hover:underline">Naturais</li>
                  <li className="hover:underline">Maternidade</li>
                </ul>
              </div>

              <div className="block md:hidden">
                <h2 className="text-3xl underline mb-2">Carrinho</h2>
                <ul className="gap-2 list-disc p-2 ">
                  <li className="hover:underline">Ver Produtos</li>
                </ul>
                <h2 className="text-3xl underline mb-2">Bem-Vindo!</h2>
                <ul className="gap-2 list-disc p-2 ">
                  <li className="hover:underline">Pedidos</li>
                  <li className="hover:underline">Entrar</li>
                  <li className="hover:underline">Cadastrar</li>
                </ul>
              </div>
            </div>
          </Popup>
          <Popup
            trigger={
              <div className="hidden md:block">
                <div className="flex flex-row text-white justify-center items-center gap-2  ">
                  {" "}
                  <Basket size={32} color="#fffafa"  />
                  <div className="flex flex-col  ">
                    <h2>Cesta</h2>
                    <h2>R$00,00</h2>
                  </div>
                </div>
              </div>
            }
            on="hover"
            closeOnDocumentClick
            mouseLeaveDelay={50}
            mouseEnterDelay={0}
            contentStyle={{ padding: "0px", border: "none" }}
            arrow={false}
          >
            <div className="bg-gray-900 text-white hover:cursor-pointer p-10  rounded-3xl">
              <div>
                <h2 className="text-3xl underline mb-2">Carrinho</h2>
                <ul className="gap-2 list-disc p-2 ">
                  <li className="hover:underline">Ver Produtos</li>
                </ul>
              </div>
            </div>
          </Popup>
          <Popup
            trigger={
              <div className="hidden md:block">
                <div className="flex flex-row text-white justify-center items-center gap-2 ">
                  
                  <UserCircle size={32} color="#fffafa" />
                  <h2 className="">Entrar ou Cadastrar</h2>
                </div>
              </div>
            }
            on="hover"
            closeOnDocumentClick
            mouseLeaveDelay={50}
            mouseEnterDelay={0}
            contentStyle={{ padding: "0px", border: "none" }}
            arrow={false}
          >
            <div className="bg-gray-900 text-white hover:cursor-pointer p-10  rounded-3xl">
              <div className="items-center justify-center">
                <h2 className="text-3xl underline mb-2">Bem-Vindo!</h2>
                <ul className="gap-2 list-disc p-2 ">
                  <li className="hover:underline">Pedidos</li>
                  <li className="hover:underline">Entrar</li>
                  <li className="hover:underline">Cadastrar</li>
                </ul>
              </div>
            </div>
          </Popup>
        </div>
      </div>
    </>
  );
}

export default Navbar;
