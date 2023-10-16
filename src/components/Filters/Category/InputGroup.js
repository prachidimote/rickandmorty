import React from 'react'

const InputGroup = ({ total, name, setID }) => {
    //Inside array all 51 count(numbers) are stored
    console.log([ ...Array(total).keys()])
  return (
    <div>
        <div class="form-floating">
  <select onChange={(e) => setID(e.target.value)} class="form-select" id="floatingSelect" aria-label="Floating label select example">
    <option selected>Choose</option>
    {[...Array(total).keys()].map((x) => {
        return <option value= { x+1 }>{ name } - { x+1 }</option>
    })}
  </select>

</div>
    </div>
  )
}

export default InputGroup