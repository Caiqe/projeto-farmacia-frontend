import React from "react";

function Home() {
  return (
    <>
      <div className="flex flex-col justify-around">
        <h1 className="text-4xl font-bold mt-4 bg-red-700 text-white w-1/3  rounded-t-4xl p-2 m-auto">O remédio que vai até você!</h1>
        <p className="text-2xl bg-red-700 w-1/2 rounded-full px-1 text-white m-auto mb-4">Peça agora mesmo sem sair de casa</p>
        <div className=" flex flex-row">
          <div className="w-1/2 bg-yellow-200 rounded-l-full">
            <img
              src="https://ik.imagekit.io/ix39wusls/Onda%20Blog.png?updatedAt=1737998117707"
              alt="Corredor de uma fármacia"
            />
          </div>
          <div className="flex flex-col bg-white w-1/2 justify-center ">
            <div className="flex flex-col bg-red-100 rounded-r-full ">
              
              <img
                className="scale-75"
                src="https://ik.imagekit.io/ix39wusls/Onda%20Blog%20(1).png?updatedAt=1737998513489"
                alt="Imagem de um entregador"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
