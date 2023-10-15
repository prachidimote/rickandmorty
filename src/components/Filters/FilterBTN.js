import React from 'react'

const FilterBTN = () => {
  return (
    <div>
        <div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
  <label className="form-check-label" for="exampleRadios1">
    Default radio
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
  <label className="form-check-label" for="exampleRadios2">
    Second default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled />
  <label class="form-check-label" for="exampleRadios3">
    Disabled radio
  </label>
</div>
    </div>
  )
}

export default FilterBTN