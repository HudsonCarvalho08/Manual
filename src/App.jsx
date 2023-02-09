import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import EDBKP  from './componentes/EDBKP'
import Menu from './componentes/Menu'
import Allsafe from './componentes/Allsafe'
import Banner from './componentes/Banner'




function App() {
  
  return (
    
       
       
    <Router>
   
      <Menu />
      
     
        <Routes>
      
            <Route path='/EDBKP' element={<EDBKP/>} />
            <Route path='/Allsafe' element={<Allsafe/>} />
            

          </Routes>
          
      
    </Router>
    
   

    
    
    
    
    )
  }

export default App;
