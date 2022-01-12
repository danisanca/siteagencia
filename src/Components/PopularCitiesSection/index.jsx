import React from 'react';
import {useState,useEffect,useRef} from 'react';
import {PopularContainer,PopularContent,TextBox,CaroselContent,Card,SelectButtons} from './styles'
import {BiChevronLeft ,BiChevronRight } from 'react-icons/bi'


export function Popular() {

    const [data,setData] = useState([])
    const carousel = useRef(null);

    useEffect(()=>{
        fetch('https://siteagenciareact.netlify.app/json/PopularCities.json')
        .then((response) => response.json())
        .then(setData)

    },[])

    const handleLeftClick = (e) =>{
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    const handleRightClick = (e) =>{
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    return (
        <PopularContainer>
            <PopularContent>
                
                <TextBox>
                    <span>TOP CITYS</span>
                    <h1>Our popular cities</h1>
                    <p>We’re a team of humans with the strategy, tools, and solutions and digital products.</p>
                </TextBox>
               
                <SelectButtons>
                    <button onClick={handleLeftClick}>
                       <BiChevronLeft ></BiChevronLeft>
                    </button>
                    <button onClick={handleRightClick}>
                        <BiChevronRight></BiChevronRight>
                    </button>
                </SelectButtons>
               
                <CaroselContent ref={carousel}>
                    {
                        data.map((item)=>{
                            const {id,pais,local,image} = item;
                            return(
                                <Card key={id}>
                                    <img src={image} alt={local} />

                                    <div className="textcontent">
                                        <div className="title">
                                        <h1>{pais}</h1>
                                        </div>
                                    
                                        <div className="infos">
                                            <h1>{local}</h1>
                                            <span>10 Popular Places</span>
                                        </div>
                                    </div>
                                </Card>
                            )
                        })
                    }
                    
                </CaroselContent>

            </PopularContent>
        </PopularContainer>
    )
}

