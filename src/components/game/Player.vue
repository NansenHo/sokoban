<template>
  <div>
    <img :src="keeperImg" alt="keeper" class="absolute" :style="position" />
  </div>
</template>

<script lang="ts" setup>
import keeperImg from "../../assets/keeper.png";
import { usePlayerStore } from "../../store/player";
import { useMove } from "./player";
import { usePosition } from "../../shared/usePosition";

useMove();

const { player } = usePlayerStore();
const { position } = usePosition(player);
</script>

<style lang="scss" scoped></style>
