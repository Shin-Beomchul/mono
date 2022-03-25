export interface Product {
  id: string;
  name: string;
  cost: number;
  icon: string;
}

export interface ProductState {
  products: Product[];
}
