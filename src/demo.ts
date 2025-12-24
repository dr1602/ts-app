// Ejecutar con npx tsc
// Transpilar constantemente con npx tsc --watch

type UserId = string | number;
let userId: UserId;

userId = 'string';
userId = 1;

console.log('Hoola! ' + userId); // 👈

//  ts-node src/demo.ts
