import React, {useRef} from 'react';

function Scrolltoparticularsection(props) {
    const ref = useRef(null)
    const data = [
        {
            label: "about",
            style:{
                width: '100%',
                height: '600px',
                background: 'red'
            }
        },
        {
            label: "home",
            style:{
                width: '100%',
                height: '600px',
                background: 'blue'
            }
        },
        {
            label: "contact",
            style:{
                width: '100%',
                height: '600px',
                background: 'green'
            }
        },
        {
            label: "skills",
            style:{
                width: '100%',
                height: '600px',
                background: 'purple'
            }
        },
        {
            label: "designs",
            style:{
                width: '100%',
                height: '600px',
                background: 'yellow'
            }
        },
    ]

    function handleClick(){
        let position = ref.current.getBoundingClientRect().top

       window.scrollBy({
           top: position,
           behavior: "smooth"
       })
    }

    return (
        <div>
            <h1>scroll to particular section</h1>
            <button onClick={handleClick}>Scroll to sections</button>
            {
                data.map((item,index)=>{
                    return (
                        <div ref={index === 1 ? ref : null} style={item.style}>
                            <p>{item.label}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Scrolltoparticularsection;