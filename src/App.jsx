import React from 'react'
import HomePage from "./components/HomePage"
import NavBar from './components/NavBar'
const App = () => {
  return (
    <div>
      <p>this is a basic time series plotting tool</p>
      <NavBar/>
      <div>
      <HomePage/>

      </div>
      
    </div>
  )
}

export default App