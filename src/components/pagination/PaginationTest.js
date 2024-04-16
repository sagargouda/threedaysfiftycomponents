import React, {useState} from 'react';
import Pagination from "./Pagination";

function PaginationTest(props) {
    const [currentPage , setCurrentPage] = useState(1)

    let dummyData = Array.from({length: 100} , (_,index)=>{
       return {
           index: index+1,
           name: `Product ${index+1}`
        }
    })


    const itemsPerPage = 10;
    let endingIndex = currentPage * itemsPerPage
    let startingIndex = endingIndex  - itemsPerPage

    let smallData = dummyData.slice(startingIndex , endingIndex)


    function handleChange(pageNo){
        setCurrentPage(pageNo)
    }





console.log(smallData)
    return (
        <div>
            {
                smallData.map(items =>{
                    return <p key={items.index}>{items.name}</p>
                })
            }

            <Pagination currentPage={currentPage} totalPages={Math.floor(dummyData.length/itemsPerPage)} onPageChange={handleChange}/>

        </div>
    );
}

export default PaginationTest;