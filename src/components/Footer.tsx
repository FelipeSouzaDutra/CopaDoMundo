import React from 'react'

const Footer = () => {
  return (
   <footer className=" bg-slate-700 shadow-md">
     <div className=' flex items-center justify-center'>
        <span className='text-sm font-bold text-white p-4 '>
            Desenvolvido por <a className="hover:text-black hover:underline  focus:bg-black focus:underline transition-all" href="https://www.instagram.com/joao.botrel/" target="_blank"> João Botrel </a> e 
            <a className=" hover:text-black hover:underline  focus:bg-black focus:underline transition-all" href="https://www.instagram.com/dutra3678/" target="_blank">Felipe Dutra</a> 2022
        </span>
     </div>
   </footer>
  )
};

export default Footer;