<template>
    <div class="div">
      <div class="sub">프로필</div>
      <div class="profile-backgorund">
        <div class="div-11">
          <div class="left">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4f3d69ee5ab28f9f7be2a51eb8d17f1e87b79f8a501d4a56786bf57e6ba664a?"
                class="img-6"
              />
              <button @click="logout" type="submit" class="div-13">
                <div class="div-14">Logout</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/63108a120f338f09152579ce8344d5d8fc5ab117164278b660b5c66fb80cfd98?"
                  class="img-7"
                />
              </button>
          </div>

          <div class="right">
            <div class="div-15">
              <div class="div-16">이름: {{ data.name }}</div>
              <div class="div-17">ID: {{ data.userId }}</div>
              <div class="div-18">Email:{{ data.email }}</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </template>
  

<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';
import { onMounted,reactive } from 'vue';

const router = useRouter();
const data = reactive({name : "", userId : "", email : ""});

const logout = () => {
    alert("로그아웃 되었습니다.");
    sessionStorage.removeItem("id");
    router.push("/login");

}

onMounted(() => {
    if(!sessionStorage.getItem("id")){
      alert("로그인을 먼저 해주세요");
      router.push("/login");  
    }else{
      const userId = sessionStorage.getItem("id");
      console.log(userId);

      
      axios.get(`http://localhost:3001/user?id=${userId}`)
      .then(res => {
          const userData = res.data[0];
          console.log(userData);
          data.name = userData.name;
          data.userId = userData.userId;
          data.email = userData.email;
      })
      .catch(e => {
          alert("오류");
          console.log(e);
          router.push("/login");
      })
    }
    

})

</script>
  
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Nanum+Myeongjo&display=swap');
  .div {
    margin-top: -1%;
    display: flex;
    padding-bottom: 73px;
    flex-direction: column;
    align-items: center;
  }
    .sub {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    -webkit-text-stroke-width: 1;
    -webkit-text-stroke-color: #000;
    border-color: rgba(0, 0, 0, 1);
    border-style: solid;
    border-width: 1px;
    justify-content: center;
    align-items: center;
    border-radius: 14px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    z-index: 10;
    width: 590px;
    max-width: 100%;
    color: #434343;
    white-space: nowrap;
    padding: 12px 47px;
    font: 400 48px Actor, sans-serif;
    text-align: center;
  }
  @media (max-width: 991px) {
    .sub {
      font-size: 40px;
      white-space: initial;
      padding: 0 20px;
    }
  }
  .profile-backgorund {
    border-radius: 20px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.59);
    background-color: #FAEBCD;
    margin-top: 35px;
    width: 707px;
    max-width: 100%;
    padding: 80px 66px;
  }
  @media (max-width: 991px) {
    .profile-backgorund {
      padding: 0 20px;
    }
  }
  .div-11 {
    gap: 20px;
    display: flex;
  }
  @media (max-width: 991px) {
    .div-11 {
      flex-direction: column;
      align-items: stretch;
      gap: 0px;
    }
  }
  .left {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 50%;
    margin-left: 0px;
  }
  @media (max-width: 991px) {
    .left {
      width: 100%;
    }
  }
  .div-12 {
    display: flex;
    flex-direction: column;
    align-self: stretch;
    font-size: 20px;
    color: #000;
    font-weight: 700;
    white-space: nowrap;
    line-height: 150%;
    margin: auto 0;
  }
  @media (max-width: 991px) {
    .div-12 {
      margin-top: 40px;
      white-space: initial;
    }
  }
  .img-6 {
    aspect-ratio: 1.02;
    object-fit: auto;
    object-position: center;
    width: 100%;
    
  }
  .div-13 {
    border-radius: 15px;
    background-color: #d9d9d9;
    display: flex;
    margin-top: 20px;
    gap: 5%;
    font-size: large;
    justify-content: space-between;
    padding: 10px 38px 10px 80px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.59);
  }
  @media (max-width: 991px) {
    .div-13 {
      white-space: initial;
      padding: 0 20px;
    }
  }
  .div-13:hover{
    background-color: #f2f2f2;
  }
  .div-14 {
    font-family: Inter, sans-serif;
    padding-left: 20%;
  }
  .img-7 {
    aspect-ratio: 1.23;
    object-fit: auto;
    object-position: center;
    width: 26px;
    fill: #000;
  }
  .right {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 40%;
    margin-left: 10%;
  }
  @media (max-width: 991px) {
    .right {
      width: 100%;
    }
  }
  .div-15 {
    display: flex;
    margin-top: 48px;
    flex-direction: column;
    margin: 10% 5% 10% 5%;
    font-size :xx-large;
    color: #000;
    font-weight: 800;
    line-height: 150%;
    font-family: "Nanum Myeongjo", sans-serif;
    background-color: #F8F8F8;
    border-radius: 14px;
    padding : 30% 15% 30% 15%;
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.59);
  }
  @media (max-width: 991px) {
    .div-15 {
      margin-top: 40px;
    }
  }

  .div-17 {

    margin-top: 19px;
  }
  .div-18 {
    margin-top: 18px;
  }

  .do-hyeon-regular {
  font-family: "Do Hyeon", sans-serif;
  font-weight: 400;
  font-style: normal;
}

  </style>