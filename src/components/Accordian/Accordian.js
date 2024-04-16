import React, {useState} from 'react';
import {data} from "./data";
import './Accordian.css'

function Accordian(props) {
    const [ single , setSingle] = useState(null)
    const [isClicked , setIsClicked] = useState(false)
     const [ multi , setMulti] = useState([])


    function handleClick(getId){
    //changing states here
    setSingle(getId===single ? null : getId)
    }
    function handleMultipleClick(getId){
        let cpyMultiple = [...multi];
        let findIndex  = cpyMultiple.indexOf(getId)
        if(findIndex === -1){
            cpyMultiple.push(getId)
        }else{
            cpyMultiple.splice(findIndex , 1)
        }
       console.log(cpyMultiple)
        setMulti(cpyMultiple)
    }


    return (
        <div className="w-[90%] bg-blue-200 mx-auto h-screen flex flex-col gap-4">
           <h1 className="w-[40%] mx-auto font-bold">Accordian Component</h1>
      <button onClick={()=>{
          setIsClicked(prev => !prev)
      }} className={isClicked ? 'active' : 'inactive'} >{isClicked ? 'Multi Select' : 'Single Select'}</button>

        {/* mapping data*/}
            {
                data && data.length > 0 && data.map((item)=>{
                    return (
                        <div className="m-2 text-center  p-2 bg-amber-50" key={item.id}>
                         <p className="cursor-pointer" onClick={isClicked ? ()=> handleMultipleClick(item.id) : () => handleClick(item.id)}>{item.question}</p>
                            {
                                isClicked ? multi.indexOf(item.id) !== -1 && <p>{item.answer}</p>
                                    : single === item.id && <p>{item.answer}</p>
                            }
                        </div>
                    )
                })
            }

        </div>
    );
}

export default Accordian;