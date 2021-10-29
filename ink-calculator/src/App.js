import './App.css';
import DivWall from './components/divWall';
import Button from './components/button';

function App() {
  return (
    <>
      <div className='App'>
        <div className='wallDiv'>
          <h3> Parede 1 </h3>
          <DivWall />
        </div>
        <div className='wallDiv'>
          <h3> Parede 2 </h3>
          <DivWall />
        </div>
        <div className='wallDiv'>
          <h3> Parede 3 </h3>
          <DivWall />
        </div>
        <div className='wallDiv'>
          <h3> Parede 4 </h3>
          <DivWall />
        </div>
      </div>
      <div>
          <Button />
      </div>
    </>
  );
}

export default App;
