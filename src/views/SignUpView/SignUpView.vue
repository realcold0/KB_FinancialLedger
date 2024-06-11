<template>
    <div class="dive">
      <div class="dive-9">회원가입</div>
        <SignUp/>
    </div>
  </template>
<script setup>
import SignUp from './components/SignUp.vue';
</script>


  <style scoped>
  .dive {
    margin-top: 10%;
    display: flex;
    padding-bottom: 80px;
    flex-direction: column;
    align-items: center;
  }
  .dive-9 {
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
    margin-top: -19px;
    width: 590px;
    max-width: 100%;
    color: #434343;
    white-space: nowrap;
    padding: 12px 47px;
    font: 400 48px Actor, sans-serif;
    text-align: center;
  }
  @media (max-width: 991px) {
    .dive-9 {
      font-size: 40px;
      white-space: initial;
      padding: 0 20px;
    }
  }
  
  </style>