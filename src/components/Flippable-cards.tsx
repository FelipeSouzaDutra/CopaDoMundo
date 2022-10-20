

import Card from './Card';
import {CSSTransition} from 'react-transition-group';
import {useState} from 'react';

interface IProps{
   imagen  : string;
   imagen2 : string
   
 }
const FlippableCards = ({imagen,imagen2}:IProps) => {
    const [showFrt,setShowFrt] = useState(true);
    return(
            
      <div className='flippable-card-container'>
         <CSSTransition
            in={showFrt}
            timeout={300}
            classNames='flip'
          >
           <Card
              imagen={imagen}
              imagen2 = {imagen2}
              onClick={()=>{
              setShowFrt((v)=> !v);

           }}/>
         </CSSTransition>
        
      </div>  
        
    );
};

export default FlippableCards;