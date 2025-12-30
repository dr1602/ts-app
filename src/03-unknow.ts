// Unknown te da validaciones de datos aunque puede aceptar inicialmente cualquiera

let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = 1;
anyVar = 'string';
anyVar = {};
anyVar = [];

let isNew: boolean = anyVar;
console.log(isNew);

anyVar.doSomething();
anyVar.touppercase();

let unknownVar: unknown;
unknownVar = true;
unknownVar = undefined;
unknownVar = 1;
unknownVar = 'string';
unknownVar = {};
unknownVar = [];

// unknownVar.doSomething();

if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
}

// para prevenir errores
const parse = (str: string): unknown => {
  return JSON.parse(str);
};

if (typeof unknownVar === 'boolean') {
  let isNewV2: boolean = unknownVar;
  console.log(isNewV2);
}
