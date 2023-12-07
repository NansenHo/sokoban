<script setup lang="ts">
import { useMapStore } from "./store/map";

const store = useMapStore();

function increaseAge() {
  store.$patch({
    count: store.count++,
  });
}
</script>

<template>
  <div class="text-black">sokoban {{ store.count }}</div>

  <button class="bg-red-500" @click="increaseAge">increase age</button>
</template>

<style scoped>
</style>
