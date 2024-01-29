<template>
  <div>
    <img :src="targetImg" alt="target" class="absolute" :style="position" />
  </div>
</template>

<script lang="ts" setup>
import targetImg from "../../assets/target.png";
import { usePosition } from "../../shared/usePosition";
import { Target } from "../../store/target";

interface Props {
  target: Target;
}

const { target } = defineProps<Props>();

const { position } = usePosition(target);
</script>

<style lang="scss" scoped></style>
