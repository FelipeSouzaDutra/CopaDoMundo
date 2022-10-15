import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

 const campeos = () => {
  return (
    <div className='flex flex-col lg:grid lg:grid-cols-2 items-center justify-center mx-1 gap-4 p-3'>
    <div className="p-3 bg-lincoln-green max-w-xl rounded-2xl flex flex-col items-center justify-center m-auto">
      <div className="flex flex-col items-center p-4 bg-light-yellow rounded-2xl gap-y-4">
        <picture className=''>
          <img src="/img/campeao-brasil.jpg" alt="Time do Brasil na copa" />
        </picture>
      <div className='flex flex-col text-justify items-center justify-center'>
        <h2 className="">BRASIL 5 TÍTULOS</h2>
        <p>Ganhador das copas de 1958, 1962, 1970, 1994 e 2002</p>
      </div>
      </div>
  
    </div>
  
  
    <div className="p-3 bg-lincoln-green max-w-xl rounded-2xl flex flex-col items-center justify-center m-auto">
      <div className="flex flex-col items-center p-4 bg-light-yellow rounded-2xl gap-y-4">
        <picture className=''>
          <img src="/img/campeao-italia.jpg" alt="Time da Alemanha na copa" />
        </picture>
      <div className='flex flex-col text-justify items-center justify-center'>
        <h2 className="">ALEMANHA 4 TÍTULOS</h2>
        <p>Ganhador das copas de 1954, 1974, 1990 e 2014</p>
      </div>
      </div>
  
    </div>
  
    <div className="p-3 bg-lincoln-green max-w-xl rounded-2xl flex flex-col items-center justify-center m-auto">
      <div className="flex flex-col items-center p-4 bg-light-yellow rounded-2xl gap-y-4">
        <picture className=''>
          <img src="/img/campeao-alemanha.jpg" alt="Time da Itália na copa" />
        </picture>
      <div className='flex flex-col text-justify items-center justify-center'>
        <h2 className="">ITÁLIA 4 TÍTULOS</h2>
        <p>Ganhador das copas de 1934, 1938, 1982 e 2006</p>
      </div>
      </div>
  
    </div>
  
    <div className="p-3 bg-lincoln-green max-w-xl rounded-2xl flex flex-col items-center justify-center m-auto">
      <div className="flex flex-col items-center p-4 bg-light-yellow rounded-2xl gap-y-4">
        <picture className=''>
          <img src="/img/campeao-argentina.jpg" alt="Time da Argentina na copa" />
        </picture>
      <div className='flex flex-col text-justify items-center justify-center'>
        <h2 className="">ARGENTINA 2 TÍTULOS</h2>
        <p> Ganhador das copas de 1978 e 1986. </p>
      </div>
      </div>
  
    </div>
  
    <div className="p-3 bg-lincoln-green max-w-xl rounded-2xl flex flex-col items-center justify-center m-auto">
      <div className="flex flex-col items-center p-4 bg-light-yellow rounded-2xl gap-y-4">
        <picture className=''>
          <img src="/img/campeao-uruguai.jpg" alt="Time inteiro da seleção brasileira na copa do mundo de 2002" />
        </picture>
      <div className='flex flex-col text-justify items-center justify-center'>
        <h2 className="">URUGUAI 2 TÍTULOS</h2>
        <p> Ganhador das copas de 1930 e 1950.
        </p>
      </div>
      </div>
  
    </div>

    <div className="p-3 bg-lincoln-green max-w-xl rounded-2xl flex flex-col items-center justify-center m-auto">
      <div className="flex flex-col items-center p-4 bg-light-yellow rounded-2xl gap-y-4">
        <picture className=''>
          <img src="/img/campeao-franca.jpg" alt="Time inteiro da seleção brasileira na copa do mundo de 2002" />
        </picture>
      <div className='flex flex-col text-justify items-center justify-center'>
        <h2 className="">FRANÇA 2 TÍTULOS</h2>
        <p> Ganhador das copas de 1998 e 2018
        </p>
      </div>
      </div>
  
    </div>

    <div className="p-3 bg-lincoln-green max-w-xl rounded-2xl flex flex-col items-center justify-center m-auto">
      <div className="flex flex-col items-center p-4 bg-light-yellow rounded-2xl gap-y-4">
        <picture className=''>
          <img src="/img/campeao-inglaterra.jpg" alt="Time inteiro da seleção brasileira na copa do mundo de 2002" />
        </picture>
      <div className='flex flex-col text-justify items-center justify-center'>
        <h2 className="">INGLATERRA 1 TÍTULO</h2>
        <p> Ganhador da copa de 1966
        </p>
      </div>
      </div>
  
    </div>

    <div className="p-3 bg-lincoln-green max-w-xl rounded-2xl flex flex-col items-center justify-center m-auto">
      <div className="flex flex-col items-center p-4 bg-light-yellow rounded-2xl gap-y-4">
        <picture className=''>
          <img src="/img/campeao-espanha.jpg" alt="Time inteiro da seleção brasileira na copa do mundo de 2002" />
        </picture>
      <div className='flex flex-col text-justify items-center justify-center'>
        <h2 className="">ESPANHA 1 TÍTULO</h2>
        <p> Ganhador da copa de 2010
        </p>
      </div>
      </div>
  
    </div>
  
    </div>
  )
};

export default campeos;