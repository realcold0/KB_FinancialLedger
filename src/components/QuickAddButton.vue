<template>
  <div class="container">
    <div class="button" @click="openModal">+</div>
    <quick-add-form v-if="isModalOpen" @close="closeModal"></quick-add-form>
  </div>
</template>
<script>
import QuickAddForm from './QuickAddForm.vue';

export default {
  components: {
    QuickAddForm,
  },
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>
<style scoped>
.container {
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button {
  position: fixed;
  bottom: 40px;
  right: 50px;
  width: 100px;
  height: 100px;
  background-color: #f2b74e;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 90px;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

@media (max-width: 991px) {
  .button {
    width: 40px;
    height: 40px;
    font-size: 24px;
    bottom: 10px;
    right: 10px;
  }
}
</style>
