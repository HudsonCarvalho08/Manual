import './Menu.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
 
   


const Menu = () => {
  const navigate = useNavigate();

    return( 
      
    <header className="main">

      
      <div className="menu">
          
          <div className="menu-1">
              <h2 className="menu-2" onClick={() => navigate('./Menu/index')}>Edilsystem</h2>
      
          </div>

          <div className="menu-1">
              <h2 className="titulo" >Configuração e Instalação</h2>
      
          </div>

          <div className="menu">
        <Accordion className="menu-3">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="menu-4">Allsafe</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <li className="botao" onClick={() => navigate('./Allsafe/InstalacaoPage')}>
              Instalação
            </li>
            <li className="botao-2" onClick={() => navigate('./Allsafe/ConfiguracaoPage')}>
              Configuração
            </li>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>EDBKP</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <li  className="botao-2" onClick={() => navigate('/EDBKP')}>
              Configuração
            </li>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>EDsys</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <li className="botao">
              Instalação
            </li>
            <li className="botao-2" onClick={() => navigate('./Edsys/ConfiguracaoPage_edsys')}>
              Configuração
            </li>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Uninfe</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <li className="botao" onClick={() => navigate('./Uninfe/InstalacaoPage_uninfe')}>
              Instalação
            </li>
            <li className="botao-2" onClick={() => navigate('./Uninfe/ConfiguracaoPage_uninfe')}>
              Configuração
            </li>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Banco de Dados Mysql</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <li className="botao" onClick={() => navigate('./Mysql/InstalacaoPage_mysql')}>
              Instalação
            </li>
            <li className="botao-2" onClick={() => navigate('./Mysql/ConfiguracaoPage_mysql')}>
              Configuração
            </li>
          </AccordionDetails>
        </Accordion>
          <div className="menu-1">
              <h2 className="titulo">Emissão de CT-e</h2>
      
          </div>

          <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Emissão de CT-e</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <li className="botao">
              Emissão Normal
            </li>
            <li className="botao-2">
              Emissão de Subcontratação
            </li>
            <li className="botao-2">
              Emissão de Complementar
            </li>
          </AccordionDetails>
        </Accordion>

          <div className="menu-1">
              <h2 className="titulo">Emissão de MDF-e</h2>
      
          </div>

          <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Emissão de MDF-e</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <li className="botao">
              Emissão Normal pegando CT-e
            </li>
            <li className="botao-2">
            Emissão Normal pegando NF-e
            </li>
          </AccordionDetails>
        </Accordion>

        
        
        </div>
      </div>

    


        
        
     </header>
    )
 }

 
 export default Menu