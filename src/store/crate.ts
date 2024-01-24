import { defineStore } from "pinia";
import { reactive } from "vue";
import { Position } from "../shared/usePosition";

export const useCrateStore = defineStore("crates", () => {
  const crates: Position[] = reactive([]);

  function addCrate(crate: Position) {
    crates.push(crate);
  }

  function createCrate(x: number, y: number): Position {
    return {
      x,
      y,
    };
  }

  function findCrate(position: Position) {
    return crates.find((c) => {
      return c.x === position.x && c.y === position.y;
    });
  }

  addCrate(createCrate(2, 2));

  return {
    crates,
    addCrate,
    createCrate,
    findCrate,
  };
});
