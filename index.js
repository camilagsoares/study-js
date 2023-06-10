// Declaracao basica

function saudacao(nome) {
  return `Bom dia, ${nome}`;
}

// const variaval = saudacao("Camila")
// console.log(variaval)
//para chamar a função eu chamo o parenteses

//Se nao retornar nada,a função por padrão retorna undefined
// A funcao pode retornar ou nao um valor

function somaValores(num1, num2) {
  let soma = num1 + num2;
  return soma;
}
// console.log(somaValores(1, 3));

//A funcao encerra depois do return, nao executa nada depois do return

// Guardar função dentro de uma variável (Nesse caso é chamado função anonima)

const raiz = function (n) {
  return n ** 0.5;
};

// console.log(raiz(9))

//Arrow function

const soma = () => {
  return 2;
};

// Quando a arrow function tem  uma linha, nao precisa de chaves. Ficaria assim:

let soma1 = () => 3;
