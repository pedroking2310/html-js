/**Uma cidade pretende apurar os votos de sua eleição. 
 * Faça um programa para ler o número total de eleitores. 
 * Em seguida o número de votos do candidato X, o número de votos do candidato Y, 
 * total de votos brancos e total de votos nulos(a soma desses quatro, deve ser igual ao total de eleitores). 
 * Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.  */

let candidatoX, candidatoY, votosBrancos, votosnulos, eleitores, somaVotos, porcentagemX, porcentagemY, porcentagemBrancos, porcentagemNuloss, somaEleitores

eleitores = Number(prompt('digite o número total de eleitores: '))
candidatoX = Number(prompt('digite os votos do candidado X: '))
candidatoY = Number(prompt('digite os votos do candidato Y: '))
votosBrancos = Number(prompt('digite quantos votos brancos: '))
votosnulos = Number(prompt('digite quantos voto nulos: '))

somaEleitores = (candidatoX + candidatoY + votosBrancos + votosnulos)

porcentagemX = (candidatoX / eleitores) *100
porcentagemY = (candidatoY / eleitores) *100
porcentagemBrancos = (votosBrancos / eleitores) *100
porcentagemNulos = (votosnulos / eleitores) *100

alert('o total de eleitores é '+ eleitores + '\ncandidato X tem ' + porcentagemX +'% dos votos' + '\ncandidato Y tem' + porcentagemY +'% dos votos' + '\ntem ' + porcentagemBrancos + '% votos em branco' + '\ntem ' + porcentagemNulos+ '% votos nulos' )


