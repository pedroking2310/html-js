/**Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, realizar o cálculo 
 * (peso / altura * altura) e mostrar o resultado na tela, com 3 casas depois da vírgula.  */

 let peso, altura, imc

peso = Number (prompt('digite sue peso: '))
altura = Number (prompt('digite sua altura: '))
 imc = peso / (altura * altura)
 
 alert ('seu imc é: ' + imc.toFixed(3))
