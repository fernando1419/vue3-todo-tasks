import { Task, TaskFilter } from '@/types';
import { defineStore } from 'pinia';
import { computed, reactive, ref } from 'vue';
import { toast } from 'vue3-toastify';

export const useTasksStore = defineStore('tasks', () => {
   const tasks = reactive<Task[]>([]);
   const filter = ref<TaskFilter>('all');

   const totalCompleted = computed(() => tasks.filter(task => task.isCompleted).length);

   const filteredTasks = computed(() => {
      switch (filter.value) {
         case 'all':
            return tasks;
         case 'todo':
            return tasks.filter((task) => !task.isCompleted);
         case 'done':
            return tasks.filter((task) => task.isCompleted);
         default:
            return tasks;
      }
   });

   const toggleCompleted = (id: string) => {
      const selectedTask = tasks.find(task => task.id === id);
      if (selectedTask) {
         selectedTask.isCompleted = !selectedTask.isCompleted;
      }
   };

   const addTask = (task: string) => {
      const newTask: Task = { id: crypto.randomUUID(), title: task, isCompleted: false };
      tasks.unshift(newTask);
      toast.success('Task added successfully', { autoClose: 1500 });
   };

   const deleteTask = (id: string) => {
      const index = tasks.findIndex(task => task.id === id);
      if (index !== -1) {
         tasks.splice(index, 1); // modifies the original array, unlike slice that does not modify the original array.
         toast.info(`Task id: "${id}" successfully deleted!`, { autoClose: 2000 });
      }
      // other way to do the deletion:
      // tasks.value = tasks.value.filter(task => task.id !== id)
   };

   return { tasks, filter, filteredTasks, totalCompleted, toggleCompleted, addTask, deleteTask };
});
