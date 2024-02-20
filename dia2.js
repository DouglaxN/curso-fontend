// let nome = prompt("Digite seu nome: ");
// console.log("Olá " + nome + ", seja bem vindo!");

// let nota1 = Number(prompt("Digite sua nota 1: "));
// let nota2 = Number(prompt("Digite sua nota 2: "));
// let nota3 = Number(prompt("Digite sua nota 3: "));
// let nota4 = Number(prompt("Digite sua nota 4: "));

// let media = (nota1+nota2+nota3+nota4)/4


// if (media >= 7){
//     console.log("Aprovado!")
// } else {
//     console.log("Reprovado")
// }
// console.log("Sua média entre " + nota1 +", " + nota2 +" e " + nota3 + " é " + media);

// for (let i = 10; i > 0; i--){
//     console.log(i);
// }
// console.log("e Fogo!");

// let texto = document.getElementById("texto");
// console.log(texto);


function calcularSoma (){
    let soma = 0;
    let numero = document.getElementById("numero").value;
    soma += +numero;

    if (numero === "0"){
        console.log("A soma dos números fornecidos é: " + soma);
    }
}
