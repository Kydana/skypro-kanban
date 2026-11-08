<template>
  <div class="wrapper">
    <ExitModal v-if="showExitModal" @close="showExitModal = false"/>
    <NewCardModal/>
    <TaskModal/>
    <BaseHeader @open-exit-modal="showExitModal = true"/>

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
    <RouterView />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import BaseHeader from '@/components/Header/BaseHeader.vue';
import ExitModal from '@/components/PopExit/ExitModal.vue';
import NewCardModal from '@/components/PopNewCard/NewCardModal.vue';
import TaskModal from '@/components/PopBrowse/TaskModal.vue';
import TaskDesk from '@/components/Main/TaskDesk.vue';
import TaskColumn from '@/components/Column/TaskColumn.vue';
import Task from '@/components/Card/Task.vue';
import { fetchWords } from "@/services/api";

import '@/assets/css/main.css';

const words = ref([])
const loading = ref(false)
const error = ref('')

const getWords = async () => {
   try {
      loading.value = true
      const data = await fetchWords({
      token: 'bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck',
   })

   if (data) words.value = data

   } catch (err) {
      error.value = err.message

   } finally {
      loading.value = false
   }
}

onMounted(getWords)

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

    const allTasks = ref([
      { id: 1, title: "Тестовая задача", status: "Нужно сделать", topic: "Web Design", date: "22.09.2026" }
    ]);

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
