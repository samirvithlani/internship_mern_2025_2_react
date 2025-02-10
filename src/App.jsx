import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import {Header} from "./components/Header"
import Footer from './components/Footer'
import { Content } from './components/Content'
import { ArrayDemo1 } from './components/ArrayDemo1'
import { ArrayDemo2 } from './components/ArrayDemo2'
import { ArrayDemo3 } from './components/ArrayDemo3'
import { ArrayDemo4 } from './components/ArrayDemo4'
import { UseStateDemo1 } from './components/UseStateDemo1'
import { UseStateDemo2 } from './components/UseStateDemo2'
import { InputDemo1 } from './components/InputDemo1'


function App() {
  

  return (
    <div>
      {/* <UseStateDemo1></UseStateDemo1> */}
      {/* <UseStateDemo2></UseStateDemo2> */}
      <InputDemo1></InputDemo1>
      {/* <ArrayDemo1></ArrayDemo1> */}
      {/* <ArrayDemo2></ArrayDemo2> */}
      {/* <ArrayDemo4></ArrayDemo4> */}
      {/* <Header></Header>
      <Content></Content>
      <Footer></Footer> */}
    </div>
  )
}

export default App
