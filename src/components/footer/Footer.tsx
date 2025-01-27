import React from 'react'
import {
  FacebookLogo,
  GithubLogo,
  Info,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";


let data = new Date().getFullYear()
function Footer() {
  return (
    <>
        <div className='w-full flex flex-col justify-around bg-red-700 align-bottom mt-4'>
          <div><p className='text-xl font-bold text-white'>
                            Farmácia - Caique | Copyright: {data}
                        </p></div>
            
            <div className='flex flex-col gap-4 font-bold text-white text-2xl'>
                <h2>Visite nossas redes sociais:</h2>
                <div className='flex flex-row gap-3 justify-center'>
                <a href="https://www.facebook.com/" target='_blank'><FacebookLogo size={52} weight="thin" /></a>
                <a href="https://www.instagram.com/" target='_blank'><InstagramLogo size={52} weight="thin" /></a>
                </div>
                
                
            
        </div>
        </div>    
    </>
  )
}

export default Footer