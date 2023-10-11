import React from 'react'
import styles from "./Cards.module.scss";

const Cards = ({ results }) => {
    let display;
    if(results){
        //using map function to utomatically generate the cards
       display = results.map((x) => {
        let { id, name, image, location, status } = x;
        return(
        // <div className="col-4" key={id}>{ name }</div>
        <div key={id} className='col-4 mb-4 position-relative'>
            <div className={ styles.cards}>
            {/* <span class="badge bg-primary">New</span> */}
              <img src={image} alt='' className={`${styles.img} img-fluid rounded`} />
              <div style={{padding: "10px"}} className='content'>
                <div className='fw-bold fs-4 mb-4'><b>{ name }</b></div>
                <div className=''>
                  <div className='fs-6'>Last Location</div>
                  <div className='fs-5'>{ location.name }</div>
                </div>
            </div>
            </div>
            {/* using iief function */}
{(() => {
  if(status === "Dead"){
    return (
      <div className={`${styles.badge} position-absolute badge bg-danger`}>{ status }</div>
        
    )
  }
  else if(status === "Alive"){
    return <div className={`${styles.badge} position-absolute badge bg-success`}>{ status }</div>
  }
  else{ 
    return <div className={`${styles.badge} position-absolute badge bg-secondary`}>{ status }</div>
  }
})()}
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