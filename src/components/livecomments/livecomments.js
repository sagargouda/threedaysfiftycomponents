import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addComments} from "./redux/youtubeSlice";
import generateRandomText, {generate} from "./helper";

function Livecomments(props) {
    const [ name , setName] = useState('')
    const dispatch = useDispatch()
    const selector = useSelector(store=>store.youtube.store)


    useEffect(() => {
        const timer  = setInterval(()=>{
            dispatch(addComments({
                name: generate(),
                message: generateRandomText(Math.floor(Math.random() * 50))
            }))

        } , 500)

        return () => clearInterval(timer)
    }, [name]);



    return(
        <div className="w-[100%]  h-screen bg-blue-400 ">
            {
                selector && selector.map((message , index)=>{
                    return (
                        <div className="flex flex-col bg-white p-1 mb-1 rounded-lg shadow-md" key={index}>
                            <div className="flex flex-row items-center">
                                <h4 className="text-lg font-medium">{message.name}</h4>
                            </div>
                            <p className="text-gray-700">{message.message}</p>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Livecomments;