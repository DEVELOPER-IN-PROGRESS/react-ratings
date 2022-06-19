import './App.css';
import logo from './assets/lor.jpg';
import React from 'react';
import { useState } from 'react';

import Scale from './components/scale/scale.componet';
import Popup from './components/popup/popup.component';
import Sidebar from './components/sidebar/sidebar.component';
import Qns from './components/question/question.components';
import Result from './components/result/result.component';

export const  UserContext = React.createContext({});

function App() {

  const showModal = () => document.getElementById('aboutPopup').style.display = 'block'

  const [rating , setRating] = useState([]);

  const [tag ,setTag] = useState('job');

  const [result,setResult] = useState([]);

  const [index, setIndex] = useState(1);

  const scale = [1,2,3,4,5,6,7,8,9,10]
  return (
    <UserContext.Provider value={{index,setIndex, setRating ,rating , setTag ,setResult }}>
    <div className="App">
      <Popup />
      <header className="App-header">
        <img src={logo} alt="logo" width={50} />
        <a href='#' onClick={showModal}>about +</a>
      </header>
       <Result tag={tag} result={result} />
      <div className='App__content'>
         <Qns  index={index} tag={tag} />
        <Sidebar />
      </div>

      <Scale scale={scale}/>
    </div>
    </UserContext.Provider>
  );
}

export default App;
