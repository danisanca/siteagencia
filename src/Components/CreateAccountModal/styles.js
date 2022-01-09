import styled from "styled-components";



export const ContentBox = styled.div `
display: flex;
align-items: center;
width: 100%;
flex-direction: column;

.buttonClose{
    position:absolute;
    right:20px;
    top:20px;
    font-size: 1.5rem;
    color:#a8a8a8;
}

.texbox{
    margin-bottom: 50px;
}


form{
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
        width: 80%;
        height: 30px;
        border:none;
        border-radius: 3px;
        padding:0 3px;
        & + input{
            margin-top: 20px;
        }
        :focus{
            border:none;
            outline: none;
        }
    }
}


.buttonbox{
    width: 100%;
    display: flex;
    justify-content: center;

    button{
        width: 152px;
        height: 46px;
        margin-top: 30px;
        border:none;
        background: #EE6D52;
        border-radius: 4px;
        

        :hover{
            box-shadow: 1px 1px 5px ;
            opacity: 0.9;
        }
    }
}

`
