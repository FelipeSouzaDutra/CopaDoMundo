import Link from "next/link";

import React from "react";

const Header = () => {
  return (
    <header className="flex items-center h-20 bg-independence justify-center rounded-b-b shadow-xl">
      <div className="flex items-center lg:justify-between justify-center w-full max-w-6xl">
        <picture className="h-10 lg:w-32">
          <img
            className=""
            src="/img/fifa-world-cup-logo.png"
            alt="taça da copa do mundo"
          />
        </picture>
        
       
        
            <ul className="flex items-center gap-8">
              <li>
                  <a href="/" className="font-medium text-light-steel-blue hover:scale-105 hover:text-platinum no-underline focus:underline focus:border-none transition-all">
          
                    Historia
                  </a>
              </li>
              <li>
                <Link href="/brasil">
                <a href="/brasil" className="font-medium text-light-steel-blue  hover:scale-105 hover:text-platinum  no-underline focus:underline focus:border-none transition-all">
          
                    Brasil
                  </a>
                </Link>
              </li>
              <li>
              <a href="/campeos" className="font-medium text-light-steel-blue  hover:scale-105 hover:text-platinum no-underline focus:underline focus:border-none transition-all">
                    Campeões
                  </a>
              </li>
              <li>
              <a href="/bolao" className="font-medium text-light-steel-blue  hover:scale-105 hover:text-platinum no-underline focus:underline focus:border-none transition-all">
                    Bolão
                  </a>
              </li>
            </ul>
          
        
      </div>
      
    </header>
  );
};
export default Header;
