<template lang="">
  <div>
    <ExpenseChart />
  </div>
</template>
<script>
import ExpenseChart from "./components/ExpenseChart.vue";
export default {
  name: "MyComponent", // 컴포넌트 이름을 정의합니다
  components: {
    ExpenseChart, // 컴포넌트를 등록합니다
  },
};
</script>
<style lang=""></style>
