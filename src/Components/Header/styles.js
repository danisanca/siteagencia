import styled from "styled-components";
import imgBackground  from '../../Assets/img/imgBackground.png';

export const HeaderContainer=styled.header`
display: flex;
justify-content: center;
height: 800px;
`

export const HeaderContent=styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 100%;
background-image: linear-gradient(102.17deg, rgba(2, 0, 17, 0.76) 6.5%, rgba(23, 31, 65, 0.569182) 42.52%, rgba(21, 31, 66, 0.51) 52.61%, rgba(21, 34, 74, 0.604157) 61.37%, rgba(0, 10, 31, 0.8) 100%),url(${imgBackground});
background-repeat: no-repeat;
background-size:100% 100%;
overflow: cover;
`

export const NavBar=styled.div`
width: 100%;
height: 56px;
display: flex;
margin-top: 29px;
align-items: center;
justify-content: space-around;


@media (max-width:891px ){
      justify-content:space-between;
}

.LogoContent{
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 8px;
    img{
        width: 100px;
        @media (max-width:480px ){
            padding:1rem;
        }
    }
    @media (max-width:700px ){
        margin-left: 25px;
    }
    @media (max-width:550px ){
        margin-left: 50px;
    }

}

.navContainer{
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media (max-width:891px ){
      justify-content:space-between;
    }
    .navContent{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;

        .menuContent{
        width: 67%;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        text-decoration: none;
        li{
            a{
                font-family: Poppins;
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                color: rgba(255, 255, 255, 0.88);
                :hover{
                    transition: color 0.5s;
                    color:var(--backg-black-750);
                }
            }
            & + li{
                margin-left: 30px;
            }
        }
        
        }
   
        .painelContent{
            width: 30%;
            display: flex;

            #buttonContent{
                display: flex;
                align-items: center;
                justify-content: center;
                button{
                    & + button{
                        margin-left: 25px;
                    }
                }
            }

            #loginContent{
                width: 100%;
                display:none;
                align-items: center;
                justify-content: space-between;
                .voltarMenu{
                        font-size: 1.5rem;
                        margin-right: 8px;
                        color: white;
                }

                .logindata{
                    width: 55%;
                    
                    input{
                        width: 100%;
                        height: 25px;
                        padding:6px;
                        :focus{
                            outline:none;
                        }
                    }
                }
                

                .btnlogar{
                    width: 40%;
                    display: flex;
                    justify-content: center;
                    button{
                        width: 80px;
                        height: 40px;
                     }  
                }
                
            }

            #userLogedContent{
                width: 100%;
                display:none;
                align-items: center;
                text-align: center;
                .boxtext{
                    width: 65%;
                    h4{
                    width:95%;
                    padding:4px;
                    word-break: break-all;
                    color: white;
                    font-family: Arial, Helvetica, sans-serif;
                    span{
                        font-size: 14px;
                        color:#EE6D52;
                        text-decoration: underline;
                    }
                }
                }
                
                button{
                    width: 30%;
                    height: 35px;
                }
            }

        }


        button{
                &:hover{
                    transition: all 0.5s;
                    background: rgba(255, 255, 255, 0.10);
                }
        }
    }
   
    @media (max-width:891px ){
     display:none;
    }
}

.navMobileContainer{
    @media (max-width:891px ){
      width: 100%;
       
        .navMobileContent{
            background: var(--backg-black-800);
            width: 100vw;
            height: 110vh;
            position: absolute;
            right:0;
            top: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: opacity 0.5s;
            z-index:100;

            ul{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding:2rem 0 ;
            li{
                width: 70%;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding:1.5rem 0 ;
                :hover{
                    transition: all 0.5s;
                    background: var(--backg-black-750);;
                }
            }
            a{
                color:white;
            }
        
            }

            .painelContent{
                width: 100%;
                display: flex;
                justify-content: center;

                #buttonContent{
                    width: 80%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    
                }

                #loginContent{
                    width: 100%;
                    display:none;
                    flex-direction: column;
                    align-items: center;
                    .voltarMenu{
                        display:none;
                }
                    .logindata{
                        width: 55%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;

                        input{
                            width: 100%;
                            height: 25px;
                            padding:0 6px;
                            & + input {
                                margin-top: 4px;
                            }
                        :focus{
                            outline:none;
                        }
                    }
                    }
                    

                    .btnlogar{
                        width: 40%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        button{
                            width: 80px;
                            height: 40px;
                        }  
                    }
                    
                }

                #userLogedContent{
                    width: 70%;
                    display:none;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    h4{
                        width: 95%;
                        color: white;
                        font-family: Arial, Helvetica, sans-serif;
                        span{
                            color:#EE6D52;
                            text-decoration: underline;
                        }
                    }
                    button{
                        width: 30%;
                        height: 35px;
                    }
                }

            }

            .buttonContent{
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
       
        button{
            margin-top: 3rem;
            background: var(--backg-white);
            color:black;
        :hover{
            transition: opacity 0.5s;
            opacity: 0.8;
        }
    }
   }
    
}

.iconMobileContent{
    display:none;
    width: 10%;
    font-size: 1.8rem;
    color:white;
    z-index:500;
    margin-right:16px;
    @media (max-width:891px ){
        display:flex;
   }
}

button{
    color:white;
    width: 130px;
    height: 56px;
    background:transparent ;
    border: 1px solid var(--Button-gray);
    border-radius:4px;
   
    & + button{
        width:70px;
        height: 45px;
        margin-left: 8px;
        margin-right: 4px;
    }
}
`

export const TextBox=styled.div`
margin-top: 191px;
color:white;
width: 640px;
height: 232px;
text-align: center;
h1{
font-style: normal;
font-weight: bold;
font-size: 62px;
line-height: 78px;
@media (max-width:891px ){
    font-size: 52px;
    line-height: 68px;
}
}
p{
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 28px;
@media (max-width:891px ){
    font-size: 16px;
    line-height: 24px;
}
}
@media (max-width:891px ){
    width:95%;
    margin-top: 121px;
    position: relative;
}

`

export const FormBusca=styled.div`
margin-top: 109px;
display: flex;

@media (max-width:891px ){
    width: 100%;
    justify-content:center;
    align-items:center;
    flex-direction:column;
}
.FormContent{
    width: 574px;
    height: 74px;
    background: white;
    border:1px solid none;
    border-radius: 4px;
    display: flex;
    padding-top:22px;
    align-content: center;

    @media (max-width:480px ){
        width: 80%;
        flex-direction:column;
        height:auto
    }
    @media (max-width:891px ){
        width: 80%;
        height:auto
    }
    
    img{
           width:15px;
           height:16px ;
           margin:0 4px;
           margin-left: 2rem;
        }

    .SearchDestination {
        display: flex;
        align-items: center;
        width:45%;
        margin-bottom: 1rem;
       
        input{
            width: 100%;
        }
        @media (max-width:891px ){
         width: 100%;
        }
    }
    .C-Location{
        display: flex;
        align-items: center;
        width:30%;
        margin-bottom: 1rem;
        input{
            width: 100%;
        }
        @media (max-width:891px ){
         width: 100%;
         margin-bottom: 1rem;
        }
    }
    .AmountPerson{
        display: flex;
        justify-content: center;
        width: 25%;
        margin-bottom: 1rem;
        padding:0 10px;
        select{
            display: flex;
            width: 100%;
            
            border:none;
            color: var(--Text-gray);
                :focus{
                    outline: none;
                    border:none;
                }
        }
        @media (max-width:480px ){
         width: 50%;
         margin-left:12%;
        }
        @media (max-width:891px ){
         width: 50%;
        }
    }
    input{
        height: 37px;
        border: none;
        border-right:2px solid #E6E6E6;
        box-sizing: border-box;
        padding:0 4px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;



        :focus{
            outline: none;
            border:none;
            border-right:2px solid #E6E6E6;
        }
    }
}

button{
    margin-left: 20px;
    width:152px ;
    height: 74px;
    color:white;
    background: var(--Button-blue);
    border:none;
    border-radius: 4px;
    @media (max-width:891px ){
        height: 60px;
        margin-top:1.5rem;
    }
    :hover{
        transition: opacity 0.5s;
        color:black;
        opacity: 0.8;
    }
}

`
