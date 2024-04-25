/** Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY) 
 * e o ano atual também no formato (YYYY). 
 * Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas.  */

let anoNascimento, anoAtual, idadeMeses, idadeSemanas, idadeAnos, idadeDias

anoNascimento = Number (prompt('digite o ano que você nasceu: '))
anoAtual = Number (prompt('digite o ano atual: '))

idadeAnos = anoAtual - anoNascimento
idadeMeses = (anoAtual - anoNascimento) * 12 
idadeSemanas = (anoAtual - anoNascimento)* 52
idadeDias = (anoAtual - anoNascimento) * 365

alert('anos: ' + idadeAnos + 'meses: ' + idadeMeses + 'semanas: ' + idadeSemanas + 'dias: ' + idadeDias)