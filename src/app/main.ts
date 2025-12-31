import { fa } from '@faker-js/faker';

import { addProduct, products } from './products/product.service.js';

for (let index = 0; index < 12; index++) {
  addProduct({
    id: String(fa.color?.space),
    description: String(fa.commerce?.product_description),
    image: String(fa.animal?.type),
    color: String(fa.color?.human),
    price: 3000,
    isNew: true,
    tags: ['', ''],
    title: String(fa.commerce?.product_name),
    createdAt: fa.date?.month as unknown as Date,
    updateddAt: fa.date?.month as unknown as Date,
    stock: Number(fa.phone_number),
    category: {
      id: String(fa.color?.space),
      name: String(fa.commerce?.product_name),
      createdAt: fa.date?.month as unknown as Date,
      updateddAt: fa.date?.month as unknown as Date,
    },
  });
}

console.log(products);
