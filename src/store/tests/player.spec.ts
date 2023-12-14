import { createPinia, setActivePinia } from "pinia";
import { describe, it, expect, beforeEach } from "vitest";
import { usePlayerStore } from "../player";
import { useMapStore } from "../map";

beforeEach(() => {
  setActivePinia(createPinia());
});

describe("player", () => {
  describe("normal move", () => {
    beforeEach(() => {
      const { setupMap } = useMapStore();
      setupMap([
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2],
      ]);
    });

    it("up", () => {
      const { player, movePlayerToUp } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToUp();

      expect(player.y).toBe(0);
    });

    it("down", () => {
      const { player, movePlayerToDown } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToDown();

      expect(player.y).toBe(2);
    });

    it("left", () => {
      const { player, movePlayerToLeft } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToLeft();

      expect(player.x).toBe(0);
    });

    it("right", () => {
      const { player, movePlayerToRight } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToRight();

      expect(player.x).toBe(2);
    });
  });

  describe("hit the wall", () => {
    beforeEach(() => {
      const { setupMap } = useMapStore();
      setupMap([
        [1, 1, 1],
        [1, 2, 1],
        [1, 1, 1],
      ]);
    });

    it("up", () => {
      const { player, movePlayerToUp } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToUp();

      expect(player.y).toBe(1);
    });

    it("down", () => {
      const { player, movePlayerToDown } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToDown();

      expect(player.y).toBe(1);
    });

    it("left", () => {
      const { player, movePlayerToLeft } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToLeft();

      expect(player.x).toBe(1);
    });

    it("right", () => {
      const { player, movePlayerToRight } = usePlayerStore();
      player.x = 1;
      player.y = 1;

      movePlayerToRight();

      expect(player.x).toBe(1);
    });
  });
});
