import { Category } from '../categories/category.model.js';

export type Sizes = 'S' | 'M' | 'L' | 'XL';
export type idType = string | number;

export interface Product {
  id: idType;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
  category: Category;
}
