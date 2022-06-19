import React from "react";
import { useState , useContext } from "react";
import { UserContext } from "../../App";

import  './scale.css'

const Scale = (props) => {

 const {index, setIndex} = useContext(UserContext);

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

        setIndex(index+1);
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