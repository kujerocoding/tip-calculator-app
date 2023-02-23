import React, { useEffect, useState } from 'react'
import './App.css'
import Form from './Form'

const App = () => {

  const getFormValue = () => {
    return {
      billAmount: 0,
      peopleCount: 0,
      tipPercentage: 0
    }
  }

  const [formData, setFormData] = useState(getFormValue)
  const [formKey, setFormKey] = useState(10)

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
  }

  function calculateTip(){
    setResult(prevResult => {
      return {...prevResult, 
        tipTotalAmount: formData.billAmount * (formData.tipPercentage / 100),
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
    setFormData(getFormValue())
    setFormKey(prevKey => prevKey + 1)
  }

  return (
    <div className='main--container'>
      <img src="./src/assets/images/logo.svg" alt="Splitter logo" />
      <Form handleChange={handleChange} 
            onReset={onReset} 
            key={formKey}
            billAmount={formData.billAmount}
            tipPerPerson={result.tipPerPerson}
            peopleCount={formData.peopleCount}
            tipTotalAmount={result.tipTotalAmount}
            tipPercentage={formData.tipPercentage}
            tipTotalPerson={result.tipTotalPerson}
            />
    </div>
  )
}

export default App
