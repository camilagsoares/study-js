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
nomes.unshift("Ana"); //adiciona no começo do array
nomes.unshift("Mari");

nomes.shift();
//
// console.log(typeof nomes);

// console.log(nomes instanceof Array);

function saudacao(nome) {
  return `Bom dia, ${nome}`;
}

// saudacao("Camila");

const variavel = saudacao("Camila");
// console.log(variavel)

// const soma = () => {};

function soma(x = 1, y = 2) {
  const resultado = x + y;
  return resultado;
}

// console.log(soma())

// const raiz = function (n) {
//     return n ** 0.5;
// };

// se for retornar só uma linha,fica assim
const raiz = (n) => n ** 0.5;

const nomesAlunos = ["Camila", "Ana"];
nomesAlunos.push("Eduardo");
nomesAlunos[0] = "Maria";
// console.log(nomesAlunos)

const alunosEscola = {
  nome: "Camila",
  idade: 21,

  fala() {
    console.log(`Oi,eu tenho ${this.idade}`);
  },
  incrementaIdade() {
    this.idade++;
  },
};
console.log(`${this.idade}`)
alunosEscola.fala();
alunosEscola.incrementaIdade();
alunosEscola.fala();
// console.log(alunosEscola.nome)

function criaNomes(nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade,
  };
}

const pessoa1 = criaNomes("Camila", "Soares", 23);
// console.log(pessoa1);
