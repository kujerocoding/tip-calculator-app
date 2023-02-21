import React from 'react'
import './App.css'

const App = () => {
  return (
    <div className='main--container'>
      <img src="./src/assets/images/logo.svg" alt="" />
      <div className='app--container'>
        <form>
          <label className="label--bill">Bill</label>
          <input type="text" />
          <fieldset>
            <legend>Select Tip %</legend>
            
            <label><input id='five' type="radio" />5%</label>
            <label><input id='ten' type="radio" />10%</label>
            <label><input id='fifteen' type="radio" />15%</label>
            <label><input id='twentyfive' type="radio" />25%</label>            
            <label><input id='fifty' type="radio" />50%</label>
            <label><input id='custom' type="radio" />Custom</label>
          </fieldset>
          <label className="label--number--people" htmlFor="">Number of People</label>
          <input type="number" />
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
