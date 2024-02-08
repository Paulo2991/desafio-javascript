//14 - Utilize um método para adicionar no meio deste array.
let nome = ["João",  "Maria",  "Jose",  "Pedro"];
let indice = Math.floor(nome.length / 2);
nome.splice(indice,0,"Ana","Paulo");
console.log(nome);