const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5, 6, 7];

// numbers.push(1);
// numbers.pop();
// numbers.unshift(1);

// Sólo permite métodos que no mutan el array original

numbers.filter(() => {});
numbers.reduce(() => 0);
numbers.map(() => {});
