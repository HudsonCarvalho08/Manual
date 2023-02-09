
import './edbkp.css'

const EDBKP = () => {
    return(
        <main className="principal">
    
             <div className="teste">
                
                <h1>Configuração</h1>
                <p>1º Passo: Ir nas configurações</p>
                <img src="/imagens/Pri_Passo.png" alt="O primeiro passo" />
                <p>2º Passo: Clicar em adicionar para incluir uma configuração do backup</p>
                <img src="/imagens/Sec_Passo.png" alt="O segundo passo" />
                <p className="terceiro">3º Passo: Depois dos dados preenchidos conforme na seta indicando informar o local da pasta do sistema, onde será salvo
                     no pendrive ou HD Externo, marcar as extensão como padrão, se for banco de dados marcar o host, porta, nome do BD, usuário
                     e senha, essas informações pode pegar no ODBC e depois clicar em salvar</p>
                     <img src="/imagens/Ter_Passo.png" alt="O segundo passo" />
            </div>
          
            
            
           
               
        </main>
     
    )
}


export default EDBKP