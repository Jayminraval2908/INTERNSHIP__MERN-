import axios from 'axios'
import React from 'react'

export const Apidemo2 = () => {

    const addUser=async()=>{
        const userObj={
            name:"amit",
            age:23,
            email:"amit@gmail.com",
            password:"amit1234",
            isActive:true
        }

        try {
        const res = await axios.post("https://node5.onrender.com/user/user/",userObj)
        console.log(res);
        console.log(res.data);
        } catch (error) {
            console.log(error);
            alert("Error while addding user");
        }
    }
  return (

    <div style={{textAlign:"center"}}>
        <h1>API DEMO2</h1>
        <button onClick={addUser}>ADD </button>
    </div>
  )
}
