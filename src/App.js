import Banner from './componentes/Banner';
import Menu from './componentes/Menu';
import Buttom from './componentes/Botao';
import Button from '@mui/material/Button';
import './App.css';




function App() {
  
  function onClickButton() {


  }
  
  
  
  return (
    <div className="App">
      <Banner />
      <Menu />

      <Button variant="outlined" className="Botao" onClick={onClickButton}>Pesquisar</Button>
  


    </div>
  );
}

export default App;
