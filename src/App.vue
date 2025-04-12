<script setup lang="ts">
import type { Task, TaskFilter } from "@/types";
import AddTaskForm from "@components/AddTaskForm.vue";
import FilterButton from "@components/FilterButton.vue";
import TaskList from "@components/TaskList.vue";
import { computed, reactive, ref } from "vue";
import { toast } from 'vue3-toastify';

const filter = ref<TaskFilter>("all");
const tasks = reactive<Task[]>([]);

const handleAddTask = (task: string) => {
   const newTask: Task = { id: crypto.randomUUID(), title: task, isCompleted: false };
   tasks.unshift(newTask);
   toast.success('Task added successfully', { autoClose: 1500 });
};

const markAsCompleted = (id: string) => {
   const selectedTask = tasks.find(task => task.id === id);
   if (selectedTask) {
      selectedTask.isCompleted = !selectedTask.isCompleted;
   }
   // Other way to do that:
   // tasks.value.filter(task => task.id === id).map(selectedTask => selectedTask.isCompleted = !selectedTask.isCompleted);
};

const handleTaskDeletion = (id: string) => {
   const index = tasks.findIndex(task => task.id === id);
   if (index !== -1) {
      tasks.splice(index, 1); // modifies the original array, unlike slice that does not modify the original array.
      toast.info(`Task id: "${id}" successfully deleted!`, { autoClose: 2000 });
   }
   // other way to do the deletion:
   // tasks.value = tasks.value.filter(task => task.id !== id)
};

const totalCompleted = computed(() => tasks.filter(task => task.isCompleted).length);

const handleSetFilter = (value: TaskFilter) => {
   filter.value = value;
};

const filteredTasks = computed(() => {
   switch (filter.value) {
      case "all":
         return tasks;
      case "todo":
         return tasks.filter((task) => !task.isCompleted);
      case "done":
         return tasks.filter((task) => task.isCompleted);
      default:
         return tasks;
   }
});

</script>

<template>
   <main class="container-fluid">
      <h2 class="title">Tasks App</h2>

      <AddTaskForm @addTask="handleAddTask" />

      <h4 v-if="tasks.length === 0">Add a task to get started</h4>
      <h4 v-else> {{ totalCompleted }} of {{ tasks.length }} tasks completed</h4>

      <div v-if="tasks.length > 0" class="button-container">
         <FilterButton :activeFilter="filter" filter="all" @set-filter="handleSetFilter" />
         <FilterButton :activeFilter="filter" filter="todo" @set-filter="handleSetFilter" />
         <FilterButton :activeFilter="filter" filter="done" @set-filter="handleSetFilter" />
      </div>

      <TaskList :tasks="filteredTasks" @toggle-completed="markAsCompleted" @delete-task="handleTaskDeletion" />
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
