<template>
      <div class="div-10">

        <div class="div-11">
        <div class="div-12">아이디 :</div>
            <input v-model="data.id" class="div-13" type="text" placeholder="아이디를 입력하세요.">
        </div>

        <div class="div-14">
        <div class="div-15">비밀번호 :</div>
            <input v-model="data.pw" class="div-16" type="password" placeholder="비밀번호를 입력하세요.">
        </div>

        <div class="div-17">
            <button @click="checkId" type="submit" class="div-18">로그인</button>
            <RouterLink :to="{name : 'signup'}" type="button" class="div-19">회원가입</RouterLink>
        </div>

    </div>
</template>
<script setup>
import { reactive } from 'vue';
import axios from 'axios';

const data = reactive({"id" : "", "pw" : ""});

const checkId = () => {
    axios.get(`http://localhost:3001/user?userId=${data.id}`)
    .then(res => {
        //console.log(res.data[0]);
        if(res.data.length < 1) {
            alert("아이디를 확인 하십시오.");
            return;
        }
        if((res.data[0].userPw.trim() != data.pw.trim())){
            //console.log(data.pw, res.data[0].userPw);
            alert("비밀번호를 확인 하십시오.");
            return;
        }
        alert("로그인 성공");
        sessionStorage.setItem("id", data.id);
        //console.log(res.data);
    })
    .catch(e => {
        console.log(e);
        alert("에러. 관리자에게 문의하십시오.")
    })
}



</script>

<style scoped>
    .div-10 {
    border-radius: 20px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: #faebcd;
    display: flex;
    margin-top: 42px;
    width: 662px;
    max-width: 100%;
    flex-direction: column;
    font-weight: 500;
    line-height: 150%;
    padding: 69px 48px 40px;
  }
  @media (max-width: 991px) {
    .div-10 {
      margin-top: 40px;
      padding: 0 20px;
    }
  }
  .div-11 {
    display: flex;
    gap: 5%;
  }
  @media (max-width: 991px) {
    .div-11 {
      max-width: 100%;
      flex-wrap: wrap;
    }
  }
  .div-12 {
    color: #434343;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    -webkit-text-stroke-width: 1;
    -webkit-text-stroke-color: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0);
    border-style: solid;
    border-width: 1px;
    width: 25%;
    text-align: start;
    font: 36px Inter, sans-serif;
    padding-left: 10%;
  }
  .div-13 {
    align-items: start;
    border-radius: 8px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
    border-color: rgba(224, 224, 224, 1);
    border-style: solid;
    border-width: 1px;
    background-color: #fff;
    color: #828282;
    flex-grow: 1;
    width: fit-content;
    margin: auto 0;
    padding: 2%;
    font: 16px Inter, sans-serif;
  }
  @media (max-width: 991px) {
    .div-13 {
      max-width: 100%;
      padding-right: 20px;
    }
  }
  .div-14 {
    display: flex;
    margin-top: 38px;
    gap: 5%;
  }
  @media (max-width: 991px) {
    .div-14 {
      max-width: 100%;
      flex-wrap: wrap;
    }
  }
  .div-15 {
    color: #434343;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font: 36px Inter, sans-serif;
    text-align: start;
    padding-left :10%;
    width: 25%;
  }
  .div-16 {
    align-items: start;
    border-radius: 8px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
    border-color: rgba(224, 224, 224, 1);
    border-style: solid;
    border-width: 1px;
    background-color: #fff;
    color: #828282;
    flex-grow: 1;
    width: fit-content;
    margin: auto 0;
    padding: 2%;
    font: 16px Inter, sans-serif;
  }
  @media (max-width: 991px) {
    .div-16 {
      max-width: 100%;
      padding-right: 20px;
    }
  }
  .div-17 {
    align-self: center;
    display: flex;
    margin-top: 10%;
    width: 60%;
    max-width: 100%;
    gap: 10px;
    font-size: 24px;
    color: #fff;
    white-space: nowrap;
    justify-content: space-between;
  }
  @media (max-width: 991px) {
    .div-17 {
      flex-wrap: wrap;
      margin-top: 40px;
      white-space: initial;
    }
  }
  .div-18 {
    font-family: Inter, sans-serif;
    cursor: pointer;
    font-size: larger;
    justify-content: center;
    border-radius: 8px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
    background-color: #434343;
    color: white;
    padding: 4% 6%;
    border-style: none;
  }
  @media (max-width: 991px) {
    .div-18 {
      white-space: initial;
      padding: 0 24px;
    }
  }
  .div-18:hover{
    background-color: #5c5c5c;
  }

  .div-19 {
    font-family: Inter, sans-serif;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
    font-size: larger;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
    background-color: #828282;
    padding: 5% 6%;
    color: white;
    border-style: none;
    text-decoration: none;
  }
  @media (max-width: 991px) {
    .div-19 {
      white-space: initial;
      padding: 0 20px;
    }
  }
  .div-19:hover {
    background-color: #8e8e8c;
  }
</style>