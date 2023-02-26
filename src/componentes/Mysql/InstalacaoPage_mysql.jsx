import './Instalacao.css'
import { Link } from "react-router-dom";

const InstalacaoPage_mysql = () => {
    return (
        <main>
            <div className="mysql">
                <h1 className="titulo">Instalação do MYSQL</h1>
                <p>1º Passo: Ir ao site do Mysql e realizar o download do instalador, baixar o que tiver mais quantidade</p>
                <img src="/imagens/mysql_install_01.png" alt="Primeiro passo" />
                <nav>
                <Link className="link-mysql"to ="https://dev.mysql.com/downloads/installer/">https://dev.mysql.com/downloads/installer/</Link>
                </nav>
                <p>2º Passo: Realizar o download do Mysql</p>
                <img src="/imagens/mysql_install_02.png" alt="Segundo passo" />
                <p>3º Passo: Executar o insatalador, marcar "Server only"</p>
                <img src="/imagens/mysql_install_03.png" alt="Terceiro passo" />
                <p>4º Passo: Clicar em avançar</p>
                <img src="/imagens/mysql_install_04.png" alt="Quarto passo" />
                <p>5º Passo: Selecionar Mysql Server e depois clicar em executar, depois ele realizará a instalação</p>
                <img src="/imagens/mysql_install_05.png" alt="Quinto passo" />
                <p>6º Passo: Clicar em avançar</p>
                <img src="/imagens/mysql_install_06.png" alt="Sexto passo" />
                <p>7º Passo: Marcar "Server Computer" e a porta "33418" e avançar</p>
                <img src="/imagens/mysql_install_07.png" alt="Sétimo passo" />
                <p>8º Passo: Marcar "Use LEgacy Authentication" e avançar</p>
                <img src="/imagens/mysql_install_08.png" alt="Oitavo passo" />
                <p>9º Passo: Digitar a senha "3Dsys_04244425 nos dois campos e depois clicar e "Add User</p>
                <img src="/imagens/mysql_install_09.png" alt="Nono passo" />
                <p>10º Passo: Digitar User Name: edilsystem e também a senha, depois clicar em "ok" e avançar</p>
                <img src="/imagens/mysql_install_10.png" alt="Décimo passo" />
                <p>11º Passo: Clicar em avançar</p>
                <img src="/imagens/mysql_install_11.png" alt="Décimo primeiro passo" />
                <p>12º Passo: Clicar em avançar</p>
                <img src="/imagens/mysql_install_12.png" alt="Décimo segundo passo" />
                <p>13º Passo: Clicar em executar</p>
                <img src="/imagens/mysql_install_13.png" alt="Décimo terceiro passo" />
                <p>14º Passo: Clicar em Finish</p>
                <img src="/imagens/mysql_install_14.png" alt="Décimo quarto passo" />
                <p>15º Passo: Clicar em avançar</p>
                <img src="/imagens/mysql_install_15.png" alt="Décimo quinto passo" />
                <p>16º Passo: Clicar em Finish</p>
                <img src="/imagens/mysql_install_16.png" alt="Décimo sexto passo" />
            </div>
                
            <div className="mysql-teste">
                <h1 >Instalação do ODBC</h1>
                <p className="texto-mysql">1° Passo: Ir no site do Edilsystem e baixar o conector mysqk ODBC, atenção se a máquina for de 32bits ou 64bits baixar o correspondente ao computador</p>
                <nav>
                <Link className="link-mysql"to ="https://edilsystem.com.br/site/utilitarios/">https://edilsystem.com.br/site/utilitarios/</Link>
                </nav>
                <p>2º Passo: Executar o mysql ODBC e avançar</p>
                <img className="imagem-mysql" src="/imagens/odbc_install_01.png" alt="Segundo passo" />
                <p>3º Passo: Marcar aceitar os termos e avançar</p>
                <img src="/imagens/odbc_install_02.png" alt="Terceiro passo" />
                <p>4º Passo: Marcar completo e depois avançar</p>
                <img src="/imagens/odbc_install_03.png" alt="Quarto passo" />
                <p>5º Passo: Clicar em instalar</p>
                <img src="/imagens/odbc_install_04.png" alt="Quinto passo" />
                <p>6º Passo: Clicar em Finish</p>
                <img src="/imagens/odbc_install_05.png" alt="Sexto passo" />
            </div>

           
        </main>
    )
}

export default InstalacaoPage_mysql