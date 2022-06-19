import React  from 'react';

import  './question.style.css'
import qn from '../../questions.json'

const Qns = (props) =>{
    return (<div className='App__question-wrapper'>
        <p className='App__question-num'>{props.index} <i> of 8</i></p>
        <h2 className='App__question'>{qn.questions[props.tag][props.index -1 ]}</h2>
    </div>)
}

export default Qns ;