import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetail = () => {

    const id = useParams().id
    const [detail, setdetail] = useState({})

    const getmovieDetail = async()=>{

        // const res = await axios.get("http://www.omdbapi.com/?apikey=9d57be0b&i="+id)
        const res = await axios.get(`http://www.omdbapi.com/?apikey=9d57be0b&i=${id}`)
        console.log(res.data)
        setdetail(res.data)

    }

    useEffect(()=>{
      getmovieDetail()
    },[])


  return (
    <div style={{textAlign:"center"}}>
        <h1>MOVIE DETAIL - {id}</h1>
        {/* <button onClick={()=>{getmovieDetail()}}>detail</button> */}
        <h1>MOVIE NAME = {detail?.Title}</h1>
    </div>
  )
}
