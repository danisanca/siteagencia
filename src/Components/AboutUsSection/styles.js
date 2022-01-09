import styled from "styled-components";


export const AboutContainer = styled.section`
width: 100%;
display: flex;
justify-content: center;
background: var(--backg-white-100);
`
export const AboutContent = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
`

export const TextBoxContent = styled.section`
margin-top: 70px;
margin-bottom: 80px;
display: flex;
justify-content: space-around;
align-items: center;

.boxTextContent{
    width: 420px;
    text-align: center;
    padding:4px 8px;
    & + .boxTextContent{
        width: 500px;
    }

    p{
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.17em;
        color: #4141A5;
    }
    h1{
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 52px;
        color: #292929;
    }
    span{
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 28px;
        color: #5C6272;
    }
    @media (max-width:650px){
        width: 95%;
        & + .boxTextContent{
            width: 95%;
    }
        h1{
            font-size: 32px;
        }
        span{
            font-size: 12px;
        }
    }
}

@media (max-width:650px){
flex-direction: column; 
}

`

export const Carrosel = styled.section`
display: flex;
justify-content: center;

.carroselContent{
    max-width: 85%;
    display: flex;
    scroll-behavior: smooth;
    overflow-x: auto;
    ::-webkit-scrollbar{
        display: none;
    }
    @media (max-width:650px){
        max-width: 95%;
    }
}
`

export const Card = styled.section`
width: 540px;
margin:0 10px;
background: #fff;
flex:none;
position: relative;

.imgContent{
    width: 100%;
    height: 50%;
    padding:4px;
    img{
        width: 100%;
        height: 100%;
        overflow: cover;
    }
}

.iconAspContent{
width: 88px;
height: 88px;
border-radius: 50%;
background: #f3f3f3;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top:43%;
left: 5%;
}

.descriptionContent{
    width: 100%;
    padding:40px;
    display: flex;
    flex-direction: column;
    h3{
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 45px;
        letter-spacing: -0.02em;
        color: #292929;
        margin-bottom: 20px;
    }
    p{
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 28px;
        color: #5C6272;
    }
    @media (max-width:650px){
      h3{
        font-size: 24px;
      }  
      p{
        font-size: 14px;
      }
    }
}
@media (max-width:650px){
    width: 98%;
}
`

export const SelectCards = styled.section`
margin-bottom: 70px;
margin-top: 8px;
width: 100%;
display: flex;
padding:4px 0;
justify-content: right;

button{
    width: 40px;
    height: 40px;
    font-size:1.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border:none;
    background: white;
    
    & + button{
        margin-left: 10px;
        margin-right: 30px;
    }
    :hover{
        transition: all 0.5s;
        background:#d7d7d7;
    }
}

`