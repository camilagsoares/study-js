// Aritméticos

/**
 * +
 * -
 * /
 *  ** é potenciação,seria elevado
 *
 *
 * Ordem de execução primeiro
 * () primeiro
 * **
 * / %
 * + -
 * ++ incremento
 * -- decremento
 */

const num1 = 5;
const num2 = 10;
// console.log(num1 ** num2);

let contador = 1;
--contador;
// console.log(contador)

//contador = contador + 50
contador += 50;

const nomes = ["Luiz", "Maria", "Bia"];

// nomes.push('Joao','Maria') //adiciona elementos no final do array
nomes.unshift("Ana") //adiciona no começo do array
nomes.unshift("Mari")

nomes.shift()

console.log(typeof nomes);

console.log(nomes instanceof Array);
