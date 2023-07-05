// const hora = 12;

// if (hora < 12) {
//   console.log("BOM DIA");
// } else{
//     console.log('nao')
// }

// const numero = -1;

// if (numero <= 5) {
//     console.log('Sim')
// } else if (numero >= 6 && numero <=8) {
//     console.log("entre 6 e 8")
// }

const pontuacao = 1000;

const nivelUsuario = pontuacao >= 999 ? "Usuario VIP" : "Usuario normal";
// console.log(nivelUsuario)

// const data = new Date();
// const dia = data.getDate()
// console.log(dia)

function formataData(data) {
  const dia = data.getDate();
  const mes = data.getMonth() + 1;
  const ano = data.getFullYear();

  return `${dia}/${mes}/ ${ano}`;
}

// const data = new Date("1987-04-21 00:00:00");
// let diaSemana = data.getDay();
// let diaSemanaYexto;

// switch (diaSemana) {
//   case 0:
//     diaSemanaYexto = "Domingo";
//     break;
//   case 1:
//     diaSemanaYexto = "Segunda";
//     break;
//   case 2:
//     diaSemanaYexto = "Terça";
//     break;
//     default: diaSemanaYexto = ''
// }
// console.log(diaSemana,diaSemanaYexto);

let date = new Date();
let diaDaSemana = date.getDay();
let mes = date.getMonth();
let ano = date.getFullYear();
let texto;

switch (diaDaSemana) {
  case 0:
    texto = "Domingo";
    break;
  case 1:
    texto = "Segunda";
    break;
  case 2:
    texto = "Terça";
    break;
}

// console.log(`${diaDaSemana} de ${mes} de ${ano}`);

// const h1 = document.querySelectorAll(h1);

let a = "A";
let b = "B";
let c = "C";

[a, b, c] = [1, 2, 3];
// console.log(abc)

const numeros = [1,2,3,4,5,6,7,8];
const arrayNumeros = [ [1,2,3], [4,5,6] ]
const [primeiroNumero,segundoNumero,...resto] = numeros;
const [listaUm,listaDois] = arrayNumeros;
// console.log(primeiroNumero,segundoNumero)
console.log(listaDois[0]);