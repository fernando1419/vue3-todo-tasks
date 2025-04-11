<script lang="ts" setup>
import Task from '@/types';
const props = defineProps<{ tasks: Task[]; }>();

</script>

<template>
   <article v-for="task in props.tasks" :key="task.id">
      {{ task.title }}
   </article>
</template>
