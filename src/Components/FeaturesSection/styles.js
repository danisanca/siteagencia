import styled from 'styled-components'


export const FeaturesContainer = styled.section`
width: 100%;
display: flex;
justify-content: center;
background: var(--backg-white);
`
export const FeaturesContent = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
`
export const TextContent = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 80px;

h1{
    margin-top: 50px;
    font-style: normal;
    font-weight: bold;
    font-size: 45px;
    line-height: 58px;
    text-align: center;
    letter-spacing: -0.01em;
    color: #1E2A39;
}
p{
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #5C6272;
    
}
@media (max-width:500px){
    width: 90%;
}
`
export const CardsContent = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-bottom: 80px;

`
export const Card = styled.div`
width: 280px;
height: 380px;
display:flex;
flex-direction: column;
flex:none;
background: white;
padding:10px;
margin:8px;
border-radius: 12px;

.imgbox{
    height: 70%;

    img{
        width: 100%;
        height: 100%;
        overflow: cover;
        border-radius: 12px;
    }
}
h1{
text-align: center;
margin: 20px 0 0px 0;
}
.infosPlace{
    display: flex;
     justify-content: center;
     align-items: center;
     margin-top: 16px;
     font-size: 1.5rem;
     color: #7C8291;
     span{
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 16px;
        letter-spacing: -0.01em;
        color: #7C8291;
        margin-left: 3px;
     }
     p{
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 16px;
        text-align: right;
        letter-spacing: -0.01em;
        color: #EE6D52;
        margin-left: 32px;
     }
}
`