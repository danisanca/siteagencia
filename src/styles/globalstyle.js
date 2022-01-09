import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
:root{

    --Button-blue:#34A5E4;
    --Button-gray:#777F96;
    //Text Colors
    --Text-gray:#AFAEB4;

    //Button Colors
    --backg-white:#F5F6F8;
    --backg-white-100:#e2e2e2;
    
    //background
    --backg-black-800:#1e1e20;
    --backg-black-750:#28282b;
    
}
html{
    @media (max-width:1080px){
        font-size: 93.75%;
    }
    @media (max-width:720px){
        font-size: 87.5%;
    }
}
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
body{
   
    -webkit-font-smoothing:antialiased;
}
ul{
    list-style: none;
}
a{
    text-decoration:none;
}
body,input,textarea,button{
    font-family: 'Poppins',sans-serif;
    font-weight:400;
}
h1,h2,h3,h4,h5,h6, strong{
        font-weight: 600;
}
button{
    cursor: pointer;
}
.ReactModal__Overlay{
    background:rgba(0,0,0,0.5);
    position:fixed;
    top:0;
    bottom:0;
    right: 0;
    left:0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.ReactModal__Content{
    width: 100%;
    max-width: 576px;
    background: var(--backg-white-100);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
    overflow: hidden;
   
    @media (max-width:500px){
        width: 96%;

    }
}


`