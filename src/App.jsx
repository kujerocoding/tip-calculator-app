import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [formData, setFormData] = useState({
    billAmount: null,
    peopleCount: null,
    tipPercentage: null
  })

  function handleChange(e){
    const  {name, value } = e.target
    setFormData(prevformData => {
      return {...prevformData, [name]: value}
    })
  }


console.log(formData)

  return (
    <div className='main--container'>
      <img src="./src/assets/images/logo.svg" alt="" />
      <div className='app--container'>
        <form>
          <label className="label--bill">Bill</label>
          <input name="billAmount" type="text" onChange={handleChange}/>
          <fieldset>
            <legend>Select Tip %</legend>
            
            <label><input name="tipPercentage" value="5" id='five' type="radio" onChange={handleChange}/>5%</label>
            <label><input name="tipPercentage" value="10" id='ten' type="radio" onChange={handleChange}/>10%</label>
            <label><input name="tipPercentage" value="15" id='fifteen' type="radio" onChange={handleChange}/>15%</label>
            <label><input name="tipPercentage" value="25" id='twentyfive' type="radio" onChange={handleChange}/>25%</label>            
            <label><input name="tipPercentage" value="50" id='fifty' type="radio" onChange={handleChange}/>50%</label>
            <label><input name="tipPercentage" value="" id='custom' type="radio" onChange={handleChange}/>Custom</label>
          </fieldset>
          <label className="label--number--people" htmlFor="">Number of People</label>
          <input name="peopleCount" type="number" onChange={handleChange}/>
        </form>
        <div className='result--container'>
          <div  className='tiptotal--container'>
            <p>Tip amount 
              <br />
              <span className='text--perperson'>/ person</span>
            </p>
            <p className='text--amount'>$4.27</p>
          </div>    
          <div className='tiptotal--container'>
              <p>Total
                <br />
                <span className='text--perperson'>/ person</span>
              </p>
              <p className='text--amount'>$4.27</p>
          </div>
          
          <button>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default App
