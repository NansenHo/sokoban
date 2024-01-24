import { describe, it, expect, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { useCrateStore } from "../crate";

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
});
