import React from "react";
import {
  FacebookLogo,
  GithubLogo,
  Info,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

let data = new Date().getFullYear();
function Footer() {
  return (
    <>
      <div className="w-full flex flex-col justify-around bg-gray-800 align-bottom mt-4 gap-4 py-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
          <div className="flex flex-wrap items-center justify-around">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold">Institucional</h2>
              <hr />
              <ul className="text-start list-disc ml-4">
                <li className="hover:underline">Nossa História</li>
                <li className="hover:underline">Investidores</li>
                <li className="hover:underline">Trabalhe Conosco</li>
                
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold">Atendimento</h2>
              <hr />
              <ul className="text-start list-disc ml-4">
                <li className="hover:underline">Prazo de Entrega</li>
                <li className="hover:underline">Dúvidas</li>
                <li className="hover:underline">Central de Atendimento</li>
                
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-white font-bold">Formas de Pagamento: </h2>
            <img className="w-80" src="https://www.portalmeibrasil.com.br/wp-content/uploads/2023/09/formas-pagamento.png" alt="" />
          </div>
        </div>
        <div>
          <p className="text-xl font-mono text-white mx-2">
            Farmácia - 🧑🏻‍💻 Desenvolvido por Caique Gomes | Copyright: {data}
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
