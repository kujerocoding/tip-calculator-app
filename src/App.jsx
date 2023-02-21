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
          <label htmlFor="">Select Tip %</label>
          <div>
            <p>5%</p>
            <p>10%</p>
            <p>15%</p>
            <p>25%</p>
            <p>50%</p>
            <p>Custom</p>
          </div>
          <label htmlFor="">Number of People</label>
          <input type="number" />
        </form>
        <div className='result--container'>
          <p>Tip amount / person -$$$-</p>
          <p>Total / person -$$$-</p>
          <button>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default App
