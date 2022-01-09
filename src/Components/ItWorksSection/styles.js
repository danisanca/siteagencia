import styled from "styled-components";


export const ItWorksContainer = styled.section`
width: 100%;
display:flex;
justify-content:center;
background: var(--backg-white);


`
export const ItWorksContent = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;

`
export const TextsContent = styled.div`
width: 95%;
display: flex;
flex-direction: column;
text-align: center;
margin-top: 50px;
    h1{
    font-style: normal;
    font-weight: bold;
    font-size: 45px;
    line-height: 58px;
    @media(max-width:690px){
        font-size: 38px
    }
    }
    p{
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    @media(max-width:690px){
        font-size: 14px
    }
    }


`
export const CardsContent = styled.div`
display:flex;
width: 100%;
justify-content: center;
margin-bottom: 50px;
ul{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top:20px;

    .cardItem{
        width: 326px;
        height: 300px;
        background: white;
        margin: 16px 10px;
        box-shadow: 1px 1px 5px black;
        padding:20px;
        .imgbox{
            width: 90px;
            height: 90px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        h3{
            margin-top: 50px;
        }
        p{
            margin-top: 8px;
        }
    }
    
}
`