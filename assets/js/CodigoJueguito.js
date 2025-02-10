alert('Bienvenidos al juego del número secreto');
let eleccion = parseInt(prompt('Elige un número entre 1 y 10'));
let numeroSecreto = Math.floor(Math.random() * 10) + 1;

function Juego (eleccion, numeroSecreto) { 
  if (eleccion == numeroSecreto){
    return alert('Adivinaste')
  } else { return alert("Intenta otra vez")
  }}

  Juego (eleccion, numeroSecreto)
