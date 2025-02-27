import React from "react";
import CategoriaIcon from "../../components/categorias/categoriaicon/CategoriaIcon";
import {
  BabyCarriage,
  FlowerLotus,
  HandSoap,
  Heartbeat,
  Medal,
  Package,
  Percent,
  SealPercent,
  Shower,
  Sun,
  Timer,
} from "@phosphor-icons/react";
import AliceCarousel from "react-alice-carousel";

const handleDragStart = (e: React.DragEvent) => {
  e.preventDefault();
};

const items = [
  <img
    src="https://ik.imagekit.io/ix39wusls/farmacia/desconto?updatedAt=1740676909033"
    onDragStart={handleDragStart}
    role="presentation"
    className="w-full h-90 object-cover rounded-lg "
  />,
  <img
    src="https://ik.imagekit.io/ix39wusls/farmacia/medicamentos?updatedAt=1740676909652"
    onDragStart={handleDragStart}
    role="presentation"
    className="w-full h-90 object-cover rounded-lg"
  />,
  <img
    src="https://ik.imagekit.io/ix39wusls/farmacia/cosmeticos?updatedAt=1740676910069"
    onDragStart={handleDragStart}
    role="presentation"
    className="w-full h-90 object-cover rounded-lg"
  />,
  
];

const Gallery = () => (
  <AliceCarousel
    mouseTracking
    items={items}
    autoPlay
    infinite
    autoPlayInterval={3000}
    animationDuration={1000}
    disableButtonsControls
  />
);

function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-center gap-10">
        <CategoriaIcon
          icone={<SealPercent size={32} weight="bold" />}
          titulo="Ofertas"
        />
        <CategoriaIcon icone={<Sun size={32} weight="bold" />} titulo="Verão" />
        <CategoriaIcon
          icone={<HandSoap size={32} weight="bold" />}
          titulo="Beleza"
        />
        <CategoriaIcon
          icone={<Shower size={32} weight="bold" />}
          titulo="Higiene"
        />
        <CategoriaIcon
          icone={<FlowerLotus size={32} weight="bold" />}
          titulo="Naturais"
        />
        <CategoriaIcon
          icone={<BabyCarriage size={32} weight="bold" />}
          titulo="Maternidade"
        />
      </div>

      <div className="my-8">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Produtos em Destaque
        </h2>
        <Gallery />
      </div>
      <h2 className="font-bold text-2xl mb-4">O que oferecemos?</h2>
      <div className="flex flex-wrap rounded-4xl  items-center justify-around gap-8 ">
        <div className="flex flex-row">
          <div className="w-80 h-32 bg-hotoffwhite rounded-4xl flex flex-col items-center justify-center shadow-2xl ">
            <div className="bg-white p-4 rounded-full shadow-sm">
              <Timer size={32} weight="bold" />
            </div>
            <p className="mt-4 text-lg font-medium text-gray-700">
              Entrega Rápida
            </p>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="w-80 h-32 bg-hotoffwhite rounded-4xl flex flex-col items-center justify-center shadow-2xl ">
            <div className="bg-white p-4 rounded-full shadow-sm">
              <Heartbeat size={32} weight="bold" />
            </div>
            <p className="mt-4 text-lg font-medium text-gray-700">
              Tudo que precisa para se cuidar
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-80 h-32 bg-hotoffwhite rounded-4xl flex flex-col items-center justify-center shadow-2xl ">
            <div className="bg-white p-4 rounded-full shadow-sm">
              <Medal size={32} weight="bold" />
            </div>
            <p className="mt-4 text-lg font-medium text-gray-700">
              Atendimento de Qualidade
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
