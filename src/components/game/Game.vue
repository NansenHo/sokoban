<template>
  <Map></Map>
  <template v-for="target in targets">
    <Target :target="target"></Target>
  </template>
  <Player></Player>
  <template v-for="crate in crates">
    <Crate :crate="crate"></Crate>
  </template>
</template>

<script setup lang="ts">
import Map from "./Map.vue";
import Player from "./Player.vue";
import Crate from "./Crate.vue";
import Target from "./Target.vue";
import { useCrateStore } from "../../store/crate";
import { useTargetStore } from "../../store/target";

const { crates } = useCrateStore();
const { targets } = useTargetStore();
</script>

<style lang="sass" scoped></style>
