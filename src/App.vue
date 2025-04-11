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

const markAsCompleted = (id: string) => {
   const selectedTask = tasks.value.find(task => task.id === id);
   if (selectedTask) {
      selectedTask.isCompleted = !selectedTask.isCompleted;
   }
   // Other way to do that:
   // tasks.value.filter(task => task.id === id).map(selectedTask => selectedTask.isCompleted = !selectedTask.isCompleted);
};

const handleTaskDeletion = (id: string) => {
   const index = tasks.value.findIndex(task => task.id === id);
   if (index !== -1) {
      tasks.value.splice(index, 1); // modifies the original array, unlike slice that does not modify the original array.
      toast.info(`Task with id "${id}" was successfully deleted!`, { autoClose: 2000 });
   }
   // other way to do the deletion:
   // tasks.value = tasks.value.filter(task => task.id !== id)
};

</script>

<template>
   <main class="container-fluid">
      <h2 class="title">Tasks App</h2>
      <AddTaskForm @addTask="handleAddTask" />
      <TaskList :tasks @toggle-is-completed="markAsCompleted" @delete-task="handleTaskDeletion" />
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
</style>
