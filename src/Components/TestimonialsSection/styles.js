import styled from 'styled-components'


export const PopularContainer = styled.section`
width: 100%;
display: flex;
justify-content: center;
background: var(--backg-white-100);
`

export const PopularContent = styled.div`
width: 100%;
max-width: 1280px;
display: flex;
flex-direction: column;
align-items: center;

position: relative;
`

export const TextBox = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
margin-top: 90px;
padding:16px;
margin-bottom: 60px;

span{
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.17em;
    color: #4141A5;
    @media (max-width:400px){
        font-size: 12px;
    }
}
h1{
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 52px;
    letter-spacing: -0.5px;
    color: #292929;
    @media (max-width:400px){
        font-size: 30px;
    }
}
p{
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    color: #5C6272;
    @media (max-width:400px){
        font-size: 12px;
    }
}

`

export const SelectButtons = styled.div`
position: absolute;
right:5%;
top:240px;
display: flex;
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
    @media (max-width:700px){
        right:3%;
        top:260px;  
    }

`

export const CaroselContent = styled.div`
width: 95%;
display: flex;
scroll-behavior: smooth;
overflow-x: auto;
margin-bottom: 90px;
::-webkit-scrollbar{
    display: none;
}

`

export const Card = styled.div`
width: 300px;
height: 385px;
margin: 15px;
position: relative;
flex:none;
img{
        position: absolute;
        margin-left: 110px;
        width: 77px;
        height: 77px;
        background: white;
        border-radius: 50%;
        margin-top: 8px;
        filter: drop-shadow(0px 30px 70px rgba(41, 33, 74, 0.1));
    }
.cardContent{
    width: 100%;
    height: 88%;
    margin-top: 15%;
    background: white;
    padding: 30px;
    .user{
            width: 100%;
            height: 40%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

    
            h1{
                font-family: Poppins;
                font-style: normal;
                font-weight: 600;
                font-size: 20px;
                line-height: 24px;
                text-align: center;
                letter-spacing: -0.02em;
                color: #292929;
                margin-top: 60px;
            }
            span{
                font-family: Poppins;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 14px;
                text-align: center;
                letter-spacing: -0.02em;
                color: #6D7487;
            }

    }
    hr{
        border:1px solid #EFEFEF;
    }
    .feedback{
    width: 100%;
    height: 60%;
    background: white;
    flex-direction: column;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;

    .nota{
        width: 100%;
    }
    p{
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: #646670;
    }

    }

}
.starContent{
    display: flex;

    .starIcon{
        margin-left: 2px;
        color:#fee116;
    }
}


@media (max-width:650px){
        max-width: 95%;
    }
`