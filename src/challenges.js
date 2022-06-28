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
  let codificando = string.split('');
  for (let index in string) {
    if (codificando[index] === 'a'){
      codificando[index] = 1;
    } else if (codificando[index] === 'e') {
      codificando[index] = 2;
    } else if (codificando[index] === 'i') {
      codificando[index] = 3;
    } else if (codificando[index] === 'o') {
      codificando[index] = 4;
    } else if (codificando[index] === 'u') {
      codificando = 5;
    }
  }
  return codificando.join('')
  // seu código aqui
}
function decode(string) {
  let decodificando = string.split('');
  for (let index in string) {
    if (decodificando[index] === '1'){
      decodificando[index] = 'a';
    } else if (decodificando[index] === '2') {
      decodificando[index] = 'e';
    } else if (decodificando[index] === '3') {
      decodificando[index] = 'i';
    } else if (decodificando[index] === '4') {
      decodificando[index] = 'o';
    } else if (decodificando[index] === '5') {
      decodificando = 'u';
    }
  }
  return decodificando.join('')
  // seu código aqui
}

// Desafio 10
function techList(arrayTech, nome) {
  let lista = [];
  if (arrayTech == 0 || nome.lenght == 0) {
    return 'Vazio!';
  }
  arrayTech.sort();
  for (key of arrayTech) {
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
