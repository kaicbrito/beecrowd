export function problem (lines){
    // Ler as três palavras
let palavra1 = (lines);
let palavra2 = (lines);
let palavra3 = (lines);

// Identificar o tipo de animal com base nas palavras-chave
if (palavra1 === "vertebrado") {
    if (palavra2 === "ave") {
        if (palavra3 === "carnivoro") {
            console.log("aguia");
        } else if (palavra3 === "onivoro") {
            console.log("pomba");
        }
    } else if (palavra2 === "mamifero") {
        if (palavra3 === "onivoro") {
            console.log("homem");
        } else if (palavra3 === "herbivoro") {
            console.log("vaca");
        }
    }
} else if (palavra1 === "invertebrado") {
    if (palavra2 === "inseto") {
        if (palavra3 === "hematofago") {
            console.log("pulga");
        } else if (palavra3 === "herbivoro") {
            console.log("lagarta");
        }
    } else if (palavra2 === "anelideo") {
        if (palavra3 === "hematofago") {
            console.log("sanguessuga");
        } else if (palavra3 === "onivoro") {
            console.log("minhoca");
        }
    }
}
}