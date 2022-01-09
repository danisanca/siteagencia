import React from 'react';
import {useState,useEffect,useRef} from 'react';
import {PopularContainer,PopularContent,TextBox,CaroselContent,Card,SelectButtons} from './styles'
import {BiChevronLeft ,BiChevronRight } from 'react-icons/bi'
import {BsStarFill} from 'react-icons/bs'


export function Testimonials() {

    const [data,setData] = useState([])
    const carousel = useRef(null);

   
    useEffect(()=>{
        fetch('http://localhost:3000/json/Feedback.json')
        .then((response) => response.json())
        .then(setData);
        
    },[])

    const handleLeftClick = (e) =>{
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    const handleRightClick = (e) =>{
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

        function NumberList(props) {
            const numbers = props.numbers;
            
            switch(numbers){
                case "1":
                    return(
                        <ul className='starContent'>
                            <li className='starIcon'><BsStarFill/></li>
                        </ul>
                    )
                case "2":
                    return(
                        <ul className='starContent'>
                            <li className='starIcon'><BsStarFill/></li>
                            <li className='starIcon'><BsStarFill/></li>
                        </ul>
                    )
                case "3":
                    return(
                        <ul className='starContent'>
                            <li className='starIcon'><BsStarFill/></li>
                            <li className='starIcon'><BsStarFill/></li>
                            <li className='starIcon'><BsStarFill/></li>
                        </ul>
                    )
                case "4":
                    return(
                        <ul className='starContent'>
                            <li className='starIcon'><BsStarFill/></li>
                            <li className='starIcon'><BsStarFill/></li>
                            <li className='starIcon'><BsStarFill/></li>
                            <li className='starIcon'><BsStarFill/></li>
                        </ul>
                    )
                case "5":
                    return(
                        <ul className='starContent'>
                            <li className='starIcon'><BsStarFill/></li>
                            <li className='starIcon'><BsStarFill/></li>
                            <li className='starIcon'><BsStarFill/></li>
                            <li className='starIcon'><BsStarFill/></li>
                            <li className='starIcon'><BsStarFill/></li>
                        </ul>
                    )
                default:
                    console.log("2"+numbers);
            }
            

        }
        
     
    return (
        <PopularContainer>
            <PopularContent>
                <TextBox>
                    <span>TESTIMONIALS</span>
                    <h1>What our client say</h1>
                    <p>Create a visual identity for your company, and an overall brand.</p>
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
                            const {id,name,job,nota,image,coments} = item;
                            
                            return(
                                <Card key={id}>
                                   <img src={image} alt="" />
                                   <div className="cardContent">
                                        <div className="user">
                                            <h3>{name}</h3>
                                            <span>{job}</span>
                                        </div>
                                        <hr/>
                                        <div className="feedback">
                                            <div className="nota">
                                                <NumberList numbers={nota}/>
                                             </div>
                                            <p>{coments}</p>
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

