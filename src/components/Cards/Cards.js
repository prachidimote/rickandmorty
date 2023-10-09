import React from 'react'
// import { col } from 'bootstrap';

const Cards = ({ results }) => {
    let display;
    console.log(results);
    if(results){
        //using map function to utomatically generate the cards
       display = results.map(x => {
        let { id, name, image } = x;
        return(
        // <div className="col-4" key={id}>{ name }</div>
        <div key={id} className='col-4'>
            <div className=''>
              <img src={image} alt='' />
              <div>{name}</div>
            </div>

        </div>
       
        )
       } ); //x is going to target results one by one
    }else{
        display = "No Characters Found :/";
    }
  return (
    <>{display}</  >
  )
}

export default Cards