import React from "react";
import { useEffect, useState, useRef } from "react";
import {AboutContainer,AboutContent,TextBoxContent,Carrosel,Card,SelectCards} from './styles'
import aspasicon from '../../Assets/img/aspasicon.png';
import {BiChevronLeft ,BiChevronRight } from 'react-icons/bi'

export function AboutUS(){
    const [data, setData] = useState([])
    const carousel = useRef(null);
    useEffect(()=>{
            fetch('http://localhost:3000/json/Viagens.json')
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

    return(
        <AboutContainer>
            <AboutContent>
                
                <TextBoxContent>
                    <div className="boxTextContent">
                        <p>ABOUT US</p>
                        <h1>Explore all corners of the world with us.</h1>
                    </div>
                    <div className="boxTextContent">
                        <span>These exercises ran in parallel with a series of focus groups comprising of parents. These exercises ran in parallel with a series of focus groups comprising of parents.</span>
                    </div>
                </TextBoxContent>

                <Carrosel >
                    <div className="carroselContent" ref={carousel}>
                    {
                        data.map((item) =>{
                            const{id,name,textAbout,image} = item;

                            return(
                                <Card key={id}>
                                    <div className="imgContent">
                                        <img src={image} alt="" />
                                    </div>
                                    <div className="iconAspContent">
                                        <img src={aspasicon} alt="" />
                                    </div>
                                    <div className="descriptionContent">
                                        <h3>{name}</h3>
                                        <p>{textAbout}</p>
                                    </div>
                                </Card>
                            )
                        })
                    }
                    </div>
                </Carrosel>

                <SelectCards>
                    <button onClick={handleLeftClick}>
                       <BiChevronLeft ></BiChevronLeft>
                    </button>
                    <button onClick={handleRightClick}>
                        <BiChevronRight></BiChevronRight>
                    </button>
                </SelectCards>

          </AboutContent>
        </AboutContainer>
    )
}