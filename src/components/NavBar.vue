<script setup>
    
</script>
<template>
    <nav class="navbar">
      <div class="logo-section">
        <RouterLink :to="{name :'home'}"><img loading="lazy" src='@/assets/img/logo.png' class="logo-img"/></RouterLink>
      </div>
      <div class="date-section">
        <img loading="lazy" src="@/assets/img/leftArrow.png" class="nav-icon" @click="decreaseMonth" />
        <div class="date-text">
          <div class="month" >{{ date.month }}</div>
          <div class="year"><span style="font-size: 25px">{{ date.year }}</span></div>
        </div>
        <img loading="lazy" src="@/assets/img/rightArrow.png" class="nav-icon" @click="increaseMonth"/>
      </div>
      <div class="menuSection">
        <RouterLink :to="{name :'home'}"><img src="@/assets/img/calendar.png" alt="달력" class="nav-icon-menu"></RouterLink>
        <RouterLink :to="{name :'expenses'}"><img src="@/assets/img/list.png" alt="소비리스트" class="nav-icon-menu"></RouterLink>
        <RouterLink :to="{name :'analysis'}"><img src="@/assets/img/analyze.png" alt="분석" class="nav-icon-menu"></RouterLink>
      </div>
      <div class="option">
        <img loading="lazy" src ="@/assets/img/dark.png" class="nav-icon"/>
        <RouterLink :to="{name :'profile'}"><img loading="lazy" src="@/assets/img/Account_circle.png" class="nav-icon"/></RouterLink>
      </div>
    </nav>
  </template>
  
<script>
import { RouterLink } from 'vue-router';
import { useDateStore } from '@/stores/counter'
export default {
    setup() { 
        const date = useDateStore()
        

        const decreaseMonth = function(){
            console.log(date.decreaseMonth());
        }
        
        const increaseMonth = function(){
            console.log(date.increaseMonth());
        }
        return {decreaseMonth, increaseMonth, date}
    },
}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f7c873;
  top: 0;
  width: 100%;
  height: 172px;
  z-index:S1000;
}

.logo-section, .date-section, .option , .menuSection {
  display: flex;
  align-items: center;
}

.date-section {
  flex: 0.4;
  justify-content: center;
  gap: 20px;
}
.logo-img{
    width: 90%;
}

.nav-icon, .nav-icon-menu {
  height: 40px; 
}

.date-text {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.month {
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 40px;
  font-size: normal;
  color: #434343;
}

.year {
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 25px;
  color: #434343;
  margin-top: 5px;
}

.nav-icon-menu {
    margin : 0px 5px;
}




@media (max-width: 991px) {
  .navbar {
    flex-direction: column;
    align-items: stretch;
  }

  .date-section {
    justify-content: center;
    margin: 10px 0;
  }
}
</style>
