import './Configuracao.css'

const ConfiguracaoPage = () => {
    return (
        <main >
            <div className="configuracao-1">
                <h1>Configuração</h1>
                <p>1º Passo: Pedir ao gerente do suporte para cadastrar o CNPJ da empresa que for instalar o Allsafe</p>
                <p>2° Passo: Executar o Allsafe, depois clicar em Adicionar e selecionar os campos informados pela seta indicando os campos</p>
                <img src="/imagens/Pri_passo_allsafe_config.png" alt="O primeiro passo da configuração" />
                <p>3º Passo: Clicar em "Adicionar Sem Inicialização" para que você possa incluir a configuração do banco de dados sem perder o CNPJ e a Razão Social</p>
                <img src="/imagens/Sec_passo_allsafe_config.png" alt="O segundo passo da configuração" />
                <p>4º Passo: Apagar os campos e incluir apenas os dados do banco de dados, conforme a seta indicando nos campos</p>
                <img src="/imagens/Ter_passo_allsafe_config.png" alt="O terceiro passo da configuração" />
                <p>5º Passo: Ir no executar do Windows e digitar "shell:startup"</p>
                <img src="/imagens/Quar_passo_allsafe_config.png" alt="O quarto passo da configuração" />
                <p>6º Passo: Clicar com o botão direito, novo e clicar em atalho</p>
                <img src="/imagens/Quin_passo_allsafe_config.png" alt="O quinto passo da configuração" />
                <p>7º Passo: Marcar a pasta do Allsafe e vincular o exe para executar sempre que ligar o windows</p>
                <img src="/imagens/Sex_passo_allsafe_config.png" alt="O sexto passo da configuração" />
                <p>8º Passo: Clicar em concluir</p>
                <img src="/imagens/Set_passo_allsafe_config.png" alt="O setimo passo da configuração" />
                <h2 className="teste">Obs: Sempre que configurar o Allsafe fazer um teste, estornar o backup no computador para ver se deu certo!!!</h2>

                
                


            </div>
        </main>
        )

}

export default ConfiguracaoPage