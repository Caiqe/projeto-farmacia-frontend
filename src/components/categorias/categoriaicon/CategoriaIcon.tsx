import { Sun } from "@phosphor-icons/react";
import React from "react";

interface CategoriaIconProps{
    icone: React.ReactNode;
    titulo:
    string;
}

function CategoriaIcon({icone, titulo} : CategoriaIconProps) {
  return (
    <>
      <div className="w-40 h-32 bg-hotoffwhite rounded-4xl flex flex-col items-center justify-center shadow-2xl hover:scale-110 hover:cursor-pointer">
        <div className="bg-white p-4 rounded-full shadow-sm">
          {icone}
        </div>
        <p className="mt-4 text-lg font-medium text-gray-700">
          {titulo}
        </p>
      </div>
    </>
  );
}

export default CategoriaIcon;
