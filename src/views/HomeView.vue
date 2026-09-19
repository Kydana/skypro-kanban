<template>
  <div class="wrapper">
    <ExitModal v-if="showExitModal" @close="showExitModal = false"/>
    <NewCardModal/>
    <TaskModal/>
    <BaseHeader/>

    <TaskDesk>
      <TaskColumn
        v-for="column in columns"
        :key="column.status"
        :title="column.title"
      >

        <div v-if="getTasksByStatus(column.status).length === 0" class="empty-message">
          Задач нет
        </div>

        <template v-else>
          <Task
            v-for="task in getTasksByStatus(column.status)"
            :key="task.id"
            :categoryName="task.topic"
            :categoryColor="getColorByTopic(task.topic)"
            :title="task.title"
            :date="task.date"
          />
        </template>
      </TaskColumn>
    </TaskDesk>
  </div>
</template>

<script>
import { ref } from "vue";
import { tasks as initialTasks } from '@/mocks/tasks.js';
import BaseHeader from '@/components/Header/BaseHeader.vue';
import ExitModal from '@/components/PopExit/ExitModal.vue';
import NewCardModal from '@/components/PopNewCard/NewCardModal.vue';
import TaskModal from '@/components/PopBrowse/TaskModal.vue';
import TaskDesk from '@/components/Main/TaskDesk.vue';
import TaskColumn from '@/components/Column/TaskColumn.vue';
import Task from '@/components/Card/Task.vue';

import '@/assets/css/main.css';

export default {
  name: 'HomeView',
  components: {
    BaseHeader,
    ExitModal,
    NewCardModal,
    TaskModal,
    TaskDesk,
    TaskColumn,
    Task,
  },
  setup() {
    const showExitModal = ref(false);

    const allTasks = ref(initialTasks);

    const columns = [
      { status: "Без статуса", title: "Без статуса" },
      { status: "Нужно сделать", title: "Нужно сделать" },
      { status: "В работе", title: "В работе" },
      { status: "Тестирование", title: "Тестирование" },
      { status: "Готово", title: "Готово" }
    ];

    const getTasksByStatus = (status) => {
      return allTasks.value.filter(task => task.status === status);
    };

    const getColorByTopic = (topic) => {
      const colors = {
        "Web Design": "orange",
        Research: "green",
        Copywriting: "purple"
      };
      return colors[topic] || "orange";
    };

    return {
      showExitModal,
      columns,
      getTasksByStatus,
      getColorByTopic,
    };
  },
}
</script>

<style scoped>
.empty-message {
  padding: 20px;
  text-align: center;
  color: #94A6BE;
  font-size: 14px;
  background: #ffffff;
  border: 1px dashed #94A6BE;
  border-radius: 8px;
  margin-bottom: 12px;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
