<template>
    <div class="div">
      <div class="div-2">
        <div class="div-3">
          <div class="column">
            <img
              loading="lazy"
              alt=""
              srcSet="..."
              class="img"
            />
          </div>
          <div class="column-2">
            <div class="div-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a38a17e54f982150d730afe591af9aaa99a470291034728bc23316f38e8f12f9?"
                class="img-2"
              />
              <div class="div-5">
                <div class="div-6">6월</div>
                <div class="div-7"><span style="font-size: 25px">2024</span></div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b1fc64b8714c7fdd5dacfa9174a89da8e0b35a3672f0c8376fd659186d64c2f?"
                class="img-3"
              />
            </div>
          </div>
          <div class="column-3">
            <div class="div-8">
              <img
                loading="lazy"
                srcSet="..."
                class="img-4"
              /><img
                loading="lazy"
                srcSet="..."
                class="img-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  
  <style scoped>
  .div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .div-2 {
    background-color: #f7c873;
    width: 100%;
    padding: 46px 32px 19px;
  }
  @media (max-width: 991px) {
    .div-2 {
      max-width: 100%;
      padding: 0 20px;
    }
  }
  .div-3 {
    gap: 20px;
    display: flex;
  }
  @media (max-width: 991px) {
    .div-3 {
      flex-direction: column;
      align-items: stretch;
      gap: 0px;
    }
  }
  .column {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 42%;
    margin-left: 0px;
  }
  @media (max-width: 991px) {
    .column {
      width: 100%;
    }
  }
  .img {
    aspect-ratio: 2.7;
    object-fit: auto;
    object-position: center;
    width: 293px;
    max-width: 100%;
    flex-grow: 1;
  }
  @media (max-width: 991px) {
    .img {
      margin-top: 40px;
    }
  }
  .column-2 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 17%;
    margin-left: 20px;
  }
  @media (max-width: 991px) {
    .column-2 {
      width: 100%;
    }
  }
  .div-4 {
    display: flex;
    align-items: end;
    gap: 20px;
    align-self: stretch;
    font-size: 40px;
    color: #434343;
    justify-content: space-between;
    margin: auto 0;
  }
  @media (max-width: 991px) {
    .div-4 {
      margin-top: 40px;
    }
  }
  .img-2 {
    aspect-ratio: 0.56;
    object-fit: auto;
    object-position: center;
    width: 18px;
    fill: #434343;
    margin-top: 26px;
  }
  .div-5 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
  }
  .div-6 {
    font-family: Inter, sans-serif;
    font-weight: 700;
  }
  .div-7 {
    font-family: Inter, sans-serif;
    font-weight: 400;
    margin-top: 11px;
  }
  .img-3 {
    aspect-ratio: 0.56;
    object-fit: auto;
    object-position: center;
    width: 18px;
    fill: #434343;
    margin-top: 26px;
  }
  .column-3 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 41%;
    margin-left: 20px;
  }
  @media (max-width: 991px) {
    .column-3 {
      width: 100%;
    }
  }
  .div-8 {
    display: flex;
    gap: 20px;
    align-self: stretch;
    justify-content: space-between;
    margin: auto 0;
  }
  @media (max-width: 991px) {
    .div-8 {
      margin-top: 40px;
    }
  }
  .img-4 {
    aspect-ratio: 4;
    object-fit: auto;
    object-position: center;
    width: 160px;
    max-width: 100%;
    margin: auto 0;
  }
  .img-5 {
    aspect-ratio: 1.85;
    object-fit: auto;
    object-position: center;
    width: 83px;
  }
  </style>