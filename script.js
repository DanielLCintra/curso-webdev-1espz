// // Métodos básicos
console.log("Mensagem normal");
console.info("Informação");
console.warn("Aviso");
console.error("Erro");

// Tabelas
console.table([
  { id: 1, tarefa: "Estudar JS" },
  { id: 2, tarefa: "Praticar código" }
]);

// Agrupamento
console.group("Grupo de logs");
console.log("Log 1");
console.log("Log 2");
console.groupEnd();

// Medição de tempo
console.time("Timer");
// ...algum processamento...
console.timeEnd("Timer");