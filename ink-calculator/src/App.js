import './App.css';
import DivWall from './components/divWall';
import Button from './components/button';

function App() {
  return (
    <>
        <h1> Calculo de Tinta</h1>
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
          <Button type='button' name='Calcular' />
      </div>
    </>
  );
}

export default App;
