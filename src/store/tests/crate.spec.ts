import { describe, it, expect, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { useCrateStore } from "../crate";
import { useTargetStore } from "../target";

beforeEach(() => {
  setActivePinia(createPinia());
});

describe("crate", () => {
  it("should create a crate", () => {
    const { crates, addCrate, createCrate } = useCrateStore();
    crates.length = 0;

    addCrate(createCrate(1, 1));

    expect(crates.length).toBe(1);
  });

  it("shift in", () => {
    const { addCrate, createCrate, moveCrate } = useCrateStore();
    const crate = createCrate(1, 1);
    addCrate(crate);

    const { addTarget, createTarget } = useTargetStore();
    const target = createTarget(2, 1);
    addTarget(target);

    moveCrate(crate, 1, 0);

    expect(crate.onTarget).toBe(true);
  });

  it("shift out", () => {
    const { addCrate, createCrate, moveCrate } = useCrateStore();
    const crate = createCrate(1, 1);
    addCrate(crate);

    const { addTarget, createTarget } = useTargetStore();
    const target = createTarget(2, 1);
    addTarget(target);

    moveCrate(crate, 1, 0);
    moveCrate(crate, 1, 0);

    expect(crate.onTarget).toBe(false);
  });
});
