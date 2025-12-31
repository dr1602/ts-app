import { Product } from './product.model.js';

export const product: Product[] = [];

export const addProduct = (data: Product) => {
  // data.id = '392552';
  // data.createdAt = new Date(1998, 1, 1);
  product.push(data);
};
