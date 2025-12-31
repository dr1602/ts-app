// ts-node ts-basico/src/05-optionals.ts

export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    stock: stock || 10,
    isNew: isNew || true,
  };
};

// 0 === false, '' === false, false === false

const p1 = createProduct(1, true, 12);
console.log(p1);

const p2 = createProduct(1);
console.log(p2);

const p3 = createProduct(1, false, 0);
console.log(p3);

export const createNewProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    stock: stock ?? 10, // ?? nullish valida que no sea undefined o null
    isNew: isNew ?? true,
  };
};

const p4 = createNewProduct(1, true, 12);
console.log(p4);

const p5 = createNewProduct(1);
console.log(p5);

const p6 = createNewProduct(1, false, 0);
console.log(p6);
