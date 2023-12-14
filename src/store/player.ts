import { defineStore } from "pinia";
import { reactive } from "vue";
import { useMapStore } from "./map";

export const usePlayerStore = defineStore("player", () => {
  const { isWall } = useMapStore();

  const player = reactive({
    x: 1,
    y: 1,
  });

  function movePlayerToUp() {
    if (isWall(player.x, player.y - 1)) return;
    player.y -= 1;
  }

  function movePlayerToDown() {
    if (isWall(player.x, player.y + 1)) return;
    player.y += 1;
  }

  function movePlayerToLeft() {
    if (isWall(player.x - 1, player.y)) return;
    player.x -= 1;
  }

  function movePlayerToRight() {
    if (isWall(player.x + 1, player.y)) return;
    player.x += 1;
  }

  return {
    player,
    movePlayerToUp,
    movePlayerToDown,
    movePlayerToLeft,
    movePlayerToRight,
  };
});
