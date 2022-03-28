import { MockService } from "@god/mock-service/lib";
import { defineStore } from "pinia";
import { useAppStore } from "../app/appStore";
import getters from "./getters";
import { Product, ProductState } from "./productStore-types";
export const useProductStore = defineStore({
  id: "products",

  state: (): ProductState => ({
    products: [] as Product[],
  }),
  actions: {
    fetchProducts(): boolean {
      const appStore = useAppStore();
      console.log("Access Root State ", appStore.appConfig.isHttpCache);
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
    async syncfetchProducts(): Promise<boolean> {
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
  },
  getters: getters,
});
