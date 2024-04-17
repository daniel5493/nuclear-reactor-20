import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Nav from './Components/Nav'
import Projects from './Components/Projects'
import Header from './Components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <About/>
        {/* <Contact/>
        <Nav/>
        <Header/>
        <Projects/> */}
      </div>
    </>
  )
}

export default App
