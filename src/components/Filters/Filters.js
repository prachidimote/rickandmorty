import React from 'react';
// import Accordion from 'react-bootstrap/Accordion';

import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';

const Filters = () => {
  return (
    <div className='col-3'>
      <div className='text-center text-3xl mb-2'><b>Filter</b></div>
      <div style={{cursor: "pointer", textDecoration:"underline"}} className='text-primary text-center mb-4'>Clear Filters</div> 
      <div className="accordion" id="accordionExample">
      <Status />
      <Species />
      <Gender />
  
</div>
    </div>
  )
}

export default Filters