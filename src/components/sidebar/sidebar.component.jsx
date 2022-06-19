import style from './sidebar.styles.css'

const Sidebar = () =>{
    const categories = ["job","relationship","family","health","self-realization","finance","relaxation","friends"];

    return(
        <div className="App__sidebar">
            <ul className="App__sidebar-ul">
                {
                    categories.map( (el,id) =>{
                        return (<li key={`side${id}`}>
                          <p className="App__sidebar-p">{el}</p>
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}

export default Sidebar;

