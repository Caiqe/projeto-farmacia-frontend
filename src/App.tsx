import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListaCategorias from "./components/categorias/listacategorias/ListaCategorias";
import FormCategoria from "./components/categorias/formcategoria/FormCategoria";
import DeletarCategoria from "./components/categorias/deletarcategoria/DeletarCategoria";
import ListaProdutos from "./components/produtos/listaprodutos/ListaProdutos";
import ProdutosPorCategoria from "./components/produtos/produtosPorCategoria/ProdutosPorCategoria";
import PaginaProduto from "./components/produtos/paginaProduto/PaginaProduto";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categorias" element={<ListaCategorias />} />
          <Route path="/cadastrarcategoria" element={<FormCategoria />} />
          <Route path="/editarcategoria/:id" element={<FormCategoria />} />
          <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          <Route path="/produtos" element={<ListaProdutos/>} />
          <Route path="/produtos/categoria/:categoriaId" element={<ProdutosPorCategoria />} />
          <Route path="produtos/id/:produtoId" element={<PaginaProduto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
