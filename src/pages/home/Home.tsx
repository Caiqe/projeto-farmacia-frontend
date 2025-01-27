import React from "react";

function Home() {
  return (
    <>
      <div className=" flex flex-row">
        <div className="w-1/2">
          <img
            src="https://img.freepik.com/fotos-gratis/resumo-borrao-e-defocused-farmacia-e-farmacia_1203-9459.jpg?t=st=1737986737~exp=1737990337~hmac=d6133432ffea444ce26d8d86a9fcfd44779a8f8f94ce7d095db89cc3ad589d2a&w=996"
            alt="Corredor de uma fármacia"
          />
        </div>
        <div className="bg-white w-1/2">
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold mt-8 bg-red-900 text-white rounded-t-3xl">
              A Farmácia que vai até você
            </h2>
            <p className="bg-red-900 rounded-b-3xl  text-5xl text-white font-bold py-3
            ">Peça sem sair de casa!</p>
            <img className="h-96" src="https://img.freepik.com/vetores-gratis/na-ilustracao-do-conceito-de-caminho_114360-1191.jpg?t=st=1737987423~exp=1737991023~hmac=e8c8558cc5854d556547952db0d0a4f42c637c32c8a4e1149b8cc5aaaace6fb6&w=996" alt="Imagem de um entregador" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
