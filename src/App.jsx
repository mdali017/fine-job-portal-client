import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import JobCategory from './components/JobCategory/JobCategory'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      
      <Banner></Banner>
      <JobCategory></JobCategory>
      <Footer></Footer>
      
      
    </div>
  )
}

export default App
