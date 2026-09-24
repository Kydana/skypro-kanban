<template>
  <main class="main">
			<div class="container">
				<div class="main__block">
					<div class="main__content">

            <div v-if="isLoading" class="loader-container">
              <div class="loader-text">Данные загружаются...</div>
            </div>

            <template v-else>
              <TaskColumn title="Без статуса">
                <Task propsName="Web Design" propsColor="orange" title="Название задачи" date="30.10.23" />
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
                <Task propsName="Web Design" propsColor="orange" title="Название задачи" date="30.10.23" />
              </TaskColumn>

              <TaskColumn title="Тестирование">
                <Task propsName="Research" propsColor="green" title="Название задачи" date="30.10.23" />
              </TaskColumn>

              <TaskColumn title="Готово">
                <Task propsName="Research" propsColor="green" title="Название задачи" date="30.10.23" />
              </TaskColumn>
            </template>
					</div>

				</div>
			</div>
	</main>
</template>

<script>
import Task from '@/components/Card/Task.vue'
import TaskColumn from '@/components/Column/TaskColumn.vue'

export default {
  components: {
    Task,
    TaskColumn
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
  },
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
.main {
  width: 100%;
  background-color: #EAEEF6;
}
.main__block {
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
}
.main__content {
  width: 100%;
  display: flex;
}
</style>
