import { Product } from './product.model.js';
import {
  CreateProductDto,
  UpdateProductDto,
  FindProductDto,
} from './product.dto.js';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: 1241543,
    createdAt: new Date(2025, 12, 30),
    updatedAt: new Date(2025, 12, 30),
    category: {
      id: data.categoryId,
      name: 'Nombre',
      createdAt: new Date(2025, 12, 30),
      updatedAt: new Date(2025, 12, 30),
    },
  };
  products.push(newProduct);
  return newProduct;
};

export const updateProduct = (
  id: Product['id'],
  changes: UpdateProductDto
): Product => {
  const index = products.findIndex((item) => item.id === id);
  const prevData = products[index];

  products[index] = {
    ...prevData,
    ...changes,
  } as Product;

  return products[index];
};

export const findProducts = (dto: FindProductDto): Product[] => {
  // dto.color = 'blue';
  return products;
};

// export const updateProduct = (
//   id: string,
//   changes: Partial<Product>
// ): Product => {
//   const index = products.findIndex((item) => item.id === id);

//   // 1. Validamos que el producto exista para evitar errores de "undefined"
//   if (index === -1) {
//     throw new Error('Product not found');
//   }

//   const prevData = products[index];

//   // 2. Creamos el nuevo objeto fusionando los anteriores
//   // Usamos "as Product" para confirmarle a TS que el resultado final es válido
//   const updatedProduct = {
//     ...prevData,
//     ...changes,
//   } as Product;

//   products[index] = updatedProduct;

//   return updatedProduct;
// };

export const deleteProduct = (id: Product['id']) => {
  const index = products.findIndex((item) => item.id === id);
  if (index !== -1) {
    products.splice(index, 1);
  }
};

export const getProduct = (id: Product['id']): Product | undefined => {
  return products.find((item) => item.id === id);
};

// export const findProducts = (query: Partial<Product>): Product[] => {
//   return products.filter((item) => {
//     return Object.entries(query).every(([key, value]) => {
//       return item[key as keyof Product] === value;
//     });
//   });
// };
