// Desafio 1
function compareTrue(girafa, elefante) {
  if (girafa === true && elefante === true) {
    return true;
  } else {
    return false;
  }
  // seu código aqui
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth / 2);
  // seu código aqui
}

// Desafio 3
function splitSentence(frase) {
  let array = frase.split(' ');
  return array;
  // seu código aqui
}

// Desafio 4

function concatName(nomes) {
  return nomes[nomes.length-1] + ', ' + nomes[0];
}
  // seu código aqui

console.log(concatName(['foguete', 'não', 'tem', 'ré']));
// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
