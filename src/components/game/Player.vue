<template>
  <div>
    <img :src="keeperImg" alt="keeper" class="absolute" :style="position" />
  </div>
</template>

<script lang="ts" setup>
import keeperImg from "../../assets/keeper.png";
import { useMove, usePosition } from "./player";

useMove();
const { position } = usePosition();
</script>

<style lang="scss" scoped></style>
