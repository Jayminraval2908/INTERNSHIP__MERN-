import axios from 'axios';
import React, { useState } from 'react'

export const Apidemo1 = () => {
    const [message,setMessage]=useState("");
    const [users,setusers]=useState([]);

    const getUsers=async()=>{
        const response=await axios.get("https://node5.onrender.com/user/user/")
        console.log(response)
        console.log(response.data)
        console.log(response.data.message)
        setMessage(response.data.message)
        console.log(response.data.data)
        setusers(response.data.data)
        get()

    }
      return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO</h1>
        <button onClick={()=>{getUsers()}}>GET</button>
        <h1>MESSAGE = {message}</h1>
        {
            users.map((user)=>{
                return <li>{user.name}</li>
            })
        }

    </div>
  )
}
