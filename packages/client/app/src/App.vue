<template>
  <div class="w-screen h-screen bg-white dark:bg-gray-600 border-2">
    <div class="flex flex-row h-full">
      <div class="flex w-1/4 border-r-2">
        <WidgetList :list="list"/>
      </div>
      <div class="flex w-3/4 flex-col h-full">
        <div class="flex h-2/3 border-b-2">
          <button @click="exports()">Export</button>
          <div class="w-full flex justify-center items-center">
            <Animation class="h-full justify-center self-center flex"/>
          </div>
        </div>
        <div class="flex h-1/3 overflow-x-scroll">
          <TimeLine :duration="120" :division="50" class="mx-12"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import WidgetList from './components/WidgetList.vue'
import TimeLine from './components/TimeLine.vue'
import { usePlayer } from '@vue-motion/core'
/** @ts-ignore */
import Animation from 'virtual:user-main'
import { exportToVideo } from './export-front'

onMounted(() => {
  const player = usePlayer()
  player.play()
})

function exports() {
  exportToVideo('#motion', usePlayer(), 2, 90)
}

const list = ref([
  {
    name: 'Widget 1',
    icon: '',
    items: [
      {
        name: 'Widget 1',
        icon: ''
      }, {
        name: 'Widget 1',
        icon: ''
      }, {
        name: 'Widget 1',
        icon: ''
      }, {
        name: 'Widget 1',
        icon: ''
      },
    ]
  }
])
</script>