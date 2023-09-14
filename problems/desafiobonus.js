// Descrição do Desafio:

// Escreva um programa que leia o código de um produto, a quantidade desse produto vendida e o preço unitário do produto. Em seguida, 
// calcule o valor total da compra desse produto e mostre o código do produto e o valor total, com duas casas decimais.

// Entrada: =>
// O arquivo de entrada contém três valores: um código de produto inteiro, a quantidade vendida desse produto (um número inteiro) e o preço unitário do produto 
// (um número com duas casas decimais).

// Saída: =>
// Imprima o código do produto e o valor total da compra, conforme o exemplo fornecido, com um espaço em branco antes e depois da igualdade. 
// O resultado final deve ter a aparência de "Código = ValorTotal" com duas casas decimais no valor total.

// Exemplo de Entrada: =>
// 1234
// 5
// 10.50

// Exemplo de Saída: =>
// Código = 52.50


export function problem (lines){
    let quantidaDeProduto = parseInt(lines.shift());
    let precoUnitario = parseFloat(lines.shift());

    let valorTotal = quantidaDeProduto * precoUnitario;

    console.log(`Código = ${valorTotal.toFixed(2)}`);

}
