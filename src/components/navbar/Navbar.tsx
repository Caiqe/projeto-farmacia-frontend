import React from 'react'

function Navbar() {
  return (
    <>
        <div className='w-full flex flex-row justify-around bg-red-900 '>
            <div><h1 className='text-white font-bold text-6xl'>Farmácia</h1></div>
            <div className='flex flex-row gap-4 font-bold text-white text-3xl'>
            <p>Produtos</p>
            <p>Categorias</p>
            <p>usuário</p>
        </div>
        </div>
        
    </>
  )
}

export default Navbar