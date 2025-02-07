import React from 'react'

export const ArrayDemo1 = () => {

  var users = ["kunal","amit","raj","parth","shyam"]

  return (
    <div style={{textAlign:"center"}}>
        <h1 style={{color:"blue"}}>Array Demo 1</h1>

        {
          users.map((user)=>{
            //return (<li>{user}</li>)
            return <li>{user}</li>
          })
        }

        {/* <h1>{users[0]}</h1>
        <h1>{users[1]}</h1>
        <h1>{users[2]}</h1>
        <h1>{users[3]}</h1>
        <h1>{users[4]}</h1> */}

    </div>
  )
}
