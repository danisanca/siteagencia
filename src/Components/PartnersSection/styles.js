import styled from "styled-components";

export const PartnersContainer = styled.section`
width: 100%;
display: flex;
justify-content: center;
background: var(--backg-white-100);

`

export const PartnersContent = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

`
export const TextBox = styled.div`
text-align:center;

h1{
    margin-top: 70px;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 45px;
    line-height: 58px;
    text-align: center;
    letter-spacing: -0.01em;
    color: #1E2A39;
}
p{
    margin-top: 16px;
    margin-bottom: 80px;
    font-family: Poppins;
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
export const PartnersImg = styled.div`
width: 100%;

ul{
    margin-bottom: 75px;
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    li{
        margin:16px 16px;
    }
}

`