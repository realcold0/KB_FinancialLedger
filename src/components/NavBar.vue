<template>
  <nav class="navbar">
      <div class="topSection">
        <div class="logosection">
        <RouterLink :to="{ name: 'home' }"><img loading="lazy" src='@/assets/img/logo.png' class="logo-img" />
        </RouterLink>
      </div>

      <div class="datesection">
        <img loading="lazy" src="@/assets/img/leftArrow.png" class="nav-icon" @click="decreaseMonth" />
        <div class="date-text">
          <div class="month">{{ date.month }}월</div>
          <div class="year"><span style="font-size: 25px">{{ date.year }}</span></div>
        </div>
        <img loading="lazy" src="@/assets/img/rightArrow.png" class="nav-icon" @click="increaseMonth" />
      </div>

    </div>
    
    <div class="bottomSection">
      <ul class="menuSection">
        <li>
          <RouterLink :to="{ name: 'home' }"><img src="@/assets/img/calendar.png" alt="달력" class="nav-icon-menu">
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'expenses' }"><img src="@/assets/img/list.png" alt="소비리스트" class="nav-icon-menu">
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'analysis' }"><img src="@/assets/img/analyze.png" alt="분석" class="nav-icon-menu">
          </RouterLink>
        </li>
      </ul>

      <ul class="option">
        <li><img loading="lazy" :src="themeIcon" class="nav-icon" @click="toggleTheme" /></li>
        <li>
          <RouterLink :to="{ name: 'profile' }"><img loading="lazy" src="@/assets/img/Account_circle.png"
              class="nav-icon" /></RouterLink>
        </li>
      </ul>
    </div>

  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useDateStore } from '@/stores/date'
import { ref, computed } from 'vue';

const isDarkMode = ref(false);
const date = useDateStore();

const decreaseMonth = function () {
  console.log(date.decreaseMonth());
}

const increaseMonth = function () {
  console.log(date.increaseMonth());
}

const toggleTheme = function () {
  isDarkMode.value = !isDarkMode.value;
  sessionStorage.setItem("theme", isDarkMode.value ? "dark" : "light");
}

const themeIcon = computed(() => {
  return isDarkMode.value ? "./src/assets/img/light.png" : "./src/assets/img/dark.png";
})
</script>

<style scoped>
.navbar {
  background-color: #f7c873;
  width: 100%;
  height: 172px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 991px) {
  .navbar {
    flex-direction: column;
    align-items: center;
    gap: 0px;
    height: 280px;
  }
}

.topSection {
  display: flex;
  width: 61%;
  justify-content: space-between;
}
@media (max-width: 991px) {
  .topSection {
    flex-direction: column;
    align-items: center;
  }
}

.logosection {
  width: 293px;
  height: 107px;
  margin: 46px auto 19px 33px;

}

@media (max-width: 991px) {
  .logosection {
    margin: 0;
  }
}
.datesection {
  display: flex;
  align-items: center;
}

.datesection img {
  margin: 0 50px;
  
}

.month {
  color: #434343;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
}

.year {
  color: #434343;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;

}

.bottomSection {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  padding-right: 10px;
}

@media (max-width: 991px) {
  .bottomSection {
    width: 100%;
    justify-content: center;
    padding-right: 0;

  }
}


.bottomSection ul {
  /* 왜 패딩 들어가있는지 모르겠음 */
  padding-left: 0;
}

.menuSection {
  list-style: none;
  display: flex;
  align-items: center;
}

.menuSection li {
  margin: 0 5px;
}

.option {
  list-style: none;
  display: flex;
  align-items: center;
}
</style>
