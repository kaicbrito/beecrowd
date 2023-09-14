// Calcule o consumo médio de um automóvel sendo fornecidos a distância total percorrida (em Km) e o total de combustível gasto (em litros).

// ENTRADA
// O arquivo de entrada contém dois valores: um valor inteiro X representando a distância total percorrida (em Km), e um valor real Y representando o total de combustível gasto,
// com um dígito após o ponto decimal.

// SAÍDA
// Apresente o valor que representa o consumo médio do automóvel com 3 casas após a vírgula, seguido da mensagem "km/l".



// PSEUDO CODIGO: 
// 1. Ler X (distância total percorrida)
// 2. Ler Y (total de combustível gasto)
// 3. Calcular Consumo Médio:
//    a. Consumo Médio = X / Y
// 4. Formatar o resultado:
//    a. Consumo Médio Formatado = arredonde o Consumo Médio para 3 casas decimais
// 5. Imprimir o resultado formatado seguido de "km/l"


export function problem (lines) {
    let X = parseInt(lines.shift());
    let Y = parseFloat(lines.shift());
    let CONSUMO;

    CONSUMO = X / Y;
    console.log(`${CONSUMO.toFixed(3)}` + " km/l");
}