import { defineStore } from "pinia";
import { reactive } from "vue";
import { Position } from "../shared/usePosition";
import { useMapStore } from "./map";

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

  function findCrate(x: number, y: number) {
    return crates.find((crate) => {
      return crate.x === x && crate.y === y;
    });
  }

  function moveCrate(crate: Position, dx: number, dy: number): boolean {
    const { isWall } = useMapStore();
    const position: [number, number] = [crate.x + dx, crate.y + dy];

    if (isWall(...position)) return false;
    if (findCrate(...position)) return false;

    crate.x += dx;
    crate.y += dy;

    return true;
  }

  addCrate(createCrate(2, 2));
  addCrate(createCrate(3, 2));

  return {
    crates,
    addCrate,
    createCrate,
    findCrate,
    moveCrate,
  };
});
