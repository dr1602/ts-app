import { fa } from '@faker-js/faker';

import { addProduct, products } from './products/product.service.js';

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
    categoryId: '13123',
  });
}

console.log(products);
