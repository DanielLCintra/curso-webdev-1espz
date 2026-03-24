// let idade = 16
// let status = idade >= 18 ? "Maior de idade" : "Menor de idade"

// console.log(idade)
// console.log(status)

// let valor = null

// let resultado = valor ?? "valor padrão"

// console.log(resultado)

// let a = 5
// let b = 10

// console.log(a == b);   // false (igualdade)
// console.log(a === b);  // false (igualdade estrita)
// console.log(a != b);   // true (diferente)
// console.log(a !== b);  // true (diferente estrito)
// console.log(a < b);    // true (menor que)
// console.log(a > b);    // false (maior que)
// console.log(a <= b);   // true (menor ou igual)
// console.log(a >= b);   // false (maior ou igual)

// let idade = 25
// let temCarteira = true

// if (idade >= 18 && temCarteira) {
//     console.log("Pode Dirigir")
// }

// if (idade < 18 || !temCarteira) {
//     console.log("Não pode dirigir")
// }

// if (!temCarteira) {
//     console.log("Não pode dirigir")
// }

// let tarefaConcluida = true

// if (tarefaConcluida) {
//     console.log("A tarefa está concluida")
// }

let prioridade = 9999

// if (prioridade === 3) {
//     console.log("Prioridade Alta")
// } else {
//     console.log("Prioridade não é alta")
// }

// console.log(prioridade === 3 ? "Prioridade Alta" : "Prioridade não é alta")

// if (prioridade === 1) {
//     console.log("Prioridade Baixa")
// } else if (prioridade === 2) {
//     console.log("Prioridade Média")
// } else if (prioridade === 3) {
//     console.log("Prioridade Alta")
// } else if (prioridade === 4) {
//     console.log("Prioridade Altissima")
// } else {
//     console.log("Prioridade Desconhecida")
// }

// let diaSemana = new Date().getDay()

// console.log(diaSemana)

// switch (diaSemana) {
//     case 0:
//         console.log("Domingo")
//         break;
//     case 1:
//         console.log("Segunda")
//         break;
//     case 2:
//         console.log("Terça")
//         break;
//     case 3:
//         console.log("Quarta")
//         break;
//     case 4:
//         console.log("Quinta")
//         break;
//     case 5:
//         console.log("Sexta")
//         break;
//     case 6:
//         console.log("Sábado")
//         break;

//     default:
//         console.log("Dia inválido")
//         break;
// }

// for (let i = 0;i <= 5;i++) {
//     console.log("Contagem:", i)
// }

// let contador = 0

// while (contador >= -5) {
//     console.log("Contagem:" + contador)
//     contador--
// }

let numero = 5

do {
    console.log("Número é:", numero)
    numero--
} while (numero > 0)