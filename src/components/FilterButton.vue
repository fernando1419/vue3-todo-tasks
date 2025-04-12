<script setup lang="ts">
import { TaskFilter } from '@/types';

const props = defineProps<{
   filter: TaskFilter;
   activeFilter: TaskFilter;
}>();

const emits = defineEmits<{
   setFilter: [filter: TaskFilter];
}>();
</script>

<template>
   <button class="secondary" :class="{ contrast: props.activeFilter === props.filter }"
      @click="emits('setFilter', props.filter)"> {{ props.filter }}
   </button>
</template>

<style scoped>
button {
   text-transform: capitalize;
}
</style>
