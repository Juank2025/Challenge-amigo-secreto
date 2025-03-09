// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const ulListFriends = document.getElementById("amigo");
const listFriends = [];
const ulList = document.getElementById("listaAmigos");
const ulResult = document.getElementById("resultado");

function agregarAmigo (){
    if(!ulListFriends.value){
        alert("Debe ingresar un nombre válido");
    }
listFriends.push(ulListFriends.value);
ulList.innerHTML += `<li>${ulListFriends.value}</li>`;
}

function sortearAmigo(){
   const random = Math.floor(Math.random() * listFriends.length);
    const amigoSecreto = listFriends[random];
    ulResult.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}
