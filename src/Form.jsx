import React from 'react'

const Form = (props) => {
  return (
    
      <div className='app--container'>
        <form>
          <label className="label--bill">Bill</label>
          <input name="billAmount" type="number" onChange={props.handleChange} placeholder='0' /* value={formData.billAmount} *//>
          <fieldset>
            <legend>Select Tip %</legend>
            <label className='label--radio'><input name="tipPercentage" value="0.05" id='five' type="radio" onChange={props.handleChange}/>5%</label>
            <label className='label--radio'><input name="tipPercentage" value="0.1" id='ten' type="radio" onChange={props.handleChange}/>10%</label>
            <label className='label--radio'><input name="tipPercentage" value="0.15" id='fifteen' type="radio" onChange={props.handleChange}/>15%</label>
            <label className='label--radio'><input name="tipPercentage" value="0.25" id='twentyfive' type="radio" onChange={props.handleChange}/>25%</label>            
            <label className='label--radio'><input name="tipPercentage" value="0.50" id='fifty' type="radio" onChange={props.handleChange}/>50%</label>
            <label>
              <input name="tipPercentage" value="" id='custom' type="radio" onChange={props.handleChange}/>Custom</label>
          </fieldset>
          <label className="label--number--people" >Number of People</label>
          <input name="peopleCount" type="number" required  min="0" max="100" placeholder='0' /* value={formData.peopleCount} */ onChange={props.handleChange}/>
        </form>
        <div className='result--container'>
          <div  className='tiptotal--container'>
            <p>Tip amount 
              <br />
              <span className='text--perperson'>/ person</span>
            </p>
            <p className='text--amount'>${props.billAmount > 0 && props.peopleCount > 0 ? props.tipPerPerson : "0.00"}</p>
          </div>    
          <div className='tiptotal--container'>
              <p>Total
                <br />
                <span className='text--perperson'>/ person</span>
              </p>
              <p className='text--amount'>${props.billAmount > 0 && props.peopleCount > 0 ? props.tipTotalPerson : "0.00"}</p>
          </div>
          
          <button onClick={props.onReset}>Reset</button>
        </div>
      </div>
    
  )
}

export default Form
