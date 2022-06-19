import React from "react";
import { useState ,createContext , useContext } from "react";

import style from './scale.css'





const Scale = (props) => {
    const Numbers = (nums) => {
        return nums.map((el)=>
              <li onClick={storeRating} className="App__ratings-li" key={el.toString()}>
                  {el}
              </li>
         )
      }

    const storeRating = (e) =>{
        let count = Number(e.target.innerText)
        rating.push(count)
        setRating(rating);

        if(rating.length ==8)
        console.log(rating) ;

    }

   const [rating , setRating] = useState([]);
return(
    <>
       <ul className="App__ratings">{
    Numbers(props.scale)
      }
      </ul>
  <div className="App__feel">
    <p>I'm not happy with my work</p>
    <p>My work inspires me</p>
  </div>
  </>
)
}

export default Scale;