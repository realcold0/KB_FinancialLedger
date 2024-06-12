<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import QuickAddButton from './components/QuickAddButton.vue';
import QuickAddForm from './components/QuickAddForm.vue';
</script>

<template>
  <NavBar></NavBar>
  <RouterView />
  <QuickAddButton/>
</template>

<style scoped>
</style>
