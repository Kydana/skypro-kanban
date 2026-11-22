<template>
  <header class="header">
		<div class="container">
			<div class="header__block">
				<div class="header__logo _show _light">
					<router-link to="/"><img src="@/assets/images/logo.png" alt="logo" /></router-link>
				</div>
				<div class="header__logo _dark">
					<router-link to="/"><img src="@/assets/images/logo_dark.png" alt="logo" /></router-link>
				</div>
				<nav class="header__nav" ref="headerNav">
					<button class="header__btn-main-new _hover01" id="btnMainNew">
            <router-link to="/add">Создать новую задачу</router-link>
          </button>
					<a href="#user-set-target" class="header__user _hover02" @click.prevent="toggleMenu">{{ userName }}</a>
					<div v-if="isMenuOpen" class="header__pop-user-set pop-user-set" id="user-set-target">
						<!-- <a href="">x</a> -->
						<p class="pop-user-set__name">{{ userName }}</p>
						<p class="pop-user-set__mail">{{ userEmail }}</p>
						<div class="pop-user-set__theme">
							<p>Темная тема</p>
							<input type="checkbox" class="checkbox" name="checkbox">
						</div>
						<button type="button" class="_hover03" @click.prevent="openExit">
              <!-- <a href="#popExit">Выйти</a> -->
              Выйти
            </button>
					</div>
				</nav>
			</div>
		</div>
	</header>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const emit = defineEmits(['open-exit-modal']);

const isMenuOpen = ref(false);
const headerNav = ref(null);

// Реактивно храним данные пользователя из localStorage
const user = ref(null);

const loadUserFromStorage = () => {
  try {
    const rawUser = localStorage.getItem('user');
    user.value = rawUser ? JSON.parse(rawUser) : null;
  } catch {
    user.value = null;
  }
};

// Вычисляем имя и логин/почту (подставляем заглушку, если пользователь не найден)
const userName = computed(() => user.value?.name || 'Пользователь');
const userEmail = computed(() => user.value?.login || '');

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const openExit = () => {
  isMenuOpen.value = false;
  emit('open-exit-modal');
};

// Закрытие меню при клике вне блока навигации
const handleClickOutside = (event) => {
  if (headerNav.value && !headerNav.value.contains(event.target)) {
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  loadUserFromStorage();
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});


// import { ref, defineEmits } from 'vue';

// const isMenuOpen = ref(false);
// const toggleMenu = () => {
//   isMenuOpen.value =!isMenuOpen.value;
// };

// const emit = defineEmits(['open-exit-modal']);
// const openExit = () => {
//   isMenuOpen.value = false;
//   emit('open-exit-modal');
// };

</script>

<style scoped>
.header {
  width: 100%;
  margin: 0 auto;
  background-color: #FFFFFF;
}
.header__block {
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
}
.header__logo img {
  width: 85px;
}
.header__nav {
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header__btn-main-new {
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565EEF;
  color: #FFFFFF;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
}
.header__btn-main-new a {
  color: #FFFFFF;
}
.header__user {
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565EEF;
}
.header__user::after {
  content: "";
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 1px;
  border-left: 1.9px solid #565EEF;
  border-bottom: 1.9px solid #565EEF;
  transform: rotate(-45deg);
  margin: -6px 0 0 5px;
  padding: 0;
}

.header__pop-user-set {
  display: block;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #FFF;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
}
.pop-user-set__name {
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
}
.pop-user-set__mail {
  color: #94A6BE;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
}
.pop-user-set__theme {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}
.pop-user-set__theme p {
  color: #000;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
}
.pop-user-set__theme input[type=checkbox] {
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: #EAEEF6;
  outline: none;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.pop-user-set__theme input[type=checkbox]::before {
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: #94A6BE;
  transition: 0.5s;
}
.pop-user-set__theme input:checked[type=checkbox]::before {
  left: 12px;
}
.pop-user-set button {
  width: 72px;
  height: 30px;
  background: transparent;
  color: #565EEF;
  border-radius: 4px;
  border: 1px solid #565EEF;
}
.pop-user-set button:hover {
  background-color: #565EEF;
  color: #FFFFFF;
}
.pop-user-set button:hover a {
  color: #FFFFFF;
}
.pop-user-set button a {
  color: #565EEF;
  transition: all 0.3s ease;
}
@media screen and (max-width: 495px) {
  .header__btn-main-new {
    z-index: 3;
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: 40px;
    border-radius: 4px;
    margin-right: 0;
  }
}
</style>
