import { useState } from 'react'

function App() {


  return (
    <>
      <div className="countdown-container">
        <div className="text-wrapper">
          <h1>WE'RE LAUNCHING SOON</h1>
        </div>

        <div className='time-wrapper'>
          <div className="digit-container">
            <div className="digits">08</div>
            <div className="digit-label">DAYS</div>
          </div>

          <div className="digit-container">
            <div className="digits">23</div>
            <div className="digit-label">HOURS</div>
          </div>

          <div className="digit-container">
            <div className="digits">55</div>
            <div className="digit-label">MINUTES</div>
          </div>

          <div className="digit-container">
            <div className="digits">41</div>
            <div className="digit-label">SECONDS</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
