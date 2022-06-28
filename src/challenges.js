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
  if (distCat1 > distCat2) {
    return 'cat2';
  }
  if (distCat2 > distCat1) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
  // seu código aqui
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let resultado = [];
  for (let index = 0; index < arrayNumeros.length; index += 1) {
    if (arrayNumeros[index] % 3 === 0 && arrayNumeros[index] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (arrayNumeros[index] % 3 === 0) {
      resultado.push('fizz');
    } else if (arrayNumeros[index] % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
  // seu código aqui
}

// Desafio 9
function encode(string) {
  let paraCod = string;
  let cod = ''
  for (let index = 0; index < paraCod.length; index += 1) {
    if (paraCod[index] === 'a') {
      cod += 1
    } else if (paraCod[index] === 'e') {
      cod += '2';
    } else if (paraCod[index] === 'i') {
      cod += '3';
    } else if (paraCod[index] === 'o') {
      cod += '4';
    } else if (paraCod[index] === 'u') {
      cod += '5';
    } else {
      cod += paraCod[index]
    }
  }
  return cod
  // seu código aqui
}

console.log(encode('hi there!'));

function decode(string) {
  let paraDecod = string;
  let decod = ''
  for (let index = 0; index < paraDecod.length; index += 1) {
    if (paraDecod[index] === '1') {
      decod += 'a'
    } else if (paraDecod[index] === '2') {
      decod += 'e';
    } else if (paraDecod[index] === '3') {
      decod += 'i';
    } else if (paraDecod[index] === '4') {
      decod += 'o';
    } else if (paraDecod[index] === '5') {
      decod += 'u';
    } else {
      decod += paraDecod[index]
    }
  }
  return decod
  // seu código aqui
}
console.log(decode('h3 th2r2!'))

// Desafio 10
function techList(arrayTech, nome) {
  let lista = [];
  if (arrayTech == 0 || nome.lenght == 0) {
    return 'Vazio!';
  }
  arrayTech.sort();
  for (let key of arrayTech) {
    lista.push({ tech: key, name: nome });
  }
  return lista;
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
