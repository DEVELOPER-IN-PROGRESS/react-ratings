import './App.css';
import logo from './assets/lor.jpg';

import Scale from './components/scale/scale.componet';
import Popup from './components/popup/popup.component';
import Sidebar from './components/sidebar/sidebar.component';

function App() {

  const showModal = () => document.getElementById('aboutPopup').style.display = 'block'

  const scale = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className="App">
      <Popup />
      <header className="App-header">
        <img src={logo} alt="logo" width={50} />
        <a href='#' onClick={showModal}>about +</a>
      </header>
      <Sidebar/>
      <Scale scale={scale}/>
    </div>
  );
}

export default App;
