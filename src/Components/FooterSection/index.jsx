import React from 'react'
import {FooterContainer,InfosContainer,InfosContent,Subscription,SubsContent} from './styles'
import BackgroundSubs from "../../Assets/img/Subscription.png"
import imgLogo  from '../../Assets/img/imgLogo.png';
import {FaFacebookF,FaLinkedinIn,FaTwitter,FaPinterestP} from 'react-icons/fa'


export function Footer() {
    return (
        <FooterContainer>
            <Subscription>
                <SubsContent>
                        <img src={BackgroundSubs} alt="BackgroundSubscription" />
                        <div className="boxText">
                            <h1>Get our pro offers </h1>
                            <p>Create a visual identity for your company, and an overall brand</p>
                        </div>
                        <div className="inputBox">
                            <input type="text" placeholder='Insira Seu E-mail'/>
                            <button>Subscribe</button>
                        </div>
                </SubsContent>
            </Subscription>
    
            <InfosContainer>
                <InfosContent>
                    <div className='logoContent'>
                        <img src={imgLogo} alt="Icon-Logo"/>
                         <p>There are many variations of passages of available</p>
                    </div>
                    <div className='redesSociais'>
                        <ul>
                            <li><div className='IconBox faceIcon'><FaFacebookF/></div>Facebook</li>
                            <li><div className="IconBox linkeIcon"><FaLinkedinIn/></div>Linkedin</li>
                            <li><div className="IconBox twitIcon"><FaTwitter/></div>Twitter</li>
                            <li><div className="IconBox pintIcon"><FaPinterestP/></div>Pinterest</li>
                        </ul>
                    </div>
                    <div className='recentsPostContent'>
                        <p>Recent Post</p>
                        <ul>
                            <li><a href="/">Top 5 Himalayan Treks</a></li>
                        </ul>
                    </div>
                </InfosContent>
            </InfosContainer>
        </FooterContainer>
    )
}

