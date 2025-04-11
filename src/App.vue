<script setup lang="ts">
import AddTaskForm from "@components/AddTaskForm.vue";

const handleAddTask = (task: string) => {
   // TODO: ADD TASK HERE...
   console.log(task);
};
</script>

<template>
   <main class="container-fluid">
      <h2 class="title">Tasks App</h2>
      <AddTaskForm @add-task="handleAddTask" />
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
