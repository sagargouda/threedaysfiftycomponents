import React, {useEffect, useState} from 'react';

function AutoSuggestion(props) {
    const[searchQuery , setSearchQuery] = useState('')
 const [suggestion , setSuggestion] = useState([])
    useEffect(()=>{

       const timer = setTimeout(()=>{
            getData()
        } , 200)

        return () => clearTimeout(timer)

    } , [searchQuery])


   async function getData(){
        const data = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&q=${searchQuery}`)
      const response = await data.json()
       console.log(response[1])
       setSuggestion(response[1])
    }

    return (
        <div>
            <h1>Auto Suggestion</h1>

                 <input value={searchQuery} onChange={(e)=>{
                     setSearchQuery(e.target.value)
                 }} className=" border-2 border-black bg-none" type="text" placeholder="search" />

            {
                suggestion && suggestion.length > 0 && suggestion.map((suggestion , index)=>{
                    return <p key={index}>{suggestion}</p>
                })
            }

        </div>
    );
}

export default AutoSuggestion;