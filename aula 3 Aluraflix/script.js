

function adicionarFilme(){
    let input = document.getElementById("imgMovie").value
    let inputTitle = document.getElementById("text").value
    let inputLink = document.getElementById("linkTrailer").value
    let elementoListaFilmes = document.getElementById("listaFilmes")
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + "<div class='movies'><a taget='_blanck' href='"+inputLink+"'><img src="+input+"><a class='titleMovies'>"+inputTitle+"</a></a></div>"
    document.getElementById("filme").value = null
}