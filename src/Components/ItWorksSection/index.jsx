import React from "react";
import { ItWorksContainer, ItWorksContent, TextsContent, CardsContent } from './styles'
import dest  from '../../Assets/img/dest.png';
import fly  from '../../Assets/img/fly.png';
import trip  from '../../Assets/img/trip.png';


export function ItWorks(){
    return(
    
    <ItWorksContainer>
        <ItWorksContent>

            <TextsContent>
                <h1>We Provide Best</h1>
                <p>Take high quality online courses from the best online instrictors
                    around the world & develop your skills.</p>
            </TextsContent>

            <CardsContent>
                <ul>
                    <li className="cardItem">
                        <div className="imgbox">
                            <img src={dest} alt="Select Destinatio" />
                        </div>
                        <h3>Select Destinatio</h3>
                        <p>At first choose the place you wanted to go</p>
                    </li>
                    <li className="cardItem">
                         <div className="imgbox">
                             <img src={trip} alt="Book a Trip" />
                        </div>
                        <h3>Book a Trip</h3>
                        <p>book your tip form our exclusive offers</p>
                    </li>
                    <li className="cardItem">
                         <div className="imgbox">
                            <img src={fly} alt="Take your flight" />
                        </div>
                        <h3>Take your flight</h3>
                        <p>Take your flight on selected date and joy</p>
                    </li>
                </ul>
            </CardsContent>

        </ItWorksContent>
    </ItWorksContainer>

    )
}