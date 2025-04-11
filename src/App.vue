<script setup lang="ts">
import Task from "@/types";
import AddTaskForm from "@components/AddTaskForm.vue";
import TaskList from "@components/TaskList.vue";
import { ref } from "vue";
import { toast } from 'vue3-toastify';

const tasks = ref<Task[]>([]);

const handleAddTask = (task: string) => {
   const newTask: Task = { id: crypto.randomUUID(), title: task, isCompleted: false };
   tasks.value.unshift(newTask);
   toast.success('Task added successfully', { autoClose: 1500 });
};
</script>

<template>
   <main class="container-fluid">
      <h2 class="title">Tasks App</h2>
      <AddTaskForm @addTask="handleAddTask" />
      <TaskList :tasks />
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
