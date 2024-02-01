import { defineStore } from "pinia";
import { reactive } from "vue";
import { useCrateStore } from "./crate";

interface Game {
  isGameCompleted: boolean;
}

export const useGameStore = defineStore("game", () => {
  const game = reactive<Game>({
    isGameCompleted: false,
  });

  const { crates } = useCrateStore();

  console.log(crates);
  function detectionGameCompleted() {
    game.isGameCompleted = crates.every((crate) => crate.onTarget === true);
    console.log(game.isGameCompleted);
  }

  return {
    game,
    detectionGameCompleted,
  };
});
