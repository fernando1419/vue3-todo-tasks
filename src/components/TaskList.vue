<script lang="ts" setup>
import { useTasksStore } from "@/stores/tasksStore";
const store = useTasksStore();

</script>

<template>
   <TransitionGroup name="task-list">
      <article v-for="task in store.filteredTasks" :key="task.id" class="flex">
         <label>
            <input type="checkbox" :checked="task.isCompleted" @input="store.toggleCompleted(task.id)" />
            <span :class="{ complete: task.isCompleted }"> {{ task.title }} </span>
         </label>
         <button class="outline secondary" @click="store.deleteTask(task.id)">Delete</button>
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
