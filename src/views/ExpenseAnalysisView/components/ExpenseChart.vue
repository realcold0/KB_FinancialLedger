<template>
  <div :class="$style.div">
    <div :class="$style.div1">
      <div :class="$style.div2" />
    </div>
    <div :class="$style.parent">
      <div :class="$style.div3" />
      <div :class="$style.image17Parent">
        <div :class="$style.googleChartContainer">
          <google-chart
            type="PieChart"
            :data="chartData"
            :options="chartOptions"
            style="width: 100%; height: 300px"
          ></google-chart>
        </div>

        <div :class="$style.div4">
          <p :class="$style.p">이번달 지출 :</p>
          <p :class="$style.p1">{{ totalExpense }} 원</p>
        </div>

        <div :class="$style.div5">
          <div :class="$style.div6" />
          <div :class="$style.div7">
            <div :class="$style.child" />
            <div :class="$style.div8">생활</div>
          </div>
          <div :class="$style.div9">{{ categoryPercentages["생활"] }}%</div>
          <div :class="$style.div10">{{ totals["생활"] }} 원</div>
        </div>

        <div :class="$style.div11">
          <div :class="$style.div6" />
          <div :class="$style.div7">
            <div :class="$style.item" />
            <div :class="$style.div8">쇼핑/뷰티</div>
          </div>
          <div :class="$style.div9">
            {{ categoryPercentages["쇼핑/뷰티"] }}%
          </div>
          <div :class="$style.div10">{{ totals["쇼핑/뷰티"] }} 원</div>
        </div>

        <div :class="$style.div17">
          <div :class="$style.div6" />
          <div :class="$style.div7">
            <div :class="$style.inner" />
            <div :class="$style.div8">교통</div>
          </div>
          <div :class="$style.div9">{{ categoryPercentages["교통"] }}%</div>
          <div :class="$style.div10">{{ totals["교통"] }} 원</div>
        </div>

        <div :class="$style.div23">
          <div :class="$style.div6" />
          <div :class="$style.div7">
            <div :class="$style.rectangleDiv" />
            <div :class="$style.div8">식비</div>
          </div>
          <div :class="$style.div9">{{ categoryPercentages["식비"] }}%</div>
          <div :class="$style.div10">{{ totals["식비"] }} 원</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";
import { GChart } from "vue-google-charts";

export default defineComponent({
  name: "Frame",
  components: {
    "google-chart": GChart,
  },
  setup() {
    const categories = ["생활", "쇼핑/뷰티", "교통", "식비"];
    const chartData = ref([]);
    // Google 차트 옵션
    const chartOptions = ref({
      // 도넛 차트 설정
      pieHole: 0.4, // 도넛의 가운데 공간 비율 설정
      pieSliceText: "percentage", // 각 슬라이스에 표시되는 텍스트 설정
      pieStartAngle: 100, // 차트의 시작 각도 설정
      legend: "none", // 범례 위치 설정
      slices: {
            0: { color: '9FD7FF' },
            1: { color: 'F9F59E' },
            2: { color: '99FF89' },
            3: { color: 'FFADE3' },},
       backgroundColor: 'FAEBCD',
       width:500,
       height:500
    });

    const totals = ref<{ [key: string]: number }>({
      생활: 0,
      "쇼핑/뷰티": 0,
      교통: 0,
      식비: 0,
    });
    const categoryPercentages = ref<{ [key: string]: string }>({
      생활: "0",
      "쇼핑/뷰티": "0",
      교통: "0",
      식비: "0",
    });
    const totalExpense = ref(0);

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/transactionDetail"
        );
        const data = response.data.filter((item: any) => item.user_id === 1);

        let overallTotal = 0;

        data.forEach((item: any) => {
          if (categories.includes(item.category)) {
            totals.value[item.category] += item.amount;
            overallTotal += item.amount;
          }
        });

        totalExpense.value = overallTotal;

        const chartDataArray = [];

        categories.forEach((category) => {
          if (overallTotal > 0) {
            // 각 카테고리의 퍼센티지 계산
            const percentage = (
              (totals.value[category] / overallTotal) *
              100
            ).toFixed(1);
            // Google 차트 데이터에 추가
            chartDataArray.push([category, parseFloat(percentage)]);
            // 카테고리별 퍼센티지 저장
            categoryPercentages.value[category] = percentage;
          } else {
            categoryPercentages.value[category] = "0";
          }
        });

        // Google 차트에 사용할 데이터 설정
        chartData.value = [["Category", "Percentage"]].concat(chartDataArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    onMounted(fetchData);

    return {
      categories,
      totals,
      categoryPercentages,
      totalExpense,
      chartOptions,
      chartData,
    };
  },
});
</script>

<style module>
.div2 {
  /* 상단바 */
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  background-color: #f7c873;
}

.div1 {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1280px;
  height: 172px;
}

.div3 {
  position: absolute;
  top: 0px;
  left: 0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background-color: #faebcd;
  width: 862px;
  height: 523px;
}

.googleChartContainer {
  position: absolute;
  top: -20px;
  margin-left: 40px;
  right: 40px;
  left: -100px;
  
}

.p {
  margin: 0;
}

.p1 {
  margin: 0;
  white-space: pre-wrap;
}

.div4 {
  position: absolute;
  top: 0px;
  left: 365px;
  font-size: 32px;
  text-align: left;
  display: inline-block;
  width: 446px;
  height: 102px;
}

.div6 {
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 21px;
  background-color: #f8f8f8;
  width: 379px;
  height: 69px;
}

.child {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 17px;
  background-color: #9fd7ff;
}

.div8 {
  position: absolute;
  height: 58.82%;
  width: 77.78%;
  top: 20.59%;
  left: 13.33%;
  display: inline-block;
}

.div7 {
  position: absolute;
  top: 18px;
  left: 15px;
  width: 90px;
  height: 34px;
  font-size: 18px;
}

.div9 {
  position: absolute;
  top: 24px;
  left: 108px;
  font-weight: 300;
  display: inline-block;
  width: 86px;
  height: 30px;
}

.div10 {
  position: absolute;
  top: 24px;
  left: 237px;
  font-weight: 300;
  display: inline-block;
  width: 130px;
  height: 30px;
}

.div5 {
  position: absolute;
  top: 98px;
  left: 365px;
  width: 379px;
  height: 69px;
}

.item {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 17px;
  background-color: #f9f59e;
}

.div11 {
  position: absolute;
  top: 177px;
  left: 365px;
  width: 379px;
  height: 69px;
}

.inner {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 17px;
  background-color: #99ff89;
}

.div17 {
  position: absolute;
  top: 256px;
  left: 365px;
  width: 379px;
  height: 69px;
}

.rectangleDiv {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 17px;
  background-color: #ffade3;
}

.div23 {
  position: absolute;
  top: 335px;
  left: 365px;
  width: 379px;
  height: 69px;
}

.image17Parent {
  position: absolute;
  top: 33px;
  left: 66px;
  width: 811px;
  height: 411px;
}

.parent {
  position: absolute;
  top: 153px;
  left: 232px;
  width: 877px;
  height: 523px;
}

.div {
  width: 100%;
  position: relative;
  background-color: #fff;
  height: 832px;
  overflow: hidden;
  text-align: center;
  font-size: 20px;
  color: #000;
  font-family: Inter;
}
</style>
