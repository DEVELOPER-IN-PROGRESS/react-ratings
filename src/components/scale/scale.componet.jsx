import React from "react";
import style from './scale.css'

const storeRating = (e) =>{
    let rating = Number(e.target.innerText)
    console.log(rating) ;
}

const Numbers = (nums) => {
    return nums.map((el)=>
          <li onClick={storeRating} className="App__ratings-li" key={el.toString()}>
              {el}
          </li>
     )
  }

const Scale = (props) => {

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