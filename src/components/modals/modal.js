import React, {useState} from 'react';
import './modal.css'
function Modal(props) {
    const [ show , setShow] = useState(false)

    function handleClick(){
        setShow(prev=>!prev)
    }
    return (
        <div>
            <h1>I am model</h1>
            <button onClick={handleClick}>CLick Open</button>

            {
                show && <div>modal popup</div>
            }

        </div>
    );
}

export default Modal;