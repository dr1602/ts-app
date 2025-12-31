import { Category } from '../categories/category.model.js';
import { BaseModel } from '../base.model.js';

export type Sizes = 'S' | 'M' | 'L' | 'XL';

// Interface sí se extiende, un type no
export interface Product extends BaseModel {
  title: string;
  image: string;
  description: string;
  stock: number;
  category: Category;
  color: string;
  price: number;
  size?: Sizes;
  isNew: boolean;
  tags: string[];
}
