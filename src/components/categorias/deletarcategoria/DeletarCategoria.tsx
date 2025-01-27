import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Service";





function DeletarCategoria() {

const navigate = useNavigate();

const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

const {id} = useParams<{id:string}>()

async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      if (error.toString().includes("500")) {
        alert("Erro no servidor");
      }
    }
  }

useEffect(() => {
    if (id !== undefined) {
        buscarPorId(id)
    }
}, [id])

async function deletarCategoria() {
   

    try {
        await deletar(`/categorias/${id}`)

        alert('Categoria apagado com sucesso')

    } catch (error: any) {
        if (error.toString().includes('403')) {
            
        }else {
            alert('Erro ao deletar o Categoria.')
        }
    }

    
    retornar()
}

function retornar() {
    navigate("/categorias")
}

    return (
        <div className='container w-1/3 mx-auto mb-4'>
            <h1 className='text-4xl text-center my-4'>Deletar Categoria</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a Categroia a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-red-900 text-white font-bold text-2xl'>
                    Tema
                </header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.nome}</p>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2 hover:cursor-pointer' onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-blue-600 
                                   hover:bg-indigo-600 flex items-center justify-center hover:cursor-pointer' onClick={deletarCategoria}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarCategoria