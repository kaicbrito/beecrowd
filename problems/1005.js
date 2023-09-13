export function problem (lines){
    
    let notaA = parseFloat(lines.shift());
    let notaB = parseFloat(lines.shift());
    let media = (notaA * 3.5 + notaB * 7.5) / 11.0;
console.log(`MEDIA =  ${media.toFixed(5)}`)

}