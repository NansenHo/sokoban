import { defineStore } from "pinia";
import { reactive } from "vue";

export interface Target {
  x: number;
  y: number;
}

export const useTargetStore = defineStore("targets", () => {
  const targets = reactive<Target[]>([]);

  function createTarget(x: number, y: number): Target {
    return {
      x,
      y,
    };
  }

  function addTarget(target: Target) {
    targets.push(target);
  }

  function findTarget(x: number, y: number) {
    return targets.find((target) => {
      return target.x === x && target.y === y;
    });
  }

  return {
    targets,
    createTarget,
    addTarget,
    findTarget,
  };
});
