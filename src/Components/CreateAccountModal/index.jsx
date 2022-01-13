import axios from 'axios';
import React from 'react';
import Modal from 'react-modal';
import { useModalContext } from '../../Contexts/ModalContext';
import { ContentBox } from './styles';
import { FaTimes} from 'react-icons/fa';

 export function CreateModal()  {
    const {modalState,closeModal} = useModalContext();
    

    function hiddenScroll(){
        document.querySelector('body').style.overflow = 'hidden';
    }

    function visibleScroll(){
        document.querySelector('body').style.overflow = 'visible';
    }

    const handleSubmit = () => {
        var nameIpunt = document.getElementById("idname").value;
        var emailIpunt = document.getElementById("idemail").value;
        var passwordIpunt = document.getElementById("idpassword").value;
        var repasswordIpunt = document.getElementById("idrepassword").value;

        var name = nameIpunt;
        var email = emailIpunt;
        var password = passwordIpunt;
        if(nameIpunt !=='' && emailIpunt !=='' &&passwordIpunt !=='' && repasswordIpunt !=='' ){
            if(passwordIpunt === repasswordIpunt){
                
                axios.post("https://servidoragencia.herokuapp.com/user",{name,email,password}).then(response=>{
                    if(response.status === 200){
                        console.log("Conta Criada.");
                        closeModal();
                    }
                }).catch(err =>{
                    console.log(err);
                })
                
            }
        }


    }
    
    return (
        <Modal
            onRequestClose={closeModal}
            isOpen={modalState} overlayClassName="ReactModal__Overlay"
            className="ReactModal__Content" 
            onAfterOpen={hiddenScroll} 
            onAfterClose={visibleScroll}>
        
        <ContentBox>

            <div className="buttonClose">
                <FaTimes onClick={closeModal}/>
            </div>
                <div className="texbox">
                    <h3>Create a new account</h3>
                </div>
                <form method="POST" className='formContent'>
                    <input type="text" name="name" id="idname" placeholder='First Name'/>
                    <input type="text" name="email"  id="idemail" placeholder='Your Email'/>
                    <input type="password" name="password"  id="idpassword" placeholder='Password'/>
                    <input type="password" name="repassword" id="idrepassword" placeholder='Repeat Password'/>
                </form>
                <div className="buttonbox">
                     <button onClick={handleSubmit}>Create</button>
                </div>
                
        </ContentBox>
            
        </Modal> 
    );
}
