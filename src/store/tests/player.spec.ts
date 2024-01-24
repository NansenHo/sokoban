import { createPinia, setActivePinia } from "pinia";
import { describe, it, expect, beforeEach } from "vitest";
import { usePlayerStore } from "../player";
import { useMapStore } from "../map";
import { useCrateStore } from "../crate";
import { Position } from "../../shared/usePosition";

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

  describe("push crate", () => {
    let crate: Position;

    beforeEach(() => {
      const { setupMap } = useMapStore();
      const { addCrate, createCrate } = useCrateStore();

      setupMap([
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2],
      ]);

      crate = createCrate(1, 1);
      addCrate(crate);
    });

    it("up", () => {
      const { player, movePlayerToUp } = usePlayerStore();

      player.x = 1;
      player.y = 2;

      movePlayerToUp();

      expect(crate.y).toBe(0);
    });

    it("down", () => {
      const { player, movePlayerToDown } = usePlayerStore();

      player.x = 1;
      player.y = 0;

      movePlayerToDown();

      expect(crate.y).toBe(2);
    });

    it("left", () => {
      const { player, movePlayerToLeft } = usePlayerStore();

      player.x = 2;
      player.y = 1;

      movePlayerToLeft();

      expect(crate.x).toBe(0);
    });

    it("right", () => {
      const { player, movePlayerToRight } = usePlayerStore();

      player.x = 0;
      player.y = 1;

      movePlayerToRight();

      expect(crate.x).toBe(2);
    });
  });

  describe("fix bugs", () => {
    it("should hit the wall", () => {
      const { setupMap } = useMapStore();
      setupMap([
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      ]);

      const { player, movePlayerToDown } = usePlayerStore();

      player.x = 1;
      player.y = 1;

      movePlayerToDown();

      expect(player.y).toBe(1);
    });

    it("move right", () => {
      const { setupMap } = useMapStore();
      setupMap([
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      ]);

      const { player, movePlayerToRight } = usePlayerStore();

      player.x = 2;
      player.y = 1;

      movePlayerToRight();

      expect(player.x).toBe(3);
    });
  });
});
