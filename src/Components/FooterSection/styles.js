import styled from "styled-components";

export const FooterContainer = styled.footer`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
background: var(--backg-white-100);

`

export const Subscription = styled.div`
width: 100%;
display: flex;
justify-content: center;
`

export const SubsContent = styled.div`
width: 80%;
height: 250px;
display: flex;
justify-content: space-around;
align-items: center;

position: relative;

    img{
    position: absolute;
        width:100%;
        height: 100%;
        overflow: cover;
    }
    .boxText{
        width: 40%;
        z-index: 2;
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 4px;
        h1{
            font-style: normal;
            font-weight: bold;
            font-size: 40px;
            line-height: 52px;
            letter-spacing: -0.5px;
            color: #FFFFFF;
            @media (max-width:900px){
                font-size: 28px;
            }
        }
        p{
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 28px;
            color: #FFFFFF;
            opacity: 0.88;
            @media (max-width:900px){
                font-size: 12px;
            }
        }
        @media (max-width:690px){
            width: 90%;
        }
    }
    .inputBox{
        width: 40%;
        height: 70px;
        padding: 4px;
        background: white;
        z-index: 2;
        display: flex;
        justify-content: space-between;
        align-items: center;
        input{
            width: 70%;
            height: 95%;
            border:none;
            margin-right: 8px;
            padding:0 5px
        }
        button{
            width: 130px;
            height: 55px;
            border-radius: 8px;
            border:none;
            background: #0F415C;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            letter-spacing: -0.02em;
            text-transform: capitalize;
            color: #FFFFFF;
            &:hover{
                opacity: 0.9;
            }
        }
        @media (max-width:690px){
            width: 90%;
        }
    }

@media (max-width:1120px){
    width: 98%;
}
@media (max-width:690px){
    flex-direction: column;
}

`

export const InfosContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
background:#10100E;
margin-top: -125px;
`

export const InfosContent = styled.div`
width: 100%;
max-width: 1280px;
display: flex;
padding: 64px 16px;
align-items: flex-end;
margin-top: 110px;


.logoContent{
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    p{
        margin-top: 38px;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.01em;
        color: #FFFFFF;
        opacity: 0.5;
        @media (max-width:900px){
            font-size: 12px;
        }
    }
    
    @media (max-width:690px){
        width: 90%;
        margin-bottom: 32px;
    }
}
.redesSociais{
    width: 50%;
    display: flex;
    justify-content: center;
    ul{
        width: 100%;
        display:flex;
        flex-wrap: wrap;
        justify-content: center;
        li{
            padding:0 8px;
            margin-bottom: 8px;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: -0.01em;
            color: rgba(255, 255, 255, 0.84);
            display: flex;
            .IconBox{
                width: 25px;
                height: 25px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.24);
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 4px;
            }
            &:hover .faceIcon {
                background: #1778F2;
            }
            &:hover .linkeIcon {
                background: #0A7BBA;
            }
            &:hover .twitIcon {
                background: #55ACEE;
            }
            &:hover .pintIcon {
                background: #CC2127;
            }
        }
    }
    
    @media (max-width:690px){
        width: 90%;
        margin-bottom: 32px;
    }
}
.recentsPostContent{
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        color: #FFFFFF;
        @media (max-width:900px){
            font-size: 16px;
        }
    }
    a{
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.01em;
        color: #FFFFFF;
        opacity: 0.5;
        @media (max-width:900px){
            font-size: 12px;
        }
    }
    
    @media (max-width:690px){
        width: 90%;
    }
}


@media (max-width:690px){
    flex-direction: column;
    align-items: center;
}
`
