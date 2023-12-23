<template>
    <div>
      <nav>
          <a> MYEONG SOYI</a>
          <div>
              <a>home</a>
              <a>blog</a>
              <a>resume</a>
          </div>
      </nav>
      <div id="laptops">
          <div id="tab">
              <header>
                  <img src="https://avatars.githubusercontent.com/u/66073336?v=4" alt="my github profile picture">
                  <h1>MYEONG SOYI</h1>
                  <p>
                    안녕하세요 개발자 명소이입니다.
                  </p>
              </header>
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
  
  @media (max-width: 480px){
      /* smaller smartphones */
      article{
          width: 300px;
          height: 200px;
          margin: 5vw;
          padding: 5vw;
      }
  }
  
  @media (min-width: 481px) and (max-width : 829px){
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
      header{
          width: 30vw;
          justify-content: flex-start;
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
          height: 100vh;
      }
      #tab{
          display: flex;
      }
      nav{
          margin: auto;
          width: 1280px;
      }
      header{
          width: 384px;
          box-sizing: border-box;
          justify-content: flex-start;
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
          height: 90vh;
          padding: 1rem;
          box-sizing: border-box;
          flex-direction: column;
          justify-content: flex-start;
      }
  }
  </style>