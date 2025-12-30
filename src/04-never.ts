// Para funciones que nunca temrinan
// node --loader ts-node/esm src/04-never.ts
const withoutEnd = () => {
  while (true) {
    console.log('nunca para de aprender');
  }
};

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'es un string';
  } else if (typeof Array.isArray(input)) {
    return 'es un array';
  }

  return fail('no match');
};

console.log(example('Hola'));
console.log(example([1, 2, 3, 4, 5, 6]));
console.log(example(true));
console.log(example(1));
console.log(example('Hola después del fail'));
