import { defineStore } from "pinia";
import { reactive } from "vue";

export interface Crate {
  id: number;
  x: number;
  y: number;
}

export const useCrateStore = defineStore("crates", () => {
  const crates: Crate[] = reactive([
    {
      id: 0,
      x: 2,
      y: 2,
    },
    {
      id: 1,
      x: 3,
      y: 3,
    },
  ]);

  return {
    crates,
  };
});
