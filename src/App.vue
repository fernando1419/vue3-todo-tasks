<script setup lang="ts">
import Task from "@/types";
import AddTaskForm from "@components/AddTaskForm.vue";
import { ref } from "vue";
const tasks = ref<Task[]>([]);

const handleAddTask = (task: string) => {
   const newTask: Task = { id: crypto.randomUUID(), title: task, isCompleted: false };
   tasks.value.push(newTask);
};

</script>

<template>
   <main class="container-fluid">
      <h2 class="title">Tasks App</h2>
      <AddTaskForm @addTask="handleAddTask" />
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
</style>
