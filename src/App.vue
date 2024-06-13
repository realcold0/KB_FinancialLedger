<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { onMounted } from 'vue';
import NavBar from './components/NavBar.vue';
import QuickAddButton from './components/QuickAddButton.vue';
import QuickAddForm from './components/QuickAddForm.vue';

// 테마를 설정하는 함수
const setTheme = () => {
  const theme = sessionStorage.getItem('theme');
  if (theme === 'dark') {
    document.documentElement.setAttribute('theme', 'dark');
  } else {
    document.documentElement.setAttribute('theme', 'light');
  }
};

// 컴포넌트가 로드될 때 테마를 설정
onMounted(() => {
  setTheme();
});
</script>

<template>
  <NavBar></NavBar>
  <RouterView />
  <QuickAddButton />
</template>

<style>
body {
  background-color: #F8F8F8;
}

html[theme="light"] {
  transition: 0.4s;
}

html[theme="dark"] {
  filter: invert(100%) hue-rotate(180deg);
  transition: 0.4s;
}
</style>
