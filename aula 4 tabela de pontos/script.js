//adicionar outros jogadores adicionando em listas e for automatizando
//passar para um jogo que a eu gosto personalizar a tabela
//compartilhar os projetos nas redes sociais

function adicionarVitoria(player){
    player.vitoria++;
    player.pontos += 3;
    createTabelPlayerOne()
    
};

function adicionarEmpate(player){
    player.empate++;
    player.pontos += 1;
    createTabelPlayerOne(player)
};

function adicionarDerrota(player){
    player.derrota++;
    createTabelPlayerOne()
};

let playerOne = {
    nome: "player 1",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
};

let playerTwo = {
    nome: "player 2",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
};

let playerTree = {
    nome: "player 3",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
};

function createTabelPlayerOne(){
    const tabelElement = document.getElementById("tabelaJogadores")
    tabelElement.innerHTML = `
            <tr>
              <td>${playerOne.nome}</td>
              <td>${playerOne.vitoria}</td>
              <td>${playerOne.empate}</td>
              <td>${playerOne.derrota}</td>
              <td>${playerOne.pontos}</td>
              <td><button onClick="adicionarVitoria(playerOne)">Vitória</button></td>
              <td><button onClick="adicionarEmpate(playerOne)">Empate</button></td>
              <td><button onClick="adicionarDerrota(playerOne)">Derrota</button></td>
            </tr>

            <tr>
              <td>${playerTwo.nome}</td>
              <td>${playerTwo.vitoria}</td>
              <td>${playerTwo.empate}</td>
              <td>${playerTwo.derrota}</td>
              <td>${playerTwo.pontos}</td>
              <td><button onClick="adicionarVitoria(playerTwo)">Vitória</button></td>
              <td><button onClick="adicionarEmpate(playerTwo)">Empate</button></td>
              <td><button onClick="adicionarDerrota(playerTwo)">Derrota</button></td>
            </tr>

            <tr>
              <td>${playerTree.nome}</td>
              <td>${playerTree.vitoria}</td>
              <td>${playerTree.empate}</td>
              <td>${playerTree.derrota}</td>
              <td>${playerTree.pontos}</td>
              <td><button onClick="adicionarVitoria(playerTree)">Vitória</button></td>
              <td><button onClick="adicionarEmpate(playerTree)">Empate</button></td>
              <td><button onClick="adicionarDerrota(playerTree)">Derrota</button></td>
            </tr>
    `
}
createTabelPlayerOne()

