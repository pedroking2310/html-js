/**Crie um programa que peça os dados de um cliente: 
 * Nome, idade, nacionalidade, endereço. Após digitados os dados, mostrar na tela a seguinte mensagem "Cliente [Nome],
 *  com [idade] anos, [nacionalidade], reside no endereço [endereço]".
 *  Exemplo: Cliente Lucas, com 29 anos, brasileiro, reside no endereço Rua Victor Meirelles, 281, Centro, Florianópolis.  */

let nomePessoa  
let idadePessoa 
let enderecoPessoa
let nacionalidadePessoa

nomePessoa = prompt ("digit seu nome: ")
idadePessoa = Number (prompt ("digite sua idade: "))
enderecoPessoa = prompt ("digite seu endereço: ")
nacionalidadePessoa = prompt (" digite sua nacionalidade: ")
alert ("Cliente " +  nomePessoa + " com " + idadePessoa +" anos" + " reside no endereço \n" + enderecoPessoa + " é "
 + nacionalidadePessoa )