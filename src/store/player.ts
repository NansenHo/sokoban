import { defineStore } from "pinia";
import { reactive } from "vue";
import { useMapStore } from "./map";
import { useCrateStore } from "./crate";

export const usePlayerStore = defineStore("player", () => {
  const { isWall } = useMapStore();

  const player = reactive({
    x: 1,
    y: 1,
  });

  function _move(dx: number, dy: number) {
    if (isWall(player.x + dx, player.y + dy)) return;

    const { findCrate } = useCrateStore();
    const crate = findCrate({ x: player.x + dx, y: player.y + dy });

    if (crate) {
      crate.x += dx;
      crate.y += dy;
    }

    player.x += dx;
    player.y += dy;
  }

  function movePlayerToUp() {
    _move(0, -1);
  }

  function movePlayerToDown() {
    _move(0, 1);
  }

  function movePlayerToLeft() {
    _move(-1, 0);
  }

  function movePlayerToRight() {
    _move(1, 0);
  }

  return {
    player,
    movePlayerToUp,
    movePlayerToDown,
    movePlayerToLeft,
    movePlayerToRight,
  };
});
