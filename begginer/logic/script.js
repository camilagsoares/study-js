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
  const ano = data.getFullYear()

  return `${dia}/${mes}/ ${ano}`
}

const data = new Date();
const dataBrasil = formataData(data)
console.log(dataBrasil)