import Link from "next/link";

import React from "react";

const Header = () => {
  return (
    <header className="flex items-center w-full h-16 p-4 bg-slate-700  shadow-md">
      <div className="flex items-center justify-between  max-w-6xl">
        <picture>
          <img
            className="w-15"
            src="/img/icone.png"
            alt="taça da copa do mundo"
          />
        </picture>
        

        <ul className="flex items-center gap-4 text-white font-medium ">
          <li>
            <Link href="/">
              <a className="hover:text-black hover:underline  focus:bg-black focus:underline transition-all">
               
                Historia
              </a>
            </Link>
          </li>
          <li>
            <Link href="/brasil">
              <a className="hover:text-black hover:underline  focus:bg-black focus:underline transition-all">
              
                Brasil
              </a>
            </Link>
          </li>
          <li>
            <Link href="/campeos">
              <a className="hover:text-black hover:underline  focus:bg-black focus:underline transition-all">
               
                Campeões
              </a>
            </Link>
          </li>
          <li>
            <Link href="/jogosmarcantes">
              <a className="hover:text-black hover:underline  focus:bg-black focus:underline transition-all">
              
                JogosMarcantes
              </a>
            </Link>
          </li>
          <li>
            <Link href="/bolao">
              <a className="hover:text-black hover:underline  focus:bg-black focus:underline transition-all">
               
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
