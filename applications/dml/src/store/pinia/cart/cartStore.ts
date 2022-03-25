import { defineStore } from "pinia";
import { useProductStore } from "../product/productStore";
import { Product } from "../product/productStore-types";
import { CartState, Purchase } from "./cartStore-types";

export const useCartStore = defineStore({
  id: "cart",

  state: (): CartState => ({
    contents: {} as Record<string, Purchase>,
  }),

  actions: {
    add(product: Product) {
      if (this.contents[product.id]) {
        this.contents[product.id].quantity += 1;
      } else {
        this.contents[product.id] = {
          productId: product.id,
          quantity: 1,
        } as Purchase;
      }
    },

    remove(product: Product) {
      if (
        !this.contents[product.id] ||
        this.contents[product.id].quantity === 0
      ) {
        return;
      }

      this.contents[product.id].quantity -= 1;
    },
  },

  getters: {
    total(): number {
      const products = useProductStore();
      return Object.keys(this.contents).reduce((acc, id) => {
        return acc + products[id].cost * this.contents[id].quantity;
      }, 0);
    },
  },
});
