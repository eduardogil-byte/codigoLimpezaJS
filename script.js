/* const botao = document.getElementById('funcaoBotaoClicado')

botao.addEventListener('click',botaoClicado)

function botaoClicado() {
    const nome = "João";
    document.body.innerHTML = `
  <div class="cartao">
    <h2>Olá, ${nome}</h2>
    <p>Seja bem-vindo!</p>
    <button id="botaoVoltar">Voltar</button>
  </div>`;

  document.getElementById('botaoVoltar').addEventListener('click',voltarAoInicio)
}

function voltarAoInicio(){
    document.body.innerHTML = '<button id="funcaoBotaoClicado">clique-me</button>';

    document.getElementById('funcaoBotaoClicado').addEventListener('click',botaoClicado)
}

 */

let todasAsPessoas = 
["ALLESSANDRO NASCIMENTO BRASILINO",
"ARTHUR TRISCH ANTUNES",
"BRYAN ORLANDIN TEIXEIRA",
"CARLOS HENRIQUE DE OLIVEIRA GRIEP",
"CHRISTIAN PEREIRA DA SILVA",
"DIOGO RIGON ORIGOTTI",
"EDUARDO MACHADO GIL",
"ESTER DE LORETO VARGAS",
"EVELLYN OLIVEIRA MAIA",
"GABRIEL DE SOUZA CAVALHEIRO",
"GABRIELLI FERNANDES DOS SANTOS",
"GUILHERME HOFMAN CORREA",
"GUSTAVO BUENO PEREIRA",
"ISABELA SGARABOTTO",
"ISABELY SILVA DA ROCHA",
"ISADORA DALBOSCO DA ROSA",
"JOANA COSTA CORREA",
"JOÃO BENTO DE AGUIAR BARBIAN",
"JOÃO PEDRO VIEIRA CARDOZO",
"JOÃO VITOR COSTA CHAGAS",
"KAMILLY ALEXANDRA DOS SANTOS ALVES",
"LAUANY MILLNITZ",
"LUCAS BARROS DA SILVA",
"LUIZ DIOGO VAZ TELES",
"LUIZ GUSTAVO SILVA DE CAMPOS",
"MARCELLI DE LIMA NUNES",
"MARIA EDUARDA DA SILVA DE LIMA",
"MATHEUS GUILHERME SANTOS SANCHES",
"MATHEUS MELLO BORGES",
"MIGUEL MIYAKI DA CRUZ",
"NATALY RODRIGUES JARDIM",
"PABLO GUSTAVO DA SILVA CHEME",
"PENELOPE CASONATO AVILA",
"ROBSON VARELA DOS SANTOS",
"SAMUEL DE SOUSA GOMES",
"VICTOR GABRIEL DE SOUZA",
"VINICIUS PEREIRA LEITE",
"VINICIUS SILVA LIMA",
"VITOR CAMPOS DIAS FALCONI",
"WENDELL JESUS DA ROZA"]

let listaPessoasJaForam = []
let listaDiferencaEntreLista = []
let indice = 0;

inicio()


for(let i = 0; i< listaDiferencaEntreLista.length;i++){
    console.log(listaDiferencaEntreLista[i])
}


function inicio(){
    adicionarPessoasAListaDiferenca()

    document.body.innerHTML ='<h1>Escolha uma opção abaixo:</h1><button id="listaLimpeza">Lista Limpeza</button><button>Quem foi</button><button>Quem faltou</button><button>Pular pessoa</button><button>Excluir pessoa</button>'
    
    //fucoes
    document.getElementById('listaLimpeza').addEventListener('click',listaLimpeza)
}

function listaLimpeza(){
    document.body.innerHTML = '<h1>Escolha uma opção abaixo: </h1><button id="_3Pessoas">3 Pessoas</button><button id="_4Pessoas">4 Pessoas</button><button id="voltarInicio">Voltar ao inicio</button>'

    document.getElementById('_3Pessoas').addEventListener('click',_3PessoasFucao)

    document.getElementById('voltarInicio').addEventListener('click',inicio)
}

function _3PessoasFucao(){
    document.body.innerHTML = `
    <h1>Confirme se esta tudo certo?</h1>
    <p>1. ${listaDiferencaEntreLista[0]}</p>
    <p>2. ${listaDiferencaEntreLista[1]}</p>
    <p>3. ${listaDiferencaEntreLista[2]}</p>
    <button id="_3tudoCerto">Sim, tudo certo</button>
    <button id="_3AlguemFaltou">Não, alguem faltou</button>

    <button id="voltarInicio">Voltar ao inicio</button>
    `;
    document.getElementById('voltarInicio').addEventListener('click',inicio)
    
    document.getElementById('_3tudoCerto').addEventListener('click',_3tudoCerto)

    document.getElementById('_3AlguemFaltou').addEventListener('click',_3AlguemFaltou)
}

function _3tudoCerto(){

    adicionarNaLista3Pessoa(0,1,2)
    
}

function _3AlguemFaltou(){
    document.body.innerHTML = `
    <h1>Confirme se esta tudo certo?</h1>
    <p>1. ${listaDiferencaEntreLista[0]}</p>
    <p>2. ${listaDiferencaEntreLista[1]}</p>
    <p>3. ${listaDiferencaEntreLista[2]}</p>
    <button id="_1Pessoa">1. Pessoa</button>
    <button id="_2Pessoa">2. Pessoa</button>
    <button id="_3Pessoa">3. Pessoa</button>
    `
    document.getElementById('_1Pessoa').addEventListener('click',function(){
        document.body.innerHTML = `
        <h1>Confirme se esta tudo certo?</h1>
        <p>1. ${listaDiferencaEntreLista[1]}</p>
        <p>2. ${listaDiferencaEntreLista[2]}</p>
        <p>3. ${listaDiferencaEntreLista[3]}</p>
        <button id="tudoCerto">Sim, tudo certo</button>
        <button id="alguemFaltou">Não, alguem faltou</button>
        `
        document.getElementById('tudoCerto').addEventListener('click', function(){
            adicionarNaLista3Pessoa(1,2,3)})

        document.getElementById('alguemFaltou').addEventListener('click',adicioeneIndice)
    })

}

function adicioeneIndice(){
    let listaParaConfirmar = []
    let contator = 0
    let primeiro10 = listaDiferencaEntreLista.slice(0,10);
    document.body.innerHTML = `<h1>Escolha até 3 pessoas(clique nos nomes)</h1>`
    document.body.appendChild(document.createElement("br"))
    primeiro10.forEach((nome,i) => {
        const btn = document.createElement("button")
        btn.textContent = nome;
        btn.addEventListener('click', () => {
            listaParaConfirmar.push(nome)
            contator++
        })
        document.body.appendChild(btn)
        document.body.appendChild(document.createElement("br"))
    })
    if(contator == 3){
        document.body.innerHTML = `
        <h1>Confirme se esta tudo certo?</h1>
        <p>1. ${listaParaConfirmar[0]}</p>
        <p>2. ${listaParaConfirmar[1]}</p>
        <p>3. ${listaParaConfirmar[2]}</p>
        <button id="tudoCerto">Sim, tudo certo</button>
        <button id="tenteNovamente">Tente novamente</button>
        `
        document.getElementById('tudoCerto').addEventListener('click', function(){
            adicionarNaLista3Pessoa(0,1,2)})

        document.getElementById('tenteNovamente').addEventListener('click', adicioeneIndice)
    }
}



function adicionarNaLista3Pessoa(a1,a2,a3){
    listaPessoasJaForam.push(listaDiferencaEntreLista[a1]);
    listaPessoasJaForam.push(listaDiferencaEntreLista[a2]);
    listaPessoasJaForam.push(listaDiferencaEntreLista[a3]);
    document.body.innerHTML = `<h1>Adiciona com sucesso!</h1>`

    setTimeout(inicio,1000)
}


function adicionarPessoasAListaDiferenca(){
    listaDiferencaEntreLista = [];
    for(let nome of todasAsPessoas){
        if(!listaPessoasJaForam.includes(nome)){
            listaDiferencaEntreLista.push(nome)
        }
    }
}