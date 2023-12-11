<template>
  <div>
    <div v-for="row in map" class="flex">
      <div v-for="item in row">
        <template v-if="item === mapElement.MALL">
          <img :src=wallImg alt="">
        </template>
        <template v-if="item === mapElement.FLOOR">
          <img :src=floorImg alt="">
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import floorImg from '../../assets/floor.png';
import wallImg from '../../assets/wall.png';
import {useMapStore, mapElement} from '../../store/map'

const  { map } =  useMapStore();
</script>

<style scoped lang="scss">
</style>