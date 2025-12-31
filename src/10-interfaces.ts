// type puede definir tipos primitivos y en una sola línea

type Sizes = 'S' | 'M' | 'L' | 'XL';
type userId = string | number;

// interface no permite crear tipados en una sola línea

interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

const product: Product[] = [];

product.push({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  stock: 90,
});

const addProduct = (data: Product) => {
  product.push(data);
};
