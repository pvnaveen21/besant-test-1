import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import About from './About'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Home from './Home'
import MyRoutes from './AllRoutes/MyRoutes'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("More")

  return (
    <>
      <MyRoutes></MyRoutes>
      {/* <About></About>
      <Home userName ={name}></Home>
      <About/> */}
    </>
  )
}

export default App
