<script setup lang="ts">
import { ref } from "vue";

const inputRef = ref(); // reference to Input control in DOM. // inputRef.value.value
const taskValue = ref(''); // reference to the value (text) of the Input control.
const taskErrorMessage = ref('');

const addTask = async () => {
   inputRef.value.focus();
   if (!canSaveTask()) return;

   // TODO: ADD TASK HERE...
   await new Promise((resolve) => setTimeout(resolve, 1000));

   taskValue.value = '';
   inputRef.value.focus();
};

const canSaveTask = (): boolean => {
   if (taskValue.value.trim().length < 3) {
      taskErrorMessage.value = 'Task description must be at least 3 characters long.';
      return false;
   }

   if (taskValue.value.trim() === '') {
      taskErrorMessage.value = 'Please provide a valid description for adding a task!.';
      return false;
   }

   taskErrorMessage.value = '';
   return true;
};
</script>

<template>
   <main class="container">
      <h3 class="form-title">Add new task</h3>
      <form @submit.prevent="addTask">
         <fieldset role="group">
            <input ref="inputRef" v-model.trim="taskValue" type="text" placeholder="Enter description for the task"
               aria-label="Text" :aria-invalid="!!taskErrorMessage || undefined" @input="canSaveTask" />
            <input type="submit" class="secondary" value="Add" />
         </fieldset>
         <small v-if="taskErrorMessage" class="error"> {{ taskErrorMessage }} </small>
      </form>
      <p>{{ taskValue }}</p>
   </main>
</template>

<style scoped>
.container {
   width: 60%;
}

.form-title {
   margin-bottom: 0.5rem;
}

.error {
   color: rgb(128, 11, 11);
   font-size: 0.7rem;
}
</style>
