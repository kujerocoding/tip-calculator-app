import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {

  const getFormValue = () => {
    return {
      billAmount: 0,
      peopleCount: 0,
      tipPercentage: 0
    }
  }

  const [formData, setFormData] = useState(getFormValue)
  const [isReset, setIsReset] = useState(true)

  //console.log('fresh form', formData)

  const[result, setResult] = useState({
    tipPerPerson: 0,
    tipTotalAmount: 0,
    tipTotalPerson: 0,
  })


  function handleChange(e){
    const  {name, value } = e.target
    setFormData(prevformData => {
      return {...prevformData, [name]: value}
    })
    //console.log(e)
  }


  //console.log(formData)
  //console.log(result)

  function calculateTip(){
    setResult(prevResult => {
      return {...prevResult, 
        tipTotalAmount: formData.billAmount * formData.tipPercentage,
        tipPerPerson: (result.tipTotalAmount / formData.peopleCount).toFixed(2),
        tipTotalPerson: ((result.tipTotalAmount + Number(formData.billAmount)) / formData.peopleCount).toFixed(2)
      }
    })
  }

  useEffect(() => {
    calculateTip()
    console.log('calculate ran', formData)
  },[formData])


  function onReset(){
    setFormData(getFormValue)
    setIsReset(prevState => !prevState)
   console.log('formdata after reset',formData)
  }

  return (
    <div className='main--container'>
      <img src="./src/assets/images/logo.svg" alt="Splitter logo" />
      <div className='app--container'>
        <form>
          <label className="label--bill">Bill</label>
          <input name="billAmount" type="number" onChange={handleChange} value={formData.billAmount}/>
          <fieldset>
            <legend>Select Tip %</legend>
            <label><input name="tipPercentage" value="0.05" id='five' type="radio" onChange={handleChange}/>5%</label>
            <label><input name="tipPercentage" value="0.1" id='ten' type="radio" onChange={handleChange}/>10%</label>
            <label><input name="tipPercentage" value="0.15" id='fifteen' type="radio" onChange={handleChange}/>15%</label>
            <label><input name="tipPercentage" value="0.25" id='twentyfive' type="radio" onChange={handleChange}/>25%</label>            
            <label><input name="tipPercentage" value="0.50" id='fifty' type="radio" onChange={handleChange}/>50%</label>
            <label>
              <input name="tipPercentage" value="" id='custom' type="radio" onChange={handleChange}/>Custom</label>
          </fieldset>
          <label className="label--number--people" >Number of People</label>
          <input name="peopleCount" type="number" required  min="0" max="100" value={formData.peopleCount} onChange={handleChange}/>
        </form>
        <div className='result--container'>
          <div  className='tiptotal--container'>
            <p>Tip amount 
              <br />
              <span className='text--perperson'>/ person</span>
            </p>
            <p className='text--amount'>${formData.billAmount > 0 && formData.peopleCount > 0 ? result.tipPerPerson : "0.00"}</p>
          </div>    
          <div className='tiptotal--container'>
              <p>Total
                <br />
                <span className='text--perperson'>/ person</span>
              </p>
              <p className='text--amount'>${formData.billAmount > 0 && formData.peopleCount > 0 ? result.tipTotalPerson : "0.00"}</p>
          </div>
          
          <button onClick={onReset}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default App
