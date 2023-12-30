<template>
  <Map></Map>
  <Player></Player>
  <template v-for="crate in crates" :key="crate.id">
    <Crate :crate="crate"></Crate>
  </template>
</template>

<script setup lang="ts">
import Map from "./Map.vue";
import Player from "./Player.vue";
import Crate from "./Crate.vue";
import { useCrateStore } from "../../store/crate";

const { crates } = useCrateStore();
</script>

<style lang="sass" scoped></style>
