import React, {useRef} from 'react';
import {data} from './datta'

function Scrolltotopandbottom(props) {

    const divRef= useRef(null)

    function handleToTop(){
        window.scrollTo({
            top:0,
            left:0,
            behavior: "smooth"
        })
    }

    function handleToBottom(){
        divRef.current.scrollIntoView({
            behavior: "smooth"
        })
    }

    return (
        <div>
            <h1>scroll to top and botytom</h1>
            <button onClick={handleToBottom} className={"p-2 m-2 bg-yellow-400"}>Scroll to bottom</button>
            {
                data.map((item)=>{
                    return <li>{item}</li>
                })
            }
            <button onClick={handleToTop} className={"p-2 m-2 bg-yellow-400"}>Scroll to top</button>
         <div ref={divRef}></div>
        </div>
    );
}

export default Scrolltotopandbottom;