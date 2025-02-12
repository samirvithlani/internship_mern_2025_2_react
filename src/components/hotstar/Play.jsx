import React from 'react'
import { useParams } from 'react-router-dom'

export const Play = () => {

    const id = useParams().id;
  return (
    <div style={{textAlign:"center"}}>
        <h1>PLaying....{id}</h1>
    </div>
  )
}
