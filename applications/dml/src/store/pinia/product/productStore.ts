import { MockService } from "@god/mock-service/lib";
import { defineStore } from "pinia";
import { Product, ProductState } from "./productStore-types";
export const useProductStore = defineStore({
  id: "products",

  state: (): ProductState => ({
    products: [] as Product[],
  }),

  getters: {
    list(): Product[] {
      return this.products.map((product) => {
        product.name = product.name + " - m";
        return product;
      });
    },
  },

  actions: {
    async fetchProducts(): Promise<boolean> {
      await new MockService().realHttpLatencyMock();
      for (let i = 0; i < 10; i++) {
        //1
        this.products.push({
          id: "id" + i,
          name: "name" + i,
          cost: i,
          icon: "icon" + i,
        });
      }
      return true; //2
    },
    asyncfetchProducts(): boolean {
      new MockService().realHttpLatencyMock().then(() => {
        //2
        for (let i = 0; i < 10; i++) {
          this.products.push({
            id: "id" + i,
            name: "name" + i,
            cost: i,
            icon: "icon" + i,
          });
        }
      });
      return true; // 1
    },
  },
});
