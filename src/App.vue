<script setup lang="ts">
import { useTasksStore } from "@/stores/tasksStore";
import AddTaskForm from "@components/AddTaskForm.vue";
import FilterButton from "@components/FilterButton.vue";
import TaskList from "@components/TaskList.vue";

const store = useTasksStore();
</script>

<template>
   <main class="container-fluid">
      <h2 class="title">Tasks App</h2>

      <AddTaskForm />

      <h4 v-if="store.tasks.length === 0">Add a task to get started</h4>
      <h4 v-else> {{ store.totalCompleted }} of {{ store.tasks.length }} tasks completed</h4>

      <div v-if="store.tasks.length > 0" class="button-container">
         <FilterButton filter="all" />
         <FilterButton filter="todo" />
         <FilterButton filter="done" />
      </div>

      <TaskList />
   </main>
</template>

<style>
.container-fluid {
   width: 60%;
   margin: 1rem auto 0 auto;
}

.title {
   text-align: center
}

.Toastify__toast-container {
   width: fit-content;
}

.button-container {
   display: flex;
   flex-direction: row;
   justify-content: flex-end;
   gap: 0.4rem;
   margin-bottom: 0.5rem;
}
</style>
