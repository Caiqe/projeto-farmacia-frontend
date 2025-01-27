import React from 'react'

function Footer() {
  return (
    <>
        <div className='w-full flex flex-col justify-around bg-red-900 '>
            <div><h1 className='text-white font-bold text-3xl'>Farmácia</h1></div>
            <div className='flex flex-col gap-4 font-bold text-white text-2xl'>
                <h2>Visite nossas redes sociais:</h2>
                <div className='flex flex-row gap-3 justify-center'>
                <p>Instagram</p>
                <p>Facebook</p>
                </div>
                
                
            
        </div>
        </div>    
    </>
  )
}

export default Footer