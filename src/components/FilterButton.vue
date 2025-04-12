<script setup lang="ts">
import { useTasksStore } from "@/stores/tasksStore";
import { TaskFilter } from '@/types';
const store = useTasksStore();

const props = defineProps<{
   filter: TaskFilter;
}>();
</script>

<template>
   <button class="secondary" :class="{ contrast: store.filter === props.filter }" @click="store.filter = props.filter">
      {{ props.filter }}
   </button>
</template>

<style scoped>
button {
   text-transform: capitalize;
}
</style>
