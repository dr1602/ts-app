// ts-node 09-overload-dos.ts
// Nico => [N,i,c,o] = string -> string[]
// [N,i,c,o] => Nico = string[] -> string

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

// este overload no se puede hacer en arrow functions
export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(); // string
  } else if (typeof input === 'string') {
    return input.split(''); // string[]
  } else if (typeof input === 'number') {
    return true; // boolean
  }
}

const rtaArray = parseStr('Tara');
// no entiende que es un array, para que sepa que es un array se debe hacer una asersión de tipos
console.log('rtaArray: ', 'Tara', rtaArray);
rtaArray.reverse();

const rtaArrayDos = parseStr(['Tara']);
rtaArrayDos.toLowerCase(); // aquí marcaría error porque no sabe si es string o array
console.log('rtaArrayDos: ', ['Tara'], rtaArrayDos);

const rtaArrayTres = parseStr(1);
console.log('rtaArrayTres: ', ['Tara'], rtaArrayTres);
