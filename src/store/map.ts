import { defineStore } from "pinia";

export const useMapStore = defineStore("map", () => {
  const count = 25;
  return {
    count,
  };
});
