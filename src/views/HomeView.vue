<template>
  <div class="wrapper">
		<!-- pop-up start-->

      <ExitModal/>

			<NewCardModal/>

      <TaskModal/>

		<!-- pop-up end-->

		<BaseHeader/>

    <div v-if="isLoading" class="loader-container">
      <div class="loader-text">Данные загружаются...</div>
    </div>

		<TaskDesk v-else>
      <TaskColumn title="Без статуса">
				<Task propsName="Web Design" propsColor="orange" title="Название задачи" date="30.10.23"/>
				<Task propsName="Research" propsColor="green" title="Название задачи" date="30.10.23" />
        <Task propsName="Web Design" propsColor="orange" title="Название задачи" date="30.10.23" />
				<Task propsName="Copywriting" propsColor="purple" title="Название задачи" date="30.10.23" />
        <Task propsName="Web Design" propsColor="orange" title="Название задачи" date="30.10.23" />
      </TaskColumn>

      <TaskColumn title="Нужно сделать">
        <Task propsName="Research" propsColor="green" title="Название задачи" date="30.10.23" />
      </TaskColumn>

      <TaskColumn title="В работе">
        <Task propsName="Research" propsColor="green" title="Название задачи" date="30.10.23" />
        <Task propsName="Copywriting" propsColor="purple" title="Название задачи" date="30.10.23" />
        <Task propsName="Web Design" propsColor="orange" title="Название задачи" date="30.10.23"/>
      </TaskColumn>

      <TaskColumn title="Тестирование">
        <Task propsName="Research" propsColor="green" title="Название задачи" date="30.10.23" />
      </TaskColumn>

      <TaskColumn title="Готово">
        <Task propsName="Research" propsColor="green" title="Название задачи" date="30.10.23" />
      </TaskColumn>
    </TaskDesk>
  </div>

</template>

<script>
import BaseHeader from '@/components/Header/BaseHeader.vue';
import ExitModal from '@/components/PopExit/ExitModal.vue';
import NewCardModal from '@/components/PopNewCard/NewCardModal.vue';
import TaskModal from '@/components/PopBrowse/TaskModal.vue';
import TaskDesk from '@/components/Main/TaskDesk.vue';
import TaskColumn from '@/components/Column/TaskColumn.vue';
import Task from '@/components/Card/Task.vue';

import '@/assets/css/main.css'
// import '@/assets/css/main_dark.css'

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
  data() {
    return {
      isLoading: true
    }
  },

  mounted() {

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
</script>

<style scoped>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  width: 100%;
}

.loader-text {
  font-size: 24px;
  font-weight: 600;
  color: #94A6BE;
  letter-spacing: 0.5px;
}
</style>
