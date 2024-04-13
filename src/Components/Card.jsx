import "./card.css"
import countervector from "./img/counter.svg"; 
import vektorpas from "./img/tagivektord.svg";
import tepavektor from "./img/tepasVector.svg";
import shurva from "./foto/shurvaa.svg";
import { useState } from "react";


export default function Card() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);

  const handleDecrement = () => setCount(count - 1);
  return (
    <div>
      
        <div className="container">
          <div className="cards ">
            <div className="card ">
              <img src={shurva} alt="" />
              <p>pelmen 1-pors <br />25000</p>
              <div className="button">
              <button onClick={handleDecrement}>-</button>
              <div className="back">{count}</div>
              <button onClick={handleIncrement}>+</button>
            </div>
              
            </div>
          </div>
        </div>
  
    
    </div>
  );
}
