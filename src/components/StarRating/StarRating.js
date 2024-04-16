import React, {useState} from 'react';
import { FaRegStar } from "react-icons/fa";
import './StarRating.css'

function StarRating({noOfStars = 5}) {
const [ rating , setRating] = useState(0)
    const [ hover , setHover] =useState(0)
    function handleClick(getId){
        setRating(getId)
    }
    function handleHover(getId){
        setHover(getId)
    }

    function  handleLeave(){
       setHover(rating)
    }

    return (
        <div>
            <h1 className="font-bold text-6xl text-blue-600">Star Rating</h1>
            <div  className="m-2 p-2 w-[30%] h-[30%] mx-auto bg-blue-200">
            {
                [...Array(noOfStars)].map((_ , index)=>{

                    return <FaRegStar key={index} className={index <= (hover || rating) ? 'active' : 'inactive'}  onMouseLeave={()=> handleLeave()} onMouseOver={()=>handleHover(index)} onClick={()=>handleClick(index)} size={30}  />


                })
            }
            </div>
        </div>

    );
}

export default StarRating;