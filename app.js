//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];
let amigo;
const lista = document.querySelector("#listaAmigos");
const resultado = document.querySelector("#resultado");

function adicionarAmigo() {
  let amigo = document.querySelector("#amigo");
  validarAmigo(amigo.value);
  listaAmigos.push(amigo.value);
  atualizarLista();
  amigo.value = "";
}

function sortearAmigo() {
  resultado.innerHTML = "";
  if (listaAmigos.length > 0) {
    let sorteado = Math.floor(Math.random() * listaAmigos.length);
    lista.innerHTML = "";
    let amigoSorteado = listaAmigos[sorteado];
    var listaItem = document.createElement("li");
    listaItem.innerText = `${amigoSorteado} é seu amigo secreto`;
    resultado.appendChild(listaItem);
    listaAmigos = [];
  } else {
    alert("Não há amigos para sortear. Por favor Adicione pelo menos um amigo");
  }
}

function validarAmigo(amigo) {
  if (amigo == "") {
    alert("Por favor, insira um nome");
  }
}

function atualizarLista() {
  lista.innerHTML = "";
  for (i in listaAmigos) {
    let li = document.createElement("li");
    li.innerText = listaAmigos[i];
    lista.appendChild(li);
  }
}
