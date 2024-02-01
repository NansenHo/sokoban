import { describe, it, expect, beforeEach } from "vitest";
import { useGameStore } from "../game";
import { useCrateStore } from "../crate";
import { useTargetStore } from "../target";
import { createPinia, setActivePinia } from "pinia";

beforeEach(() => {
  setActivePinia(createPinia());
});

describe("game", () => {
  it("should game completed", () => {
    const { crate, moveCrate } = addCrateTarget();

    moveCrate(crate, 1, 0);

    const { detectionGameCompleted, game } = useGameStore();
    detectionGameCompleted();

    expect(game.isGameCompleted).toBe(true);
  });

  it("should not game completed", () => {
    const { crate, moveCrate } = addCrateTarget();

    moveCrate(crate, 1, 0);
    moveCrate(crate, 1, 0);

    const { detectionGameCompleted, game } = useGameStore();
    detectionGameCompleted();

    expect(game.isGameCompleted).toBe(false);
  });
});

function addCrateTarget() {
  const { addCrate, createCrate, moveCrate } = useCrateStore();
  const crate = createCrate(1, 1);
  addCrate(crate);

  const { addTarget, createTarget } = useTargetStore();
  const target = createTarget(2, 1);
  addTarget(target);

  return { crate, moveCrate };
}
