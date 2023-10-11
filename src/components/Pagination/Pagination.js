import React from 'react'

const Pagination = ({ pageNumber, setPageNumber }) => {
    //declaring functions for next and prev buttons 
    let next = () => {
        setPageNumber((x) => x+1)  //x represents previous value i.e 1
    };

    let prev = () => {
        //To prevent pages goes n minus i.e -1,-2        
        if(pageNumber === 1) return
        setPageNumber((x) => x-1)
    };
  return (
    <div className='container d-flex justify-center gap-5 my-5'>
        <button onClick={prev} className='btn btn-primary'>Prev</button>
        <button onClick={next} className='btn btn-primary'>Next</button>
    </div>
  )
}

export default Pagination