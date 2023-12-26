<template>
    <header>
        <img src="https://avatars.githubusercontent.com/u/66073336?v=4" alt="my github profile picture">
        <h1>MYEONG SOYI</h1>
        <p>
        안녕하세요 개발자 명소이입니다.
        </p>
    </header>
</template>

<script setup>

</script>

<style scoped>
  header{
      background-color: antiquewhite;
      padding-top: 5rem;
      padding-bottom: 5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  header>img{
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
  }

  @media (min-width: 830px) and (max-width : 1279px){
    header{
          width: 30vw;
          justify-content: flex-start;
      }
  }

  @media (min-width : 1280px){
    header{
          width: 384px;
          justify-content: flex-start;
      }
  }
</style>