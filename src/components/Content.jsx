import React from 'react'

export const Content = () => {
    var name = "Amit"
    var age = 19
    var isActive = false;
  
  return (
    <div>
         <h1>Hello</h1>
      {name}
      <h1>Name ={name}</h1>
      <h2>Age = {age}</h2>
      <h2>ACtive ? {isActive}</h2>
      <h2>Active = {isActive == true ? "Active" : "Not ACtive"}</h2>
    </div>
  )
}
