import { defineStore } from "pinia";
import { reactive } from "vue";
import { useMapStore } from "./map";
import { useTargetStore } from "./target";

export interface Crate {
  x: number;
  y: number;
  onTarget: boolean;
}

export const useCrateStore = defineStore("crates", () => {
  const crates: Crate[] = reactive([]);

  function addCrate(crate: Crate) {
    crates.push(crate);
  }

  function createCrate(x: number, y: number): Crate {
    return {
      x,
      y,
      onTarget: false,
    };
  }

  function findCrate(x: number, y: number) {
    return crates.find((crate) => {
      return crate.x === x && crate.y === y;
    });
  }

  function moveCrate(crate: Crate, dx: number, dy: number): boolean {
    const { isWall } = useMapStore();
    const position: [number, number] = [crate.x + dx, crate.y + dy];

    if (isWall(...position)) return false;
    if (findCrate(...position)) return false;

    crate.x += dx;
    crate.y += dy;

    detectionTarget(crate);

    return true;
  }

  function detectionTarget(crate: Crate) {
    const { findTarget } = useTargetStore();
    const target = findTarget(crate.x, crate.y);
    crate.onTarget = !!target;
  }

  return {
    crates,
    addCrate,
    createCrate,
    findCrate,
    moveCrate,
  };
});
