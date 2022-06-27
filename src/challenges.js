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
  return (base * heigth) / 2;
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
  return nomes[nomes.length - 1] + ', ' + nomes[0];
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
  // seu código aqui
}

// Desafio 6

function highestCount(numeros) {
  let numeroMaior = Math.max.apply(null, numeros);
  let cont = 0;

  for (index = 0; index < numeros.length; index += 1) {
      if (numeroMaior === numeros[index]) {
      cont = cont + 1;
    }
  }
  return cont;
}
// seu código aqui

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
 const distCat1 = Math.abs(cat1 - mouse);
 const distCat2 = Math.abs(cat2 - mouse);
 if(distCat1 > distCat2){
  return 'cat2';
 }
 if(distCat2 > distCat1){
  return 'cat1'
 }
 return 'os gatos trombam e o rato foge'
  // seu código aqui
}
console.log(catAndMouse(0, -3, 4));
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
