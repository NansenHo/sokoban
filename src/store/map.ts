import { defineStore } from "pinia";

export enum mapElement {
  MALL = 1,
  FLOOR = 2,
}

type Map = mapElement[][];

export const useMapStore = defineStore("map", () => {
  const map = [
    [1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1],
  ];

  function isWall(x: number, y: number): boolean {
    return map[x][y] === mapElement.MALL;
  }

  function setupMap(customMap: Map): Map {
    return map.splice(0, map.length, ...customMap);
  }

  return {
    map,
    isWall,
    setupMap,
  };
});
