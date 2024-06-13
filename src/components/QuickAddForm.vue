<template>
  <div>
    <div class="div">
      <div class="div-2">
        <div class="div-3">내역 추가</div>
        <div class="div-4">
          <div class="labelMember">
            <div class="label">일자</div>
            <div class="label">분류</div>
            <div class="label">카테고리</div>
            <div class="label">결제 수단</div>
            <div class="label">금액</div>
            <div class="label">메모</div>
          </div>

          <div class="inputMember">
            <input type="date" class="input" v-model="data.date" />

            <select class="input" v-model="data.class" @change="handleClassChange">
              <option value="" disabled selected>선택하세요</option>
              <option value="지출">지출</option>
              <option value="수입">수입</option>
            </select>

            <!-- <select class="input" v-model="data.category">
              <option value="생활">생활</option>
              <option value="쇼핑/뷰티">쇼핑/뷰티</option>
              <option value="교통">교통</option>
              <option value="식비">식비</option>
            </select> -->

            <select class="input" v-model="data.category">
              <option value="" disabled selected>선택하세요</option>
              <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
            </select>



            <select class="input" v-model="data.payment" :disabled="data.class === '수입' ? true : false">
              <option value="" disabled selected>선택하세요</option>
              <option value="현금">현금</option>
              <option value="카드">카드</option>
            </select>
            <input type="number" class="input" v-model="data.amount" placeholder="금액 입력" />
            <input type="text" class="input" placeholder="메모 입력" v-model="data.memo" />
          </div>
        </div>
        <div class="button-container">
          <button class="div-21 confirm-button" @click="confirm">확인</button>
          <button class="div-21 cancel-button" @click="cancel">취소</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  name: "QuickAddForm",
  data() {
    return {
      data: {
        id: '',
        category: '',
        user_id: '',
        amount: null,
        memo: '',
        class: '',
        payment: '',
        date: ''

      },
      categories: ['생활', '쇼핑/뷰티', '교통', '식비'], // 기본 카테고리 목록
      incomeCategories: ['용돈', '월급'], // 수입일 때 카테고리 목록
      paymentMethods: ['현금', '카드'] // 결제 수단 목록
    };
  },
  methods: {
    handleClassChange() {
      if (this.data.class === '수입') {
        this.categories = this.incomeCategories; // 수입일 때 카테고리 목록 변경
        this.data.category = ''; // 카테고리 초기화
        this.data.payment = ''; // 결제 수단 초기화
      } else {
        this.categories = ['생활', '쇼핑/뷰티', '교통', '식비']; // 지출일 때 기본 카테고리 목록으로 변경
        this.data.category = ''; // 카테고리 초기화
      }
    },
    fetchNextId() {
      axios.get('http://localhost:3001/transactionDetail')
        .then(response => {

          console.log(nextId)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    confirm() {
      // 필수 입력 항목 체크
      if (!this.data.date || !this.data.class || !this.data.category || !this.data.amount || !this.data.memo) {
        window.alert('모든 항목을 입력해주세요.');
        return;
      }
      // 데이터 준비
      this.data.id = this.nextId;
      this.data.user_id = sessionStorage.getItem("id");
      // Axios를 사용하여 데이터를 POST
      axios.post('http://localhost:3001/transactionDetail', this.data)
        .then(response => {
          console.log('Data successfully posted:', response.data);
          this.$emit("close"); // 모달 닫기
        })
        .catch(error => {
          console.error('Error posting data:', error);
        });
    },
    cancel() {
      // 취소 버튼 클릭 시 처리할 로직을 추가할 수 있습니다.
      console.log('취소 버튼 클릭');
      this.$emit("close"); // 모달 닫기
    }
  },
  

};
</script>
<style scoped>


.div {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #f8f8f8;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  z-index: 1000;

}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  /* 다른 스타일 */
}

@media (max-width: 991px) {
  .div {
    position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #f8f8f8;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  z-index: 1000;
  margin-right: 10%;
  }
}

.div-2 {
  border-radius: 30px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #f8f8f8;
  display: flex;
  width: 284px;
  max-width: 100%;
  padding-bottom: 6px;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 991px) {
  .div-2 {
    border-radius: 30px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #f8f8f8;
  display: flex;
  width: 284px;
  max-width: 100%;
  padding-bottom: 6px;
  flex-direction: column;
  align-items: center;
  }
}

.div-3 {
  border-radius: 30px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #f7c873;
  align-self: stretch;
  color: #fff;
  justify-content: center;
  padding: 7px 60px;
  text-align: center;
  font: 700 20px Inter, sans-serif;
}

@media (max-width: 991px) {
  .div-3 {
    padding: 7px 20px;
    font-size: 18px;
  }
}

.div-4 {
  display: flex;
  margin-top: 18px;
  width: 188px;
  max-width: 100%;
  gap: 20px;
  justify-content: space-between;
}

.labelMember {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  /* 자동 줄 바꿈 허용 */
  white-space: nowrap;
  color: #434343;
  font-weight: 700;
  font-size: 14px;
  gap: 34px;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: -10px;
}

label {
  margin-top: 10px;
}

.inputMember {
  display: flex;
  flex-direction: column;
  color: #8e9393;
  font-weight: 400;
  gap: 33px;
  margin-top: 14px;
  margin-bottom: 15px;
  margin-left: 10px;
}

.inputMember input,
.inputMember select {
  border: none;
  background-color: transparent;
}

.input {
  font-family: Inter, sans-serif;
}

.unitText {
  margin-right: 10px;
}

.inputWithText {
  display: flex;
  align-items: center;
}

@media (max-width: 991px) {
  .div-14 {
    margin: 0 7px 0 8px;
  }
}

@media (max-width: 991px) {
  .div-15 {
    margin: 0 7px 0 8px;
  }
}

.div-16 {
  font-family: Inter, sans-serif;
  margin-top: 31px;
}

@media (max-width: 991px) {
  .div-16 {
    margin: 0 7px 0 8px;
  }
}

.div-17 {
  display: flex;
  margin-top: 33px;
  gap: 20px;
  color: #8e9393;
  font-weight: 400;
  white-space: nowrap;
  justify-content: space-between;
}

@media (max-width: 991px) {
  .div-17 {
    white-space: initial;
  }
}

.div-18 {
  color: #434343;
  font-family: Inter, sans-serif;
  font-weight: 700;
}

.div-19,
.div-20 {
  font-family: Inter, sans-serif;
}

.div-21 {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  background-color: #434343;
  margin-top: -10px;
  width: 110px;
  max-width: 100%;
  color: #fff;
  white-space: nowrap;
  padding: 9px 24px;
  font: 500 10px/150% Inter, sans-serif;
}

@media (max-width: 991px) {
  .div-21 {
    white-space: initial;
    padding: 9px 20px;
  }
}

.button-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.confirm-button,
.cancel-button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  background-color: #434343;
  color: #fff;
  white-space: nowrap;
  padding: 9px 24px;
  font: 500 10px/150% Inter, sans-serif;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.confirm-button:hover,
.cancel-button:hover {
  background-color: #333;
}

.cancel-button {
  margin-left: 10px;
}
</style>
