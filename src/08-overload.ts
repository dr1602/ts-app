// ts-node 08-overload.ts
// Nico => [N,i,c,o] = string -> string[]
// [N,i,c,o] => Nico = string[] -> string

// este overload no se puede hacer en arrow functions
function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(); // string
  } else {
    return input.split(''); // string[]
  }
}

const rtaArray = parseStr('Tara');
// no entiende que es un array, para que sepa que es un array se debe hacer una asersión de tipos
console.log('rtaArray: ', 'Tara', rtaArray);
// rtaArray.reverse(); // aquí marca error porque no sabe si es string o array
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}

const rtaArrayDos = parseStr(['Tara']);
// rtaArray.toLowerCase(); // aquí marcaría error porque no sabe si es string o array
console.log('rtaArrayDos: ', ['Tara'], rtaArrayDos);
if (typeof rtaArrayDos === 'string') {
  rtaArrayDos.toLowerCase();
}
