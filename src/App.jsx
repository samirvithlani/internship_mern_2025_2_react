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
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { HotstarHome } from './components/hotstar/HotstarHome'
import { HotstarMovis } from './components/hotstar/HotstarMovis'
import { HotstarWelcome } from './components/hotstar/HotstarWelcome'
import { Error404 } from './components/hotstar/Error404'
import { Play } from './components/hotstar/Play'
import { FormDemo1 } from './components/forms/FormDemo1'
import { FormDemo2 } from './components/FormDemo2'
import { FormDemo3 } from './components/forms/FormDemo3'
import { FormDemo4 } from './components/forms/FormDemo4'
import { FormDemo5 } from './components/forms/FormDemo5'
import { FormDemo6 } from './components/forms/FormDemo6'
import { FormDemo7 } from './components/forms/FormDemo7'
import { FormDemo8 } from './components/forms/FormDemo8'
import { ApiDemo1 } from './components/apis/ApiDemo1'
import { SearchMovie } from './components/apis/omdb/SearchMovie'
import { MovieDetail } from './components/apis/omdb/MovieDetail'
import { UserList } from './components/apis/UserList'
import { PostApiDemo1 } from './components/apis/PostApiDemo1'
import { PostApiDemo2 } from './components/apis/PostApiDemo2'


function App() {
  

  return (
    <div>
      <Navbar></Navbar>
      
      <Routes>
        <Route path='/' element = {<HotstarWelcome/>}></Route>
        <Route path='/home' element = {<HotstarHome/>}></Route>
        <Route path="/movies" element = {<HotstarMovis/>}></Route>
        <Route path="/play/:id" element = {<Play/>}></Route>
        <Route path='/formdemo1' element = {<FormDemo1/>}></Route>
        <Route path='/formdemo2' element ={<FormDemo2/>}></Route>
        <Route path='/formdemo3' element ={<FormDemo3/>}></Route>
        <Route path='/formdemo4' element ={<FormDemo4/>}></Route>
        <Route path='/formdemo5' element = {<FormDemo5/>}></Route>
        <Route path='/formdemo6' element = {<FormDemo6/>}></Route>
        <Route path='/formdemo7' element ={<FormDemo7/>}></Route>
        <Route path='/formdemo8' element ={<FormDemo8/>}></Route>
        <Route path="/apidemo1" element ={<ApiDemo1/>}></Route>
        <Route path='/searchmovie' element = {<SearchMovie/>}></Route>
        <Route path ="/moviedetail/:id" element ={<MovieDetail/>}></Route>
        <Route path ="/userlist" element ={<UserList/>}></Route>
        <Route path ="/postapidemo1" element ={<PostApiDemo1/>}></Route>
        <Route path ="/postapidemo2" element ={<PostApiDemo2/>}></Route>
        {/* <Route path="/*" element ={<h1>ERROR 404</h1>}></Route> */}
        <Route path="/*" element = {<Error404/>}></Route>
      </Routes>

      
    </div>
  )
}

export default App
