import './App.css';
import Scale from './components/scale/scale.componet';


function App() {
  const scale = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className="App">
      {/* <p className="App-bg">question</p> */}
      <header className="App-header">
      </header>
      <Scale scale={scale}/>
    </div>
  );
}

export default App;
