export function problem (lines){

// Ler a hora de início e a hora de fim do jogo
const horaInicio = parseInt(lines.shift());
const horaFim = parseInt(lines.shift());


let duracao;

if (horaInicio < horaFim) {
  duracao = horaFim - horaInicio;
} else {
  duracao = 24 - horaInicio + horaFim;
}


if (duracao < 1) {
  duracao += 24;
} else if (duracao > 24) {
  duracao = 24;
}

console.log(`O jogo durou ${duracao} hora(s)`);
    
}