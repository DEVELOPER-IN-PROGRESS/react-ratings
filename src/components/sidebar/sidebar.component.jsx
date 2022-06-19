import { useEffect } from 'react';

import style from './sidebar.styles.css'

const Sidebar = () =>{

    useEffect( ()=>{
        document.getElementsByClassName('App__sidebar-p')[0].style.color = 'black'
    },[]) ;

    const categories = ["job","relationship","family","health","self-realization","finance","relaxation","friends"];

    const changeTab = (el) => {
        let p = document.querySelectorAll('.App__sidebar-p')
        p.forEach((p) =>
            p.style.color = '#a5a79e'
        )
        el.target.style.color ='black'
    }

    return(
        <div className="App__sidebar">
            <ul className="App__sidebar-ul">
                {
                    categories.map( (el,id) =>{
                        return (<li onClick={changeTab} key={`side${id}`}>
                          <p  className="App__sidebar-p">{el}</p>
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}

export default Sidebar;

