<script lang="ts" setup>
import Task from '@/types';
import { computed } from 'vue';
const props = defineProps<{ tasks: Task[]; }>();
// emits to the parent because tasks data is defined in the parent, it is not correct that we modify the state of the data where it was not defined.
const emit = defineEmits<{
   toggleIsCompleted: [id: string];
   deleteTask: [id: string];
}>();

const totalCompleted = computed(() => props.tasks.filter(task => task.isCompleted).length);
</script>

<template>
   <h4 v-if="props.tasks.length === 0">Add a task to get started</h4>
   <h4 v-else> {{ totalCompleted }} of {{ props.tasks.length }} tasks completed</h4>
   <TransitionGroup name="task-list">
      <article v-for="task in props.tasks" :key="task.id" class="flex">
         <label>
            <!-- :checked is needed to bind the state of the checkbox with task.isCompleted field because we are not using v-model -->
            <!-- and we do this way (emitting an event) because the state of the task is defined in the parent, if we use v-model -->
            <!-- we will modify the state of the data here in this component, where it was not defined -->
            <input type="checkbox" :checked="task.isCompleted" @input="emit('toggleIsCompleted', task.id)" />
            <span :class="{ complete: task.isCompleted }"> {{ task.title }} </span>
         </label>
         <button class="outline secondary" @click="emit('deleteTask', task.id)">Delete</button>
      </article>
   </TransitionGroup>

</template>

<style scoped>
.complete {
   text-decoration: line-through;
}

.flex {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
}

.task-list-enter-active,
.task-list-leave-active {
   transition: all 1s ease;
}

.task-list-enter-from,
.task-list-leave-to {
   opacity: 0;
   transform: translateX(300px);
}
</style>
