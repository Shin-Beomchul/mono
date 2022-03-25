export interface Purchase {
  productId: string;
  quantity: number;
}

export interface CartState {
  contents: Record<string, Purchase>;
}
