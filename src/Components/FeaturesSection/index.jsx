import React  from 'react';
import {useEffect, useState} from 'react';
import { FeaturesContainer,FeaturesContent,TextContent,CardsContent,Card } from './styles'
import {BiTime} from 'react-icons/bi'

export function Features(){
    const [data, setData] = useState([])

    useEffect(()=>{

       fetch('http://localhost:3000/json/Destaques.json')
       .then((response)=>response.json())
       .then(setData)
       
    },[])

    return (
        <FeaturesContainer>
            <FeaturesContent>

                <TextContent>
                    <h1>Featured Tour Places</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                </TextContent>

                <CardsContent>
                    {
                        data.map((item)=>{
                            const {id,name,price,time,image} = item;
                            return(
                                <Card key={id}>
                                    <div className="imgbox">
                                        <img src={image} alt={name} />
                                    </div>
                                    <h1>{name}</h1>
                                    <div className="infosPlace">
                                        <BiTime/>
                                        <span>{time}</span>
                                        <p>$:{price},00</p>
                                    </div>
                             </Card>
                            )
                        })
                    }
                    
                </CardsContent>
            </FeaturesContent>
        </FeaturesContainer>
        
    )
}
