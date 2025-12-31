import { Product } from './product.model.js';

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  // data.id = '392552';
  // data.createdAt = new Date(1998, 1, 1);
  products.push(data);
};

export const updateProduct = (
  id: string,
  changes: Partial<Product>
): Product => {
  const index = products.findIndex((item) => item.id === id);

  // 1. Validamos que el producto exista para evitar errores de "undefined"
  if (index === -1) {
    throw new Error('Product not found');
  }

  const prevData = products[index];

  // 2. Creamos el nuevo objeto fusionando los anteriores
  // Usamos "as Product" para confirmarle a TS que el resultado final es válido
  const updatedProduct = {
    ...prevData,
    ...changes,
  } as Product;

  products[index] = updatedProduct;

  return updatedProduct;
};

export const deleteProduct = (id: string) => {
  const index = products.findIndex((item) => item.id === id);
  if (index !== -1) {
    products.splice(index, 1);
  }
};

export const getProduct = (id: string): Product | undefined => {
  return products.find((item) => item.id === id);
};

export const findProducts = (query: Partial<Product>): Product[] => {
  return products.filter((item) => {
    return Object.entries(query).every(([key, value]) => {
      return item[key as keyof Product] === value;
    });
  });
};
