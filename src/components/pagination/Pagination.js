import React from 'react';

function Pagination({currentPage , totalPages = 10 , onPageChange}) {
    function generateNo(){
        let store = []
        for(let i = 1; i<=totalPages;i++){
            store.push(i)
        }
        return store
    }

    return (
        <div>
         <button disabled={currentPage === 1} onClick={()=>{
             onPageChange(currentPage-1)
         }} className="p-2 m-2 bg-yellow-400">Prev</button>
            {
                generateNo().map((pageNo , index)=>{
                    return <button key={index} onClick={()=>onPageChange(pageNo)} className="p-2 m-2 bg-yellow-400">{pageNo}</button>
                })
            }
            <button disabled={currentPage === 10} onClick={()=>{
                onPageChange(currentPage+1)
            }} className="p-2 m-2 bg-yellow-400">Next</button>
        </div>
    );
}

export default Pagination;