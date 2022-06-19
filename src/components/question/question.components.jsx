import React  from 'react';

import  './question.style.css'
import qn from '../../questions.json'

const Qns = (props) =>{

 // const index = useContext(UserContext)

    return (<div className='App__question-wrapper'>
        <p className='App__question-num'><span>{props.index}</span> <i>of 8</i> </p>
        <h2 className='App__question'>{qn.questions.job[props.index]}</h2>
    </div>)
}

export default Qns ;