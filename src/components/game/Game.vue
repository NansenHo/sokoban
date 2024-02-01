<template>
  <Map></Map>
  <template v-for="target in targets">
    <Target :target="target"></Target>
  </template>
  <Player></Player>
  <template v-for="crate in crates">
    <Crate :crate="crate"></Crate>
  </template>
  <button v-if="game.isGameCompleted">下一关</button>
</template>

<script setup lang="ts">
import Map from "./Map.vue";
import Player from "./Player.vue";
import Crate from "./Crate.vue";
import Target from "./Target.vue";
import { useCrateStore } from "../../store/crate";
import { useTargetStore } from "../../store/target";
import { useGameStore } from "../../store/game";

const { crates, addCrate, createCrate } = useCrateStore();
const { targets, addTarget, createTarget } = useTargetStore();
const { game } = useGameStore();

addCrate(createCrate(2, 2));
addCrate(createCrate(3, 2));

addTarget(createTarget(4, 2));
addTarget(createTarget(4, 1));
</script>

<style lang="sass" scoped></style>
