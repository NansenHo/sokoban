<template>
  <div>
    <img :src="crateImg" alt="keeper" class="absolute" :style="position" />
  </div>
</template>

<script lang="ts" setup>
import crateImg from "../../assets/crate.png";
import { usePosition } from "../../shared/usePosition";
import { Crate } from "../../store/crate";

interface Props {
  crate: Crate;
}

const { crate } = defineProps<Props>();

const { position } = usePosition(crate);
</script>

<style lang="scss" scoped></style>
