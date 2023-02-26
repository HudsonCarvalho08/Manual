import { Link } from "react-router-dom";
import './Instalacao.css';

const InstalacaoPage = () => {
    return (
        <main className="allsafe">
           
            <div>
                <h1>Instalação</h1>
                <p>1º Passo: ir no site do Edil , para baixar o app Allsafe </p>
                <nav>
                    <Link className="link"to ="https://edilsystem.com.br/site/downloads/">https://edilsystem.com.br/site/downloads/</Link>
                </nav>
                <p>2º Passo: Clicar em "Avançar"</p>
                <img src="/imagens/Pri_passo_allsafe.png" alt="O primeiro passo" />
                <p>3º Passo: Deixar salvo no mesmo diretório do sistema ou no disco C:</p>
                <img src="/imagens/Sec_passo_allsafe.png" alt="O segundo passo" />
                <p>3° Passo: Marcar essa opção apontada na imagem</p>
                <img src="/imagens/Ter_passo_allsafe.png" alt="O terceiro passo" />
                <p>4ª Passo: Deixar desmarcado essa opção apontada na imagem</p>
                <img src="/imagens/Quar_passo_allsafe.png" alt="O quarto passo" />
                <p>5ª Passo: Clicar em instalar</p>
                <img src="/imagens/Quin_passo_allsafe.png" alt="O quinto passo" />
              
								
							
                



                
            </div>
        </main>


    )
}

export default InstalacaoPage