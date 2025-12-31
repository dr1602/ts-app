export const createNewProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10
) => {
  return {
    id,
    stock: stock ?? 10, // ?? nullish valida que no sea undefined o null
    isNew: isNew ?? true,
  };
};

const p1 = createNewProduct(1, true, 12);
console.log(p1);

const p2 = createNewProduct(1);
console.log(p2);

const p3 = createNewProduct(1, false, 0);
console.log(p3);

const p4 = createNewProduct(2, true, 100);
console.log(p4);

const p5 = createNewProduct(3, false);
console.log(p5);
