


import { Interface } from "readline";
import { MouseEventHandler } from "react";

interface IProps{
   imagen  : string;
   imagen2 : string;
   onClick : MouseEventHandler;
}

const Card = ({ imagen,imagen2,onClick }:IProps) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">
        <picture>
          <img src={imagen2} alt="Copa de 2018" ></img> 
        </picture>
      </div>
      <div className="card-front">
        <picture>
          <img src={imagen} alt="Copa de 2014" ></img>
        </picture>
      </div>
    </div>
  );
};

export default Card;
