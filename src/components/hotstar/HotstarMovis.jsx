import React from 'react'
import { Link } from 'react-router-dom'

export const HotstarMovis = () => {
  return (
    <div style={{textAlign:"center",backgroundColor:"yellow",marginTop:"20px",height:"400px"}}>
        <h1>MOVIES...</h1>
        <ul>
          <li>
            <Link to="/play/moneyheist">Money Heist</Link>
          </li>
          <li>
            <Link to="/play/kapilsharma">Kapil Sharma</Link>
          </li>
          <li>
            <Link to="/play/10190">Pushpa</Link>
          </li>
        </ul>
    </div>
  )
}
