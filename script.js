let todasAsPessoas = [
  "ALLESSANDRO NASCIMENTO BRASILINO",
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
  "WENDELL JESUS DA ROZA",
];

let listaPessoasJaForam = [];
let listaDiferencaEntreLista = [];
let listaAuxiliar = [];
let indice = 0;

let entrarEAdicionarOsUltimos = false;

carregarLista();

inicio();

function inicio() {
  salvar();
  carregarLista();
  testarSeTemAlguemListaAuxiliar();
  if (entrarEAdicionarOsUltimos) {
    adicionarFaltantes();
  } else {
    adicionarPessoasAListaDiferenca();
  }

  console.log("\n");
  for (let i = 0; i < listaDiferencaEntreLista.length; i++) {
    console.log(listaDiferencaEntreLista[i]);
  }
  console.log("\n");

  document.body.innerHTML = `
  <h1>Escolha uma opção abaixo:</h1>
  <div class="botoes">
  <button id="listaLimpeza">Lista Limpeza</button>
  <button id="quemFoi">Quem foi</button>
  <button id="quemFalta">Quem faltou</button>
  <button id="pularPessoa">Pular pessoa</button>
  <button id="excluirPessoa">Excluir pessoa</button>
  <button id="limparLocal">Limpar LocalStorage</button>
  </div>`;

  //fucoes
  document
    .getElementById("listaLimpeza")
    .addEventListener("click", listaLimpeza);

  document.getElementById("quemFoi").addEventListener("click", quemFoi);

  document
    .getElementById("quemFalta")
    .addEventListener("click", quemAindaFalta);

  document.getElementById("pularPessoa").addEventListener("click", pularPessoa);

  document
    .getElementById("excluirPessoa")
    .addEventListener("click", excluirPessoa);

  document.getElementById("limparLocal").addEventListener("click", limparLocal);

  //teste, adiciona 10 por vez
  /* document.getElementById("teste").addEventListener('click', function(){
    for(i = 0;i<10;i++){
      listaPessoasJaForam.push(listaDiferencaEntreLista[i])
    }
    inicio()
  })  */
}

function adicionarFaltantes() {
  listaAuxiliar = JSON.parse(localStorage.getItem("listaAuxiliar")) || [];
  let listaGuardarQuemFalta = [];
  //logica absurda!!!
  adicionarPessoasAListaDiferenca();
  listaDiferencaEntreLista.forEach((value) => {
    if (listaAuxiliar.includes(value)) {
      listaGuardarQuemFalta.push(value);
    }
  });
  listaDiferencaEntreLista = [];
  listaGuardarQuemFalta.forEach((value) => {
    listaDiferencaEntreLista.push(value);
  });
  todasAsPessoas.forEach((nome) => {
    if (
      !listaPessoasJaForam.includes(nome) &&
      !listaDiferencaEntreLista.includes(nome)
    ) {
      listaDiferencaEntreLista.push(nome);
    }
  });
  entrarEAdicionarOsUltimos = false;
}

function testarSeTemAlguemListaAuxiliar() {
  listaAuxiliar = JSON.parse(localStorage.getItem("listaAuxiliar")) || [];
  listaAuxiliar = listaAuxiliar.filter(
    (nome) => !listaPessoasJaForam.includes(nome)
  );
  if (listaAuxiliar.length > 0) {
    entrarEAdicionarOsUltimos = true;
  } else {
    entrarEAdicionarOsUltimos = false;
  }
  localStorage.setItem("listaAuxiliar", JSON.stringify(listaAuxiliar));
}

function listaLimpeza() {
  document.body.innerHTML = `
  <h1>Escolha uma opção abaixo: </h1>
  <div class="botoes">
  <button id="_3Pessoas">3 Pessoas</button>
  <button id="_4Pessoas">4 Pessoas</button>
  <button id="voltarInicio">Voltar ao inicio</button>
  </div>
  `;

  document
    .getElementById("_3Pessoas")
    .addEventListener("click", _3PessoasFucao);
  document
    .getElementById("_4Pessoas")
    .addEventListener("click", _4PessoasFuncao);

  document.getElementById("voltarInicio").addEventListener("click", inicio);
}

//funcoes 4 pessoas
function _4PessoasFuncao() {
  document.body.innerHTML = `
    <h1>Confirme se esta tudo certo?</h1>
    <div class="paragrafo">
    <p>1. ${listaDiferencaEntreLista[0]}</p>
    <p>2. ${listaDiferencaEntreLista[1]}</p>
    <p>3. ${listaDiferencaEntreLista[2]}</p>
    <p>4. ${listaDiferencaEntreLista[3]}</p>
    </div>

    <div class="botoes">
    <button id="_4tudoCerto">Sim, tudo certo</button>
    <button id="_4AlguemFaltou">Não, alguem faltou</button>
    <button id="adicionarIndice4Pessoas">Adicione pelo indice</button>
    <button id="voltarInicio">Voltar ao inicio</button>
    </div>
    `;

  document.getElementById("_4tudoCerto").addEventListener("click", function () {
    adicionarNaLista4Pessoa(0, 1, 2, 3);
  });

  document
    .getElementById("_4AlguemFaltou")
    .addEventListener("click", _4AlguemFaltou);

  document
    .getElementById("adicionarIndice4Pessoas")
    .addEventListener("click", adicioeneIndice4Pessoas);

  document.getElementById("voltarInicio").addEventListener("click", inicio);
}

function _4AlguemFaltou() {
  document.body.innerHTML = `
    <h1>Quem faltou? </h1>
    <div class="paragrafo">
    <p>1. ${listaDiferencaEntreLista[0]}</p>
    <p>2. ${listaDiferencaEntreLista[1]}</p>
    <p>3. ${listaDiferencaEntreLista[2]}</p>
    <p>4. ${listaDiferencaEntreLista[3]}</p>
    </div>
    <div class="botoes">
    <button id="_1Pessoa4Pessoas">1. Pessoa</button>
    <button id="_2Pessoa4Pessoas">2. Pessoa</button>
    <button id="_3Pessoa4Pessoas">3. Pessoa</button>
    <button id="_4Pessoa4Pessoas">4. Pessoa</button>
    <button id="voltarInicio">Voltar ao inicio</button>
    </div>
    `;

  document
    .getElementById("_1Pessoa4Pessoas")
    .addEventListener("click", _1Pessoa4Pessoas);
  document
    .getElementById("_2Pessoa4Pessoas")
    .addEventListener("click", _2Pessoa4Pessoas);
  document
    .getElementById("_3Pessoa4Pessoas")
    .addEventListener("click", _3Pessoa4Pessoas);
  document
    .getElementById("_4Pessoa4Pessoas")
    .addEventListener("click", _4Pessoa4Pessoas);
  document.getElementById("voltarInicio").addEventListener("click", inicio);
}

function _1Pessoa4Pessoas() {
  document.body.innerHTML = `
        <h1>Confirme se esta tudo certo?</h1>
        <div class="paragrafo">
        <p>1. ${listaDiferencaEntreLista[1]}</p>
        <p>2. ${listaDiferencaEntreLista[2]}</p>
        <p>3. ${listaDiferencaEntreLista[3]}</p>
        <p>4. ${listaDiferencaEntreLista[4]}</p>
        </div>
        <div class="botoes">
        <button id="tudoCerto">Sim, tudo certo</button>
        <button id="alguemFaltou">Não, alguem faltou</button>
        </div>
        `;
  document.getElementById("tudoCerto").addEventListener("click", function () {
    adicionarNaLista4Pessoa(1, 2, 3, 4);
  });

  document
    .getElementById("alguemFaltou")
    .addEventListener("click", adicioeneIndice4Pessoas);
}

function _2Pessoa4Pessoas() {
  document.body.innerHTML = `
        <h1>Confirme se esta tudo certo?</h1>
        <div class="paragrafo">
        <p>1. ${listaDiferencaEntreLista[0]}</p>
        <p>2. ${listaDiferencaEntreLista[4]}</p>
        <p>3. ${listaDiferencaEntreLista[2]}</p>
        <p>4. ${listaDiferencaEntreLista[3]}</p>
        </div>
        <div class="botoes">
        <button id="tudoCerto">Sim, tudo certo</button>
        <button id="alguemFaltou">Não, alguem faltou</button>
        </div>
        `;
  document.getElementById("tudoCerto").addEventListener("click", function () {
    adicionarNaLista4Pessoa(0, 4, 2, 3);
  });

  document
    .getElementById("alguemFaltou")
    .addEventListener("click", adicioeneIndice4Pessoas);
}

function _3Pessoa4Pessoas() {
  document.body.innerHTML = `
        <h1>Confirme se esta tudo certo?</h1>
        <div class="paragrafo">
        <p>1. ${listaDiferencaEntreLista[0]}</p>
        <p>2. ${listaDiferencaEntreLista[1]}</p>
        <p>3. ${listaDiferencaEntreLista[4]}</p>
        <p>4. ${listaDiferencaEntreLista[3]}</p>
        </div>
        <div class="botoes">
        <button id="tudoCerto">Sim, tudo certo</button>
        <button id="alguemFaltou">Não, alguem faltou</button>
        </div>
        `;
  document.getElementById("tudoCerto").addEventListener("click", function () {
    adicionarNaLista4Pessoa(0, 1, 4, 3);
  });

  document
    .getElementById("alguemFaltou")
    .addEventListener("click", adicioeneIndice4Pessoas);
}

function _4Pessoa4Pessoas() {
  document.body.innerHTML = `
        <h1>Confirme se esta tudo certo?</h1>
        <div class="paragrafo">
        <p>1. ${listaDiferencaEntreLista[0]}</p>
        <p>2. ${listaDiferencaEntreLista[1]}</p>
        <p>3. ${listaDiferencaEntreLista[2]}</p>
        <p>4. ${listaDiferencaEntreLista[4]}</p>
        </div>
        <div class="botoes">
        <button id="tudoCerto">Sim, tudo certo</button>
        <button id="alguemFaltou">Não, alguem faltou</button>
        </div>
        `;
  document.getElementById("tudoCerto").addEventListener("click", function () {
    adicionarNaLista4Pessoa(0, 1, 2, 4);
  });

  document
    .getElementById("alguemFaltou")
    .addEventListener("click", adicioeneIndice4Pessoas);
}

function adicioeneIndice4Pessoas() {
  let listaParaConfirmar = [];
  let contator = 0;
  let primeiro10 = listaDiferencaEntreLista.slice(0, 10);

  document.body.innerHTML = `
  <h1>Escolha até 4 pessoas</h1>
  <div class="paragrafo" id="pNegrito">
  <p>Clique nos nomes</p>
  </div>
  <div class="botoesNomes"></div>
  `;

  const container = document.querySelector(".botoesNomes");

  const botaoVoltar = document.createElement("button");
  botaoVoltar.textContent = "Voltar ao inicio";
  botaoVoltar.addEventListener("click", inicio);


  primeiro10.forEach((nome) => {
    const btn = document.createElement("button");
    btn.textContent = nome;
    btn.addEventListener("click", () => {
      listaParaConfirmar.push(nome);
      btn.disabled = true;
      contator++;

      console.log(contator);
      console.log(listaParaConfirmar);
      if (contator === 4) {
        mostrarAdicionarIndice4Pessoas(listaParaConfirmar);
      }
    });
    container.appendChild(btn);
  });
  container.appendChild(botaoVoltar);
}

function mostrarAdicionarIndice4Pessoas(lista) {
  document.body.innerHTML = `
        <h1>Confirme se esta tudo certo?</h1>
        <div class="paragrafo">
        <p>1. ${lista[0]}</p>
        <p>2. ${lista[1]}</p>
        <p>3. ${lista[2]}</p>
        <p>4. ${lista[3]}</p>
        </div>
        <div class="botoes">
        <button id="tudoCerto">Sim, tudo certo</button>
        <button id="tenteNovamente">Tente novamente</button>
        </div>
        `;
  document.getElementById("tudoCerto").addEventListener("click", function () {
    listaPessoasJaForam.push(lista[0]);
    listaPessoasJaForam.push(lista[1]);
    listaPessoasJaForam.push(lista[2]);
    listaPessoasJaForam.push(lista[3]);

    document.body.innerHTML = `<h1>Adiciona com sucesso!</h1>`;

    setTimeout(inicio, 1000);
  });

  document
    .getElementById("tenteNovamente")
    .addEventListener("click", adicioeneIndice4Pessoas);
}

//3 Pessoas
function _3PessoasFucao() {
  document.body.innerHTML = `
    <h1>Confirme se esta tudo certo?</h1>
    <div class="paragrafo">
    <p>1. ${listaDiferencaEntreLista[0]}</p>
    <p>2. ${listaDiferencaEntreLista[1]}</p>
    <p>3. ${listaDiferencaEntreLista[2]}</p>
    </div>
    <div class="botoes">
    <button id="_3tudoCerto">Sim, tudo certo</button>
    <button id="_3AlguemFaltou">Não, alguem faltou</button>
    <button id="adicionarIndice">Adicione pelo indice</button>
    <button id="voltarInicio">Voltar ao inicio</button>
    </div>
    `;

  document.getElementById("voltarInicio").addEventListener("click", inicio);

  document.getElementById("_3tudoCerto").addEventListener("click", function () {
    adicionarNaLista3Pessoa(0, 1, 2);
  });

  document
    .getElementById("_3AlguemFaltou")
    .addEventListener("click", _3AlguemFaltou);

  document
    .getElementById("adicionarIndice")
    .addEventListener("click", adicioeneIndice);
}

function _3AlguemFaltou() {
  document.body.innerHTML = `
    <h1>Quem faltou?</h1>
    <div class="paragrafo">
    <p>1. ${listaDiferencaEntreLista[0]}</p>
    <p>2. ${listaDiferencaEntreLista[1]}</p>
    <p>3. ${listaDiferencaEntreLista[2]}</p>
    </div>
    <div class="botoes">
    <button id="_1Pessoa">1. Pessoa</button>
    <button id="_2Pessoa">2. Pessoa</button>
    <button id="_3Pessoa">3. Pessoa</button>
    <button id="voltarInicio">Voltar ao inicio</button>
    </div>
    `;

  document.getElementById("voltarInicio").addEventListener("click", inicio);

  document.getElementById("_1Pessoa").addEventListener("click", _1PessoaFaltou);

  document.getElementById("_2Pessoa").addEventListener("click", _2PessoaFaltou);

  document.getElementById("_3Pessoa").addEventListener("click", _3PessoaFaltou);
}

//funcao primeira pessoa faltou na opcao 3 pessoas
function _1PessoaFaltou() {
  document.body.innerHTML = `
        <h1>Confirme se esta tudo certo?</h1>
        <div class="paragrafo">
        <p>1. ${listaDiferencaEntreLista[1]}</p>
        <p>2. ${listaDiferencaEntreLista[2]}</p>
        <p>3. ${listaDiferencaEntreLista[3]}</p>
        </div>
        <div class="botoes">
        <button id="tudoCerto">Sim, tudo certo</button>
        <button id="alguemFaltou">Não, alguem faltou</button>
        </div>
        `;
  document.getElementById("tudoCerto").addEventListener("click", function () {
    adicionarNaLista3Pessoa(1, 2, 3);
  });

  document
    .getElementById("alguemFaltou")
    .addEventListener("click", adicioeneIndice);
}

//funcao segunda pessoa faltou na opcao 3 pessoas
function _2PessoaFaltou() {
  document.body.innerHTML = `
        <h1>Confirme se esta tudo certo?</h1>
        <div class="paragrafo">
        <p>1. ${listaDiferencaEntreLista[0]}</p>
        <p>2. ${listaDiferencaEntreLista[3]}</p>
        <p>3. ${listaDiferencaEntreLista[2]}</p>
        </div>
        <div class="botoes">
        <button id="tudoCerto">Sim, tudo certo</button>
        <button id="alguemFaltou">Não, alguem faltou</button>
        </div>
        `;
  document.getElementById("tudoCerto").addEventListener("click", function () {
    adicionarNaLista3Pessoa(0, 3, 2);
  });

  document
    .getElementById("alguemFaltou")
    .addEventListener("click", adicioeneIndice);
}

//funcao terceira pessoa faltou na opção 3 pessoas
function _3PessoaFaltou() {
  document.body.innerHTML = `
        <h1>Confirme se esta tudo certo?</h1>
        <div class="paragrafo">
        <p>1. ${listaDiferencaEntreLista[0]}</p>
        <p>2. ${listaDiferencaEntreLista[1]}</p>
        <p>3. ${listaDiferencaEntreLista[3]}</p>
        </div>
        <div class="botoes">
        <button id="tudoCerto">Sim, tudo certo</button>
        <button id="alguemFaltou">Não, alguem faltou</button>
        </div>
        `;
  document.getElementById("tudoCerto").addEventListener("click", function () {
    adicionarNaLista3Pessoa(0, 1, 3);
  });

  document
    .getElementById("alguemFaltou")
    .addEventListener("click", adicioeneIndice);
}

function adicioeneIndice() {
  let listaParaConfirmar = [];
  let contator = 0;
  let primeiro10 = listaDiferencaEntreLista.slice(0, 10);
  document.body.innerHTML = `
  <h1>Escolha até 3 pessoas</h1>
  <div class="paragrafo" id="pNegrito">
  <p>Clique nos nomes</p>
  </div>
  <div class="botoesNomes">
  `;

  const container = document.querySelector(".botoesNomes");

  const botaoVoltar = document.createElement("button");
  botaoVoltar.textContent = "Voltar ao inicio";
  botaoVoltar.addEventListener("click", inicio);

  primeiro10.forEach((nome) => {
    const btn = document.createElement("button");
    btn.textContent = nome;
    btn.addEventListener("click", () => {
      listaParaConfirmar.push(nome);
      btn.disabled = true;
      contator++;

      console.log(contator);
      console.log(listaParaConfirmar);
      if (contator === 3) {
        mostrarAdicionarIndice(listaParaConfirmar);
      }
    });
    container.appendChild(btn);
  });
  container.appendChild(botaoVoltar);
}

function mostrarAdicionarIndice(lista) {
  document.body.innerHTML = `
        <h1>Confirme se esta tudo certo?</h1>
        <div class="paragrafo">
        <p>1. ${lista[0]}</p>
        <p>2. ${lista[1]}</p>
        <p>3. ${lista[2]}</p>
        </div>
        <div class="botoes">
        <button id="tudoCerto">Sim, tudo certo</button>
        <button id="tenteNovamente">Tente novamente</button>
        </div>
        `;
  document.getElementById("tudoCerto").addEventListener("click", function () {
    listaPessoasJaForam.push(lista[0]);
    listaPessoasJaForam.push(lista[1]);
    listaPessoasJaForam.push(lista[2]);

    document.body.innerHTML = `<h1>Adiciona com sucesso!</h1>`;

    setTimeout(inicio, 1000);
  });

  document
    .getElementById("tenteNovamente")
    .addEventListener("click", adicioeneIndice);
}

function adicionarNaLista3Pessoa(a1, a2, a3) {
  listaPessoasJaForam.push(listaDiferencaEntreLista[a1]);
  listaPessoasJaForam.push(listaDiferencaEntreLista[a2]);
  listaPessoasJaForam.push(listaDiferencaEntreLista[a3]);
  document.body.innerHTML = `<h1>Adiciona com sucesso!</h1>`;

  setTimeout(inicio, 1000);
}

function adicionarNaLista4Pessoa(a1, a2, a3, a4) {
  listaPessoasJaForam.push(listaDiferencaEntreLista[a1]);
  listaPessoasJaForam.push(listaDiferencaEntreLista[a2]);
  listaPessoasJaForam.push(listaDiferencaEntreLista[a3]);
  listaPessoasJaForam.push(listaDiferencaEntreLista[a4]);
  document.body.innerHTML = `<h1>Adiciona com sucesso!</h1>`;

  setTimeout(inicio, 1000);
}

function adicionarPessoasAListaDiferenca() {
  listaDiferencaEntreLista = [];
  for (let nome of todasAsPessoas) {
    if (!listaPessoasJaForam.includes(nome)) {
      listaDiferencaEntreLista.push(nome);
    }
  }
  if (listaDiferencaEntreLista.length < 5) {
    listaPessoasJaForam = [];
    listaAuxiliar = listaDiferencaEntreLista.slice();
    for (let nome of todasAsPessoas) {
      if (
        !listaPessoasJaForam.includes(nome) &&
        !listaDiferencaEntreLista.includes(nome)
      ) {
        listaDiferencaEntreLista.push(nome);
      }
    }
    // colocar um true na variavel
    entrarEAdicionarOsUltimos = true;

    //salvar no localStorage
    localStorage.setItem("listaAuxiliar", JSON.stringify(listaAuxiliar));
  }
}

function quemFoi() {
  let botaoVoltar = document.createElement("button");

  const divBotao = document.createElement("div");
  divBotao.classList.add("botoes");
  botaoVoltar.textContent = "Voltar ao inicio";
  botaoVoltar.onclick = () => {
    inicio();
  };

  document.body.innerHTML = `<h1>Lista de pessoas que ja limparam!</h1>`;

  const conteiner = document.createElement("div");
  conteiner.classList.add("paragrafoMostrarPessoas");

  document.body.appendChild(conteiner);

  listaPessoasJaForam.forEach((nome) => {
    let paragrafo = document.createElement("p");
    paragrafo.textContent = nome;
    conteiner.appendChild(paragrafo);
  });

  document.body.appendChild(divBotao);
  divBotao.appendChild(botaoVoltar);
}

function quemAindaFalta() {
  let botaoVoltar = document.createElement("button");
  botaoVoltar.textContent = "Voltar ao inicio";
  botaoVoltar.onclick = () => {
    inicio();
  };
  const divBotoes = document.createElement("div");
  divBotoes.classList.add("botoes");

  document.body.innerHTML = `<h1>Lista de pessoas que ainda faltam limpar</h1>`;

  const conteiner = document.createElement("div");
  conteiner.classList.add("paragrafoMostrarPessoas");
  document.body.appendChild(conteiner);

  listaDiferencaEntreLista.forEach((nome) => {
    let paragrafo = document.createElement("p");
    paragrafo.textContent = nome;
    conteiner.appendChild(paragrafo);
  });

  document.body.appendChild(divBotoes);
  divBotoes.appendChild(botaoVoltar);
}

function pularPessoa() {
  let listaParaConfirmar = [];
  let contator = 0;
  let primeiro10 = listaDiferencaEntreLista.slice(0, 10);

  document.body.innerHTML = `
  <h1>Escolha uma pessoa</h1>
  <div class="paragrafo" id="pNegrito">
  <p>Selecione um pessoa para adicionar a lista de pessoa que ja limparam, isso faz com que seja excluida desta rodada!</p>
  </div>
  <div class="botoesNomes"></div>
  `;
  const container = document.querySelector(".botoesNomes");

  const botaoVoltar = document.createElement("button");
  botaoVoltar.textContent = "Voltar ao inicio";
  botaoVoltar.addEventListener("click", inicio);

  primeiro10.forEach((nome) => {
    const btn = document.createElement("button");
    btn.textContent = nome;
    btn.addEventListener("click", () => {
      if (listaParaConfirmar >= 1) return;
      listaParaConfirmar.push(nome);
      btn.disabled = true;
      contator++;

      console.log(contator);
      console.log(listaParaConfirmar);
      if (contator === 1) {
        mostrarPularPessoa(listaParaConfirmar);
      }
    });
    container.appendChild(btn);
  });
  container.appendChild(botaoVoltar);
}

function mostrarPularPessoa(lista) {
  document.body.innerHTML = `
        <h1>Confirme se esta tudo certo?</h1>
        <div class="paragrafo">
        <p>1. ${lista[0]}</p>
        </div>
        <div class="botoes">
        <button id="tudoCerto">Sim, tudo certo</button>
        <button id="tenteNovamente">Tente novamente</button>
        </div>
        `;
  document.getElementById("tudoCerto").addEventListener("click", function () {
    listaPessoasJaForam.push(lista[0]);

    document.body.innerHTML = `<h1>Adiciona com sucesso!</h1>`;

    setTimeout(inicio, 1000);
  });

  document
    .getElementById("tenteNovamente")
    .addEventListener("click", pularPessoa);
}

// funcao excluir pessoa
function excluirPessoa() {
  let listaParaConfirmar = [];
  let contator = 0;
  let ultimos10 = listaPessoasJaForam.slice(-10);
  document.body.innerHTML = `
  <h1>Escolha uma pessoas para excluir</h1>
  <div class="paragrafo" id="pNegrito">
  <p>Selecione a pessoa para tirar da lista de quem ja foi!</p>
  <p>(Pego os ultimos 10 nomes)</p>
  </div>
  <div class="botoesNomes"></div>
  `;

  const container = document.querySelector(".botoesNomes");

  const botaoVoltar = document.createElement("button");
  botaoVoltar.textContent = "Voltar ao inicio";
  botaoVoltar.addEventListener("click", inicio);

  ultimos10.forEach((nome) => {
    const btn = document.createElement("button");
    btn.textContent = nome;
    btn.addEventListener("click", () => {
      if (listaParaConfirmar >= 1) return;
      listaParaConfirmar.push(nome);
      btn.disabled = true;
      contator++;

      console.log(contator);
      console.log(listaParaConfirmar);
      if (contator === 1) {
        mostrarExcluirPessoa(listaParaConfirmar);
      }
    });
    container.appendChild(btn);
  });
  container.appendChild(botaoVoltar);
}

function mostrarExcluirPessoa(lista) {
  document.body.innerHTML = `
        <h1>Você quer excluir esta pessoa?</h1>
        <div class="paragrafo">
        <p>1. ${lista[0]}</p>
        </div>
        <div class="botoes">
        <button id="tudoCerto">Sim, tudo certo</button>
        <button id="tenteNovamente">Tente novamente</button>
        </div>
        `;
  document.getElementById("tudoCerto").addEventListener("click", function () {
    let index = listaPessoasJaForam.indexOf(lista[0]);
    listaPessoasJaForam.splice(index, 1);

    document.body.innerHTML = `<h1>Removido com sucesso!</h1>`;

    setTimeout(inicio, 1000);
  });

  document
    .getElementById("tenteNovamente")
    .addEventListener("click", excluirPessoa);
}

function salvar() {
  localStorage.setItem("minhaLista", JSON.stringify(listaPessoasJaForam));
}
function carregarLista() {
  listaPessoasJaForam = JSON.parse(localStorage.getItem("minhaLista")) || [];
}
function limparLocal() {
  listaPessoasJaForam = [];
  localStorage.clear();
  document.body.innerHTML = `<h1>Limpo com sucesso o LocalStorage e a lista de pessoas que ja limparam!</h1>`;

  setTimeout(inicio, 1000);
}
