import { Product } from './product.model.js';

export const product: Product[] = [];

export const addProduct = (data: Product) => {
  product.push(data);
};
