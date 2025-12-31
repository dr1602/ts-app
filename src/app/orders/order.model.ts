import { Product } from '../products/product.model.js';
import { User } from '../users/user.model.js';

interface Order {
  id: string | number;
  createdAt: Date;
  products: Product;
  user: User;
}
