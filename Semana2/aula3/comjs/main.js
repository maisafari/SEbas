/**
 * Tipos de variaveis:
 * Numérico
 * String
 * Booleano
 * NULL
 * Undefined
 * Objecto
 */

//Numerico e String

console.log("Teste");

let nome;
console.log(typeof nome);

nome = "Joao";
console.log(typeof nome);

let snome = "Cortes";

let nomeCmp =`${nome} de ${snome}`;
console.log(nomeCmp);

nomeCmp = nome + ' ' + snome;
console.log(nomeCmp);

let idade = 37;

let a = 5;
let b = "6";

let c = 0;

c = a + b;
console.log(typeof c, "Of : ", c);
console.log(c);

/**
 * Coisas importantes:
 * declaracoes idealmente camel case tipo --> let nomeCompleto = 0;
 * é sempre bom fechar as declaraçoe  com ponto e virgula.
 **/

//Boleano

let verdade = true;//false

//NULL
let x = null;

 //Undefined
let y = undefined;
console.log(x == y, x === y);

//Objecto

let user = {
    nome: "João",
    age: 37,
}


console.log(user);