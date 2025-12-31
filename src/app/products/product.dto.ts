import { Product } from './product.model.js';

export interface CreateProductDto
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: Product['id'];
}

export type example = Pick<Product, 'color' | 'description'>;

export interface UpdateProductDto extends Partial<CreateProductDto> {}

export type exampleDos = Required<Product>;

export interface FindProductDto extends Readonly<Partial<Product>> {}

export type exampleTres = Readonly<Product>;
