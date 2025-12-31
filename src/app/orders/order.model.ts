import { Product } from '../products/product.model.js';
import { User } from '../users/user.model.js';
import { BaseModel } from '../base.model.js';

export interface Order extends BaseModel {
  products: Product;
  user: User;
}
