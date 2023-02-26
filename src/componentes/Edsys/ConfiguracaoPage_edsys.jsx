import './Configuracao.css'

const ConfiguracaoPage_edsys = () => {
    return (
        <main className="edsys">
            <div className="edsys-1">
                <p>1º Passo: Ir na publica na pasta de alguns dos suportes para pegar o instalador do Edsys</p>
                <p>2º Passo: Executar todos os bats em ordem</p>
                <img src="/imagens/edsys_config_01.png" alt="Primeiro passo" />
                <p>3º Passo: Ao executar o primeiro bat, é para informar o caminho do sistema que vai vincular no EDsys </p>
                <img src="/imagens/edsys_config_02.png" alt="Segundo passo" />
                <p>4º Passo: O segundo bat ele vai realizar a instalação dos componentes</p>
                <img src="/imagens/edsys_config_03.png" alt="Terceiro passo" />
                <p>5º Passo: O terceiro bat também realizará a instalação de outros componentes</p>
                <p>6º Passo: O quarto bat irá configurar o banco de dados no EDsys, informando o host, a porta, o nome do banco de dados, user e a senha. </p>
                <img src="/imagens/edsys_config_04.png" alt="Quarto passo" />
                <p>7º Passo: Ao executar o quinto e o sexto bat é apenas para startfront e startback </p>
                <img src="/imagens/edsys_config_05.png" alt="Quarto passo" />
                <img src="/imagens/edsys_config_06.png" alt="Quarto passo" />

            </div>
        </main>

    )

}

export default ConfiguracaoPage_edsys