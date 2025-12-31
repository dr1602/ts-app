import { fa } from '@faker-js/faker';

import {
  addProduct,
  findProducts,
  products,
  updateProduct,
} from './products/product.service.js';

for (let index = 0; index < 12; index++) {
  addProduct({
    description: String(fa.commerce?.product_description),
    image: String(fa.animal?.type),
    color: String(fa.color?.human),
    price: 3000,
    isNew: true,
    tags: ['', ''],
    title: String(fa.commerce?.product_name),
    stock: Number(fa.phone_number),
    categoryId: 13123,
  });
}

console.log(products);
const firstProduct = products[0];

updateProduct(Number(firstProduct?.id), {
  title: 'New title',
  stock: 80,
  categoryId: 2134123,
});

findProducts({
  stock: 10,
  color: 'red',
  createdAt: new Date(),
  isNew: true,
  tags: ['as', 'as'],
});
