import {
  Basket,
  List,
  MagnifyingGlass,
  UserCircle,
} from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";

function Navbar() {
  return (
    <>
      <div className=" mt-0 w-full grid grid-cols-12 bg-gray-800 py-4  mb-4">
        <div className="col-span-2 col-start-1">
          <Link
            to="/home"
            className="hover:underline  text-white font-bold text-4xl"
          >
            <h2>Farmárcia</h2>
          </Link>
        </div>
        <div className="hidden md:block col-start-5 col-span-4 bg-white rounded-4xl justify-between items-center px-6">
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
        <div className="flex flex-row gap-8 col-start-11 col-span-2">
          <Popup
            trigger={
              <div className="">
                {" "}
                <List
                  size={32}
                  color="#fffafa"
                  weight="bold"
                  className="hover:cursor-pointer hover:scale-110 rounded-full  "
                />
              </div>
            }
            on="hover"
            closeOnDocumentClick
            mouseLeaveDelay={100}
            mouseEnterDelay={0}
            contentStyle={{ padding: "0px", border: "none" }}
            arrow={false}
          >
            <div className="bg-gray-900 text-white hover:cursor-pointer p-6 rounded-3xl">
              <div className="hover:underline">
                {" "}
                <Link to="/categorias">Categorias</Link>
              </div>
              <div className="hover:underline"> item 2</div>
              <div className="hover:underline"> item 3</div>
            </div>
          </Popup>
          <Basket size={32} color="#fffafa" weight="bold" />
          <UserCircle size={32} color="#fffafa" weight="bold" />
        </div>

        <div className="flex flex-row gap-4 font-bold text-white text-3xl"></div>
      </div>
    </>
  );
}

export default Navbar;
