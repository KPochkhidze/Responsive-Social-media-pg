import { useState } from 'react'
import mainImg from "./assets/avatar-jessica.jpeg"
import './App.css'
import Buttons from './Buttons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='card'>

      <img className="photo" src={mainImg} alt="" />
      <h1 className='headline'>Jessica Randall</h1>
      <h5 className='headline2'>London,United Kingdom</h5>
      <p className='p'>Front-end Developer and avid reader</p>
      
      <Buttons text="Github" link="https://github.com"/>
      <Buttons text="Frontedn Mentor" link="https://frontendmentor.io" />
      <Buttons text="Linkdin" link="https://linkedin.com"/>
      <Buttons text="Twitter" link="https://twitter.com" />
      <Buttons text="Instagram" link="https://instagram.com" />

    </div>
    </>
  )
}

export default App
