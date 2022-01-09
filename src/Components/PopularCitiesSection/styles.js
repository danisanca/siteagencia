import styled from 'styled-components'


export const PopularContainer = styled.section`
width: 100%;
display: flex;
justify-content: center;
background: var(--backg-white);

`
export const PopularContent = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

position: relative;
`
export const TextBox = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
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
width: 364px;
height: 490px;
margin: 15px;
position: relative;
flex:none;

img{
    width: 100%;
    height: 100%;
    overflow:cover;
    border-radius: 16px;
}
.textcontent{
    position: absolute;
    top:0;
    width: 100%;
    height: 100%;
    padding:30px;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    .title{
        width: max-content;
        height: 30px;
        padding: 4px;
        display: flex;
        border-radius: 50px;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(4px);
        h1{
            font-family: Poppins;
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 20px;
            letter-spacing: -0.01em;
            color: #E9EBF3;
        }
    }
    .infos{
        width: 100%;
        h1{
            font-family: Poppins;
            font-style: normal;
            font-weight: bold;
            font-size: 34px;
            line-height: 34px;
            color: #FFFFFF;
            margin-bottom: 10px;
            background: none;
        }
        span{
            font-family: Poppins;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 16px;
            letter-spacing: -0.02em;
            color: #FFFFFF;
            opacity: 0.9;
        }
    }
}
@media (max-width:650px){
        max-width: 95%;
    }
`