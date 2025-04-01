let listaDeTarefas = [];

listaDeTarefas.push("Estudar JavaScript");
listaDeTarefas.push("Fazer exercícios de Matemática");
listaDeTarefas.push("Ler um livro");

console.log("Número total de tarefas:", listaDeTarefas.length);

listaDeTarefas.unshift("Fazer compras");

listaDeTarefas.splice(2, 0, "Reunião com equipe");

listaDeTarefas.push("Pagar contas");

listaDeTarefas = listaDeTarefas.filter(item => item !== "Fazer exercícios de Matemática");

listaDeTarefas.pop();

console.log("Lista de Tarefas Atualizada:");
console.log(listaDeTarefas);

