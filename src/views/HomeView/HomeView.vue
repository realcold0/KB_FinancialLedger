<script setup>
import Calendar from "./components/Calendar.vue"
</script>

<template>
  <div class="financial-summary">
    <section class="summary-content">
      <article class="summary-box">
        <div class="income-expense">
          <p class="income">총수입: 3,231,300원</p>
          <p class="expense">총지출: 1,231,300원</p>
          <p class="total">총계: 4,562,600원</p>
        </div>
        <div class="chart-image-secondary">
          <Calendar></Calendar>
        </div>
      </article>
    </section>
    <aside class="add-button">
      <button aria-label="Add new entry">+</button>
    </aside>
  </div>
</template>

<style scoped>
.financial-summary {
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  padding-bottom: 37px;
}

@media (max-width: 991px) {
  .banner {
    max-width: 100%;
  }
}

.summary-content {
  align-self: center;
  z-index: 10;
  display: flex;
  margin-top: -19px;
  width: 100%;
  max-width: 1022px;
  align-items: flex-start;
  gap: 20px;
}

@media (max-width: 991px) {
  .summary-content {
    max-width: 100%;
    flex-wrap: wrap;
  }
}

.summary-box {
  border-radius: 30px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.62);
  background-color: #faebcd;
  align-self: start;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  flex-grow: 1;
  flex-basis: 0;
  width: fit-content;
  padding: 27px 80px 43px;
}

@media (max-width: 991px) {
  .summary-box {
    max-width: 100%;
    padding: 0 20px;
  }
}

.income-expense {
  display: flex;
  gap: 20px;
  margin: 0 17px;
}

@media (max-width: 991px) {
  .income-expense {
    max-width: 100%;
    margin-right: 10px;
    flex-wrap: wrap;
  }
}

.income {
  align-self: start;
  color: #6293ce;
  font-family: Inter, sans-serif;
  flex-grow: 1;
  font-size: 11px;
  white-space: nowrap;
}

@media (max-width: 991px) {
  .income {
    white-space: initial;
  }
}

.expense {
  align-self: start;
  color: #f66464;
  font-family: Inter, sans-serif;
  font-size: 11px;
  white-space: nowrap;
}

@media (max-width: 991px) {
  .expense {
    white-space: initial;
  }
}

.total {
  color: #434343;
  font-family: Inter, sans-serif;
  font-size: 14px;
  flex-grow: 1;
  flex-basis: auto;
}

.chart-image {
  aspect-ratio: 20;
  object-fit: auto;
  object-position: center;
  width: 681px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.83);
  align-self: center;
  margin: 6px 17px 0;
}

@media (max-width: 991px) {
  .chart-image {
    max-width: 100%;
  }
}

.chart-image-secondary {
  aspect-ratio: 1.47;
  object-fit: auto;
  object-position: center;
  width: 100%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.59);
  border: 1px solid rgba(255, 255, 255, 1);
  margin: 11px 17px 0;
}

@media (max-width: 991px) {
  .chart-image-secondary {
    max-width: 100%;
    margin-right: 10px;
  }
}

.add-button {
  align-self: end;
  display: flex;
  margin-top: 552px;
  flex-direction: column;
  font-size: 64px;
  color: #f8f8f8;
  font-weight: 500;
  white-space: nowrap;
  line-height: 150%;
  justify-content: center;
}

@media (max-width: 991px) {
  .add-button {
    margin-top: 40px;
    font-size: 40px;
    white-space: initial;
  }
}

.add-button button {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Inter, sans-serif;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: #f2b74e;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  padding: 0 25px;
}

@media (max-width: 991px) {
  .add-button button {
    font-size: 40px;
    padding-left: 20px;
    white-space: initial;
  }
}
</style>