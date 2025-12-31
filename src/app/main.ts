import { addProduct } from './products/product.service.js';

addProduct({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  updateddAt: new Date(),
  stock: 90,
  category: {
    id: '12',
    name: 'c1',
    createdAt: new Date(),
    updateddAt: new Date(),
  },
});
