//Transformar o for em while
//Todas as imagem terminar com .jpg com if
//Criar uma segunda lista para guardar os nome dos filmes


let listFilmes = [];
listFilmes[0] = "https://jardimdasamericas.com.br/uploads/2022/12/capa-filme-gato-de-botas-2-o-ultimo-pedido-784dc-large.jpg";
listFilmes[1] = "https://upload.wikimedia.org/wikipedia/pt/d/d2/Top_Gun_Maverick.jpg";
listFilmes[2] ="https://media.fstatic.com/Yruhfo3ohOQ3KiV3yQCmQcsK1ek=/210x312/smart/filters:format(webp)/media/movies/covers/2022/12/lwybGlEEJtXZM3ynY19PNwNlPn9.jpg";

for(let i=0; i < listFilmes.length ; i=i+1){
    document.write("<img src=" +listFilmes[i]+ ">")
}


