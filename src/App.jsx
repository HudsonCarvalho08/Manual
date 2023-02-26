import './App.css';

import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom'
import EdbkpPage  from './componentes/EDBKP/EdbkpPage'
import Menu from './componentes/Menu'
import InstalacaoPage from './componentes/Allsafe/InstalacaoPage'
import ConfiguracaoPage from './componentes/Allsafe/ConfiguracaoPage'
import InstalacaoPage_uninfe from './componentes/Uninfe/InstalacaoPage_uninfe'
import ConfiguracaoPage_uninfe from './componentes/Uninfe/ConfiguracaoPage_uninfe'
import Banner from './componentes/Banner'
import ConfiguracaoPage_edsys from './componentes/Edsys/ConfiguracaoPage_edsys'
import InstalacaoPage_mysql from './componentes/Mysql/InstalacaoPage_mysql'
import ConfiguracaoPage_mysql from './componentes/Mysql/ConfiguracaoPage_mysql'





function App() {
  
  
   

  return (
    <header>
     <Banner /> 
      <Router>
          
        <Menu />

          <Routes>

              <Route path='/EDBKP' element={<EdbkpPage/>} />
              <Route path='/Allsafe/InstalacaoPage' element={<InstalacaoPage/>} />
              <Route path='/Allsafe/ConfiguracaoPage' element={<ConfiguracaoPage/>} />
              <Route path='/Uninfe/InstalacaoPage_uninfe' element={<InstalacaoPage_uninfe/>} />
              <Route path='/Uninfe/ConfiguracaoPage_uninfe' element={<ConfiguracaoPage_uninfe/>} />
              <Route path='/Edsys/ConfiguracaoPage_edsys' element={<ConfiguracaoPage_edsys/>} />
              <Route path='/Mysql/InstalacaoPage_mysql' element={<InstalacaoPage_mysql/>} />
              <Route path='/Mysql/ConfiguracaoPage_mysql' element={<ConfiguracaoPage_mysql/>} />


            </Routes>
            
        
      </Router>
    
    </header>

    
    
    
    
    )
  }

export default App;
