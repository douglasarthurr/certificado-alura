//não aceita coisas que não são imagens
//redirecionar o trailer do filme clicando no banner
//trabalhar com listas e adicionar o filme a um array

function adicionarFilme(){
    let input = document.getElementById("filme").value
    let elementoListaFilmes = document.getElementById("listaFilmes")
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + "<img src="+input+">"
    document.getElementById("filme").value = null
}