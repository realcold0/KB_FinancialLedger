
<template>
    <div>
        필터입니다.
        <ExpenseList></ExpenseList>  
    </div>
</template>

<script>
    import ExpenseList from "./ExpenseList.vue";
    export default {
        components : {
            ExpenseList,
        }
    }
</script>

<style scoped>
    
</style>