

let nome =  'Vivi';
console.log(`Bem vindo ao console da aplicação! ${nome}`);
alert(`Olá, ${nome}!`)


resposta = prompt('Qual a linguagem de programação você mais gosta?');
console.log(`Resposta: ${resposta}`);


valor1 = 12;
valor2 = 87;

resultado = valor1 + valor2;
console.log(`O resultado da soma entre ${valor1} e ${valor2} é: ${resultado}`);

valor3 = 12;
valor4 = 9;

resultado = valor3 - valor4;
console.log(`O resultado da subtração entre ${valor3} e ${valor4} é: ${resultado}`);

let idadeUsuario = prompt('Qual a sua idade?');

if (idadeUsuario > 17) {
    alert('Você é maior de idade!');
} else {
    alert('Você é menor de idade!');
}


numero = prompt('Digite um número');
if (numero < 0) {
    alert(`O número ${numero} é negativo`);
    console.log(`O número ${numero} é negativo`);
} else {
    if (numero === 0) {
        alert(`O número é zero`);
        console.log(`O número é zero`);
    } else {
        alert(`O número ${numero} é positivo`);
        console.log(`O número ${numero} é positivo`);
    }
}

let contador = 0;
while (contador <= 10) {
    alert(contador);
    console.log(contador);
    contador++;
}


let nota = 9;
if (nota >= 7) {
    console.log('Aprovado');
}else {
    console.log('Reprovado');
}

let primeiroNumero = Math.random();
console.log(`Primeiro número: ${primeiroNumero}`);
let segundoNumero = parseInt(Math.random() * 10 + 1);
console.log(`Segundo número: ${segundoNumero}`);
let terceiroNumero = parseInt(Math.random() * 1000 + 1);
console.log(`Terceiro número: ${terceiroNumero}`);