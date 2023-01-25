import './Menu.css';
import Sistema from '../Sistema';

const Menu = () => {
    
    const Menu = [
        '',
        'Menut',
        'MenuPed',
        'Edsys',
        'EDBKP',
        'Allsafe',
    ]

    const Config = [
        '',
        'Configuração',
    ]

    const Install = [
        '',
        'Instalação',
    ]


    
    return (
    <form>
        <section className="menu">
     
            <h2>Manual do Sistema</h2>
            <Sistema obrigatorio={true}label="Sistema" itens={Menu} className="menu" />
            <Sistema obrigatorio={true}label="Instalação" itens={Install} />
            <Sistema obrigatorio={true}label="Configuração" itens={Config} />
            
      
        
 </section>
        </form>
)
}




export default Menu





