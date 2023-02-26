import './Configuracao.css'


const ConfiguracaoPage_mysql = () => {
    return (
        <main>
            <div className="config">
                <p>1º Passo: Ir no inicializar do windows e digitar: "Mysql Installer - Community"</p>
                <img src="/imagens/mysql_config_01.png" alt="Primeiro passo" />
                <p>2º Passo: Clicar em Add</p>
                <img src="/imagens/mysql_config_02.png" alt="Segundo passo" />
                <p>3º Passo: Clicar em Applications, MySQL Workbench 8.0, MySQL Workbench 8.0.32 e arrastar para o lado </p>
                <img src="/imagens/mysql_config_03.png" alt="Terceiro passo" />
                <p>4º Passo: Clicar em avançar</p>
                <img src="/imagens/mysql_config_04.png" alt="Quarto passo" />
                <p>5º Passo: Clicar em "Execute"</p>
                <img src="/imagens/mysql_config_05.png" alt="Quinto passo" />
                <p>6º Passo: Clicar em avançar</p>
                <img src="/imagens/mysql_config_06.png" alt="Sexto passo" />
                <p>7º Passo: Clicar em Finish</p>
                <img src="/imagens/mysql_config_07.png" alt="Sétimo passo" />
                <p>8º Passo: Pode ser que o MySQL Workbench execute quando finalizar, caso não é só ir no inicializar, localizar e executar</p>
                <p>9° Passo: Clicar com o botão direito em "Local instance MySQL80" e clicar "Edit Connection"</p>
                <img src="/imagens/mysql_config_08.png" alt="Nono passo" />
                <p>10º Passo: Mudar o "Username para edilsystem" e depois "Test Connection"</p>
                <img src="/imagens/mysql_config_09.png" alt="Decimo passo" />
                <p>11º Passo: Digitar a senha 3Dsys_04244425 e clicar em "ok" e depois em "close"</p>
                <img src="/imagens/mysql_config_10.png" alt="Decimo primeiro passo" />
                <p>12º Passo: Clicar em "ok"</p>
                <img src="/imagens/mysql_config_11.png" alt="Decimo segundo passo" />
                <p>13º Passo: Depois clicar em "Local instance MySQL80" e o Banco foi configurado com sucesso </p>



            </div>
        </main>
    )
}

export default ConfiguracaoPage_mysql