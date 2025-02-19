import axios from 'axios'
import React, { useState } from 'react'

export const UserList = () => {

    const [users, setusers] = useState([])
    const getUserData = async()=>{

        const res = await axios.get("https://node5.onrender.com/user/user")
        console.log(res) //axios object
        console.log(res.data)
        setusers(res.data.data)
    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>USER LIST</h1>
        <button onClick={()=>{getUserData()}}>GET</button>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>EMAIL</th>
                    <th>STATUS</th>
                </tr>
            </thead>
            <tbody>
                {
                    users?.map((user)=>{
                        return <tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                            <td>
                                {
                                    user.isActive == true ? "Active" : "Not active"
                                }
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
