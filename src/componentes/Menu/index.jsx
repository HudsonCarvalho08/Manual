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
          
          <ul className="menu-1">
              <h2 className="menu-2" onClick={() => navigate('./Menu/index')}>Edilsystem</h2>
      
          </ul>

          <ul className="menu-1">
              <h2 className="titulo" >Configuração e Instalação</h2>
      
          </ul>

          <div className="menu">
        <Accordion className="menu-3">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Allsafe</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <li className="botao" onClick={() => navigate('./Allsafe/InstalacaoPage')}>
              Instalação
            </li>
            <buttom className="botao-2" onClick={() => navigate('./Allsafe/ConfiguracaoPage')}>
              Configuração
            </buttom>
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
            <buttom  className="botao-2" onClick={() => navigate('/EDBKP')}>
              Configuração
            </buttom>
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
            <buttom className="botao">
              Instalação
            </buttom>
            <buttom className="botao-2">
              Configuração
            </buttom>
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
            <buttom className="botao" onClick={() => navigate('./Uninfe/InstalacaoPage_uninfe')}>
              Instalação
            </buttom>
            <buttom className="botao-2" onClick={() => navigate('./Uninfe/ConfiguracaoPage_uninfe')}>
              Configuração
            </buttom>
          </AccordionDetails>
        </Accordion>
        <ul className="menu-1">
              <h2 className="menu-2">Emissão de CT-e</h2>
      
          </ul>

          <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Emissão de CT-e</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <buttom className="botao">
              Emissão Normal
            </buttom>
            <buttom className="botao-2">
              Emissão de Subcontratação
            </buttom>
            <buttom className="botao-2">
              Emissão de Complementar
            </buttom>
          </AccordionDetails>
        </Accordion>

        <ul className="menu-1">
              <h2 className="menu-2">Emissão de MDF-e</h2>
      
          </ul>

          <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Emissão de MDF-e</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <buttom className="botao">
              Emissão Normal pegando CT-e
            </buttom>
            <buttom className="botao-2">
            Emissão Normal pegando NF-e
            </buttom>
          </AccordionDetails>
        </Accordion>

        
        
        </div>
      </div>

    


        
        
     </header>
    )
 }

 
 export default Menu