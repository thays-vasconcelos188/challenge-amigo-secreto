// Lista que irá guardar os nomes dos amigos adicionados
let amigos = [];

/**
 * Irá adicionar um amigo à lista.
 * Irá Verificar se o nome não está em um formato inválido (vazio ou com números).
 */
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  let nome = input.value.trim(); // Remove espaços extras antes e depois do nome

  // Fará a validação se o campo está vazio ou contém apenas números
  if (nome === "" || !isNaN(nome)) {
    alert("Por favor, digite um nome válido.");
    return;
  }

  // Impedirá que o mesmo nome seja adicionado mais de uma vez
  if (amigos.includes(nome)) {
    alert("Este nome já foi adicionado.");
    return;
  }

  // Vai adicionar o amigo à lista
  amigos.push(nome);
  atualizarLista(); // Atualizará a exibição da lista de amigos

  input.value = ""; // Limpa o campo de entrada
}

/**
 * Atualiza a lista de amigos, fazendo com que seja mostrado na interface do usuário.
 */
function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  
  // Irá limpar a lista e adicionar cada amigo dentro de um "<li>""
  lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join("");
}

/**
 * Vai sortear um amigo aleatório da lista.
 */
function sortearAmigo() {
  // Se a lista estiver vazia, exibibirá um alert
  if (amigos.length === 0) {
    alert("A lista de amigos está vazia.");
    return;
  }

  // Se houver menos de três amigos, exibe um alerta
  if (amigos.length <= 2) {
    alert("Para realizar o sorteio, é necessário haver ao menos três amigos.");
    return;
  }

  // Vai sortear um índice aleatório com base no tamanho da lista
  let indiceSorteado = Math.floor(Math.random() * amigos.length);

  // Irá remover o amigo sorteado da lista e guardar o nome dele
  let amigoSorteado = amigos.splice(indiceSorteado, 1)[0];

  // Exibirá o amigo sorteado na interface do usuário
  document.getElementById("resultado").innerHTML = `O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;
}