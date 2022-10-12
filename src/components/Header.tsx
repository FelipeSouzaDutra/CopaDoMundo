import Link from "next/link";

import React from "react";

const Header = () => {
  return (
    <header className="flex items-center w-full h-16 p-4 bg-independence rounded-b-b shadow-xl">
      <div className="flex flex-row items-center justify-around max-w-6xl">
        <picture>
          <img
            className="w-15"
            src="/img/icone.png"
            alt="taça da copa do mundo"
          />
        </picture>
        
        <ul className="flex items-center gap-4 text-light-steel-blue font-medium ">
          <li>
            <Link href="/">
              <a className=" hover:scale-105 hover:text-platinum transition-all">
               
                Historia
              </a>
            </Link>
          </li>
          <li>
            <Link href="/brasil">
              <a className="hover:text-platinum transition-all">
              
                Brasil
              </a>
            </Link>
          </li>
          <li>
            <Link href="/campeos">
              <a className="hover:text-platinum transition-all">
               
                Campeões
              </a>
            </Link>
          </li>
          <li>
            <Link href="/jogosmarcantes">
              <a className="hover:text-platinum transition-all">
              
                Jogos Marcantes
              </a>
            </Link>
          </li>
          <li>
            <Link href="/bolao">
              <a className="hover:text-platinum transition-all">
               
                Bolão
              </a>
            </Link>
          </li>
        </ul>
      </div>
      
    </header>
  );
};
export default Header;
