import React, {useState} from 'react';

function Qrcode(props) {
    const [ input , setInput] = useState(null)
  const [ image , setImage] =useState('')
    const [ loading , setLoading] = useState(false)
    async function handleChange(){
       //   if image is not loaded
       setLoading(true)
        const response = await fetch(` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`)
      console.log(response.url)
        setImage(response.url)
        //  after image has loaded
        setLoading(false)
    }
    return (
        <div>
            <h1>qr code</h1>
            <input className='m-2 p-2 border-2 border-black' value={input} onChange={(e)=>setInput(e.target.value)} type="text"/>
         <button onClick={handleChange}>Change qr</button>

            {
              loading ? <h1>Loading</h1> :  image && <img src={image} alt="e have"/>
            }

        </div>
    );
}

export default Qrcode;