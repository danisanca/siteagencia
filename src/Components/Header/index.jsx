import React, { useEffect, useState} from 'react';
import { HeaderContainer,HeaderContent,NavBar,FormBusca,TextBox } from './styles';
import imgLogo  from '../../Assets/img/imgLogo.png';
import imgSearch  from '../../Assets/img/iconSearch.png';
import imgLocation  from '../../Assets/img/iconLocation.png';
import { FaBars, FaTimes} from 'react-icons/fa';
import { RiArrowGoBackFill} from 'react-icons/ri';
import { useModalContext } from '../../Contexts/ModalContext';
import axios from 'axios';


export function Header(){
    const [click, setClick] = useState(false);
    const [mVersion, setMVersion] = useState(false);
    const [opacityprops,setOpacity] = useState(1);
    const [logado, setLogado] = useState(false);
    //-
    
    //-
    const{openModal} = useModalContext();
    //-
    const openCreateModal = ()=>{
        openModal(openModal);
        closeMenu();
        
    }
    
    const handleClick = () =>{
        setClick(!click);
        setMVersion(!mVersion);
        setOpacity(0);
        controlScroll();
        window.scrollTo(0, 0);
        closeLoginMenu();
        
    } 

    function controlScroll(){
        if (click === false){
            document.querySelector('body').style.overflow = 'hidden';
        }
        else if(click === true){
            document.querySelector('body').style.overflow = 'visible';
        }
    }
    
    const closeMenu = () =>{
        if(click === true){
            handleClick();
        }
        
    }

    useEffect(()=>{
            setTimeout(()=>{
                setOpacity(1);
            },300);
        
            autenticacao();
            statusLogado();
    })

    window.addEventListener('resize', closeMenu);
    var axiosConfig={
        headers:{
            Authorization: "Bearer " + localStorage.getItem("token")
        }
    }

    function autenticacao(){
        var tokenStorage =localStorage.getItem("token");
        const usuario = document.getElementById('usuarioLogado');

        if(tokenStorage != null){
            axios.get("http://localhost:8001/auth",axiosConfig)
            .then(response =>{
                var usuariologged = response.data.usuario.email;
                    if(usuariologged !== undefined){
                        usuario.innerHTML = usuariologged;
                       setLogado(true);
                       console.log(usuariologged)
                    }
                    else{
                        usuario.innerHTML ="";
                        setLogado(false);
                    }
                
            });
        }
        else{
            setLogado(false);
        }
        
    }
   
    function statusLogado(){
        const btnsCreatLogin = document.getElementById('buttonContent');
        const painelLogin = document.getElementById('loginContent');
        const painelLogado = document.getElementById('userLogedContent');
        //Verifica se o usuario deixo autologin  e habilia o menu de logado e loga o usuario
        

        if(logado === false){
            btnsCreatLogin.style.display = "flex";
            painelLogin.style.display = "none";
            painelLogado.style.display = "none";
        }
        else{
            btnsCreatLogin.style.display = "none";
            painelLogin.style.display = "none";
            painelLogado.style.display = "flex";
        }
    }
     
    const handleLogin = () =>{
        let userfield = document.getElementById('user');
        let passwordfield = document.getElementById('password');
        var usuariofiled = document.getElementById('usuarioLogado');

        let email = userfield.value;
        let password = passwordfield.value;
        axios.post("http://localhost:8001/login",{email,password})

        .then(response =>{
            var token = response.data.Token;
            let usuario = response.data.usuario;
           
            localStorage.setItem("token",token);
            axiosConfig.headers.Authorization = "Bearer " + localStorage.getItem("token");
            usuariofiled.innerHTML = usuario;
            setLogado(true);
            statusLogado();

        }).catch(err => {
            alert("Login errado.");
        });
        
    }
    
    const handleDeslogar =() =>{
        setLogado(false);
        statusLogado();
        localStorage.removeItem("token")
    }

    const handleOpenLoginMenu = () =>{
        const btnsCreatLogin = document.getElementById('buttonContent');
        const painelLogin = document.getElementById('loginContent');

         btnsCreatLogin.style.display="none";

            if(btnsCreatLogin.style.display==="none"){
                painelLogin.style.display = 'flex';
            }
    }

    function closeLoginMenu(){
        const btnsCreatLogin = document.getElementById('buttonContent');
         const painelLogin = document.getElementById('loginContent');
           if(painelLogin.style.display==="flex"){
               painelLogin.style.display = 'none';
                btnsCreatLogin.style.display = 'flex';
           }
    }

    return (
        <HeaderContainer>
            <HeaderContent>
                <NavBar>
                    <div className="LogoContent">
                        <img src={imgLogo} alt="Icon-Logo"/>
                    </div>

                    <nav className= {mVersion ? "navMobileContainer" : "navContainer"} style={{opacity:opacityprops}} >
                        <div className={mVersion ? "navMobileContent" : "navContent"}>
                            <ul className="menuContent" >
                                <li><a onClick={closeMenu} href="/">Find a Trip</a></li>
                                <li><a onClick={closeMenu} href="/">Destination</a></li>
                                <li><a onClick={closeMenu} href="/">Why Besnik</a></li>
                                <li><a onClick={closeMenu} href="/">Contact</a></li>
                            </ul>
                            
                            <div className="painelContent">
                                <div id="buttonContent">
                                    <button type="button" onClick={openCreateModal}>Create Account</button>
                                    <button type="button" className='buttonLogin' onClick={handleOpenLoginMenu}>Log-in</button>
                                </div>
                                <div id="loginContent">
                                    <div className="voltarMenu">
                                        <RiArrowGoBackFill onClick={closeLoginMenu}/>
                                    </div>
                                    <div className="logindata">
                                        <input type="text" name="email" id="user" placeholder="Usuario"/>
                                        <input type="text" name="password" id="password" placeholder="Senha"/>
                                    </div>
                                    <div className="btnlogar">
                                         <button className='btnLogin' onClick={handleLogin}>Logar</button>
                                    </div>
                                </div>
                                <div id="userLogedContent">
                                    <div className="boxtext">
                                        <h4>Logado como <span id="usuarioLogado"></span></h4>
                                    </div>
                                    <button className='btnSair' onClick={handleDeslogar}>Sair</button>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <div className="iconMobileContent" onClick={handleClick} >
                         {click ? <FaTimes/> : <FaBars/>}
                    </div>
                </NavBar>

                <TextBox className="textBoxContent">
                    <h1>Exploring The World In Comfort.</h1>
                    <p>You do not have the right to remain silent… let us know what it takes to challenge you</p>
                </TextBox>

                <FormBusca>
                    <div className="FormContent">
                        <div className="SearchDestination">
                            <img src={imgSearch} alt=""/>
                            <input type="text" placeholder="Search destination"/>
                        </div>
                        <div className="C-Location" >
                        <img src={imgLocation} alt=""/>
                            <input type="text"placeholder="C.Location" />
                        </div>
                        <div className="AmountPerson">
                             <select name="select">
                                <option value="valor1">Peson 1</option>
                                <option value="valor2" selected>Peson 2</option>
                                <option value="valor3">Peson 3</option>
                            </select>
                        </div>
                    </div>
                    
                    <button>Search</button>
                </FormBusca>


            </HeaderContent>
        </HeaderContainer>
    );
}

