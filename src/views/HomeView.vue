<template>
    <div>
      <nav>
          <a> MYEONG SOYI</a>
          <div>
              <a>home</a>
              <a>blog</a>
              <a>about me</a>
          </div>
      </nav>
      <div id="laptops">
          <div id="tab">
              <Header></Header>
              <main>
                  <article>
                      <img src="../assets/img/pageimg.jpg" alt="프로젝트이름 page image">
                      <h2>프로젝트이름</h2>
                  </article>
                  <article>
                      <img src="../assets/img/pageimg.jpg" alt="프로젝트이름 page image">
                      <h2>프로젝트이름</h2>
                  </article>
                  <article>
                      <img src="../assets/img/pageimg.jpg" alt="프로젝트이름 page image">
                      <h2>프로젝트이름</h2>
                  </article>
                  
              </main>
          </div>
          <footer>
              <p>This is also me!</p>
              <div>
                  <img src="../assets/img/email.png" alt="click here to email me">
                  <img src="../assets/img/github.png" alt="click here to peep my GitHub">
              </div>
              
          </footer>
      </div>
    </div>
  </template>
  
  <script setup>
  import Header from '@/components/Header.vue';
  </script>
  
  <style scoped>
  body{
      margin: 0;
  }
  h1{
      margin: 0;
  }
  h2{
      margin: 0;
  }
  p{
      margin: 0;
  }
  nav{
      height: 10vh;
      position:sticky;
      top: 0;
      background-color: gainsboro;
      display: flex;
      justify-content:space-around;
      align-items: center;
  }
  nav>div>a{
      border-radius: 2rem;
      padding : 0.5rem;
  }
  nav>div>a:hover{
      background-color: beige;
  }

  main{
      background-color: cadetblue;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: fit-content;
  }
  article{
      background-color: aliceblue;
      width: 250px;
      height: 120px;
      padding: 1rem;
      margin: 1rem;
      text-align: center;
  }
  article>img{
      width: 200px;
      height: 100px;;
      object-fit: contain;
  }
  article:hover{
      position: relative;
      top : -5px;
  }
  footer{
      /* height: 10vh; */
      background-color:khaki;
      display: flex;
      justify-content:space-evenly;
      align-items: center;
  }
  footer img{
      width: 1.5rem;
      height: 1.5rem;
      margin:1rem;
      object-fit: contain;
  }
  
  @media (max-width: 649px){
      /* smaller smartphones */
      article{
          /* width: 300px;
          height: 200px;
          margin: 5vw;
          padding: 5vw; */
          width: 60vw;
          height: 40vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
      }
  }
  
  @media (min-width: 650px) and (max-width : 829px){
      /* tablets & larger smartphones */
      #tab{
          display: flex;
          /* height: 100vh; */
      }
      header{
          width: 40%;
      }
      main{
          width: 60%;
      }
  }
  
  @media (min-width: 830px) and (max-width : 1279px){
      /* laptops, larger tablets in landscape, small desktops */
      #laptops{
          display: flex;
          /* height: 100vh; */
      }
      #tab{
          display: flex;
          /* height: 100vh; */
      }
      main{
          width: 50vw;
      }
      footer{
          width: 20vw;
          /* height: fit-content; */
          padding: 1rem;
          flex-direction: column;
          justify-content: flex-start;
      }
  }
  
  @media (min-width : 1280px){
      /* larger desktops and monitors */
      #laptops{
          display: flex;
          justify-content: center;
          width: 1280px;
          margin: auto;
          /* height: 100vh; */
      }
      #tab{
          display: flex;
      }
      nav{
          margin: auto;
          width: 1280px;
      }
      main{
          width: 640px;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          align-content: baseline;
  
      }
      footer{
          width: 256px;
          /* height: 90vh; */
          padding: 1rem;
          /* box-sizing: border-box; */
          flex-direction: column;
          justify-content: flex-start;
      }
  }
  </style>