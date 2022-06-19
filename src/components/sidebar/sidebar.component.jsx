import { useEffect ,useContext} from 'react';
import { UserContext } from '../../App';

import './sidebar.styles.css'

const Sidebar = () =>{
  const {setTag , setRating ,setIndex} = useContext(UserContext) ;
    useEffect( ()=>{
        document.getElementsByClassName('App__sidebar-p')[0].style.color = 'black';
    },[]) ;

    const categories = ["job","relationship","family","health","self-realization","finance","relaxation","friends"];

    const changeTab = (el) => {
        setRating([])
        setIndex(1)
        let p = document.querySelectorAll('.App__sidebar-p')
        p.forEach((p) =>
            p.style.color = '#a5a79e'
        )
        el.target.style.color ='black'
        setTag(el.target.innerText.toLowerCase())


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

