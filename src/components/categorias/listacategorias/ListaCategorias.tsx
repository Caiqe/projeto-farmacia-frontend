import { useNavigate } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { useEffect, useState } from 'react';
import { buscar } from '../../../services/Service';
import CardCategorias from '../cardcategorias/CardCategorias';




function ListaCategorias() {

    const navigate = useNavigate();

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias() {
        try{
            await buscar("/categorias", setCategorias);
        }catch(error:any){
            console.log("Erro: "+error.toString())
        }
    }

    useEffect(()=>{
        buscarCategorias();
    },[categorias.length]);
  return (
    <>
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col justify-center items-center">
                    <h1 className='text-5xl mb-8'>Categorias</h1>
                    <div className="grid grid-flow-row gap-4">
                       {categorias.map((categoria) => (
                        <div>
                            <ul className='w-90 bg-hotoffwhite gap-10'>
                                <li key={categoria.id} className='text-2xl border-2'>{categoria.descricao}</li>
                            </ul>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
  )
}

export default ListaCategorias