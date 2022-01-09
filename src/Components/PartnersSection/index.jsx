import React from 'react';
import {PartnersContainer,PartnersContent,TextBox,PartnersImg} from './styles';
import Partnet1 from '../../Assets/img/Partners/Partner01.png'
import Partnet2 from '../../Assets/img/Partners/Partner02.png'
import Partnet3 from '../../Assets/img/Partners/Partner03.png'
import Partnet4 from '../../Assets/img/Partners/Partner04.png'
import Partnet5 from '../../Assets/img/Partners/Partner05.png'
import Partnet6 from '../../Assets/img/Partners/Partner06.png'


export function Partners() {

    return (
        <PartnersContainer>
            <PartnersContent>
                <TextBox>
                    <h1>Our Tour Partner</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                </TextBox>
                <PartnersImg>
                    <ul>
                        <li><img src={Partnet1} alt="" /></li>
                        <li><img src={Partnet2} alt="" /></li>
                        <li><img src={Partnet3} alt="" /></li>
                        <li><img src={Partnet4} alt="" /></li>
                        <li><img src={Partnet5} alt="" /></li>
                        <li><img src={Partnet6} alt="" /></li>
                    </ul>
                </PartnersImg>
            </PartnersContent>
        </PartnersContainer>
    )
}
