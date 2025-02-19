import React, { useEffect, useState } from 'react'

export const UseEffectDemo = () => {

    //()=>{} //function
    //[] --> depend array

    const [count, setcount] = useState(0)
    useEffect(()=>{
        console.log("useEffect called...")
    },[count])

  return (
    <div style={{textAlign:"center"}}>
            <h1>USE EFFECT DEMO</h1>
            <button onClick={()=>{setcount(count+1)}}>+</button>
            <h1>Count = {count}</h1>
    </div>
  )
}
