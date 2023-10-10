import React from 'react'
// import { col } from 'bootstrap';
import styles from "./Cards.module.scss";

const Cards = ({ results }) => {
    let display;
    console.log(results);
    if(results){
        //using map function to utomatically generate the cards
       display = results.map((x) => {
        let { id, name, image, location, status } = x;
        return(
        // <div className="col-4" key={id}>{ name }</div>
        <div key={id} className='col-4 position-relative'>
            <div className=''>
            {/* <span class="badge bg-primary">New</span> */}
              <img src={image} alt='' className='img-fluid rounded' />
              <div className='content'>
                <div className='fw-bold fs-4 mb-4'><b>{ name }</b></div>
                <div className=''>
                  <div className=''>Last Location</div>
                  <div className='fs-5'>{ location.name }</div>
                </div>
            </div>
            </div>
{/* <div className='position-absolute top-0 end-8 mt-2 badge bg-danger'>
{ status }</div> */}
<div className={`${styles.badge} position-absolute badge bg-danger`}>{ status }</div>
        </div>       
        )
       } ); //x is going to target results one by one
    }else{
       display = "No Characterd Here: /"
    }
  return (
    <>{display}</  >
  )
}

export default Cards