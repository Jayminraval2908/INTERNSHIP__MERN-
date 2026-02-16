import React, { useState } from 'react'

export const UseStatdemo1 = () => {
    
    const[count,setcount]=useState(0);

    const increaseCount=()=>{
        setcount(count+1);
        
    }

    const decreaseCount=()=>{
        if (count===0) {
            alert("No more decrease...");
            return;
        }

        setcount(count-1);

        
    }

    const resetCount=()=>{
        setcount(0);
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1 style={{fontSize:"150px" , color:"violet"}}>Counter ={count}</h1>
        <button onClick={increaseCount} style={{backgroundColor:"lightblue" , border:"4px solid black" , margin:"50px", padding:"10px", fontWeight:"bold",width:"200px", height:"80px",fontSize:"25px"}}>Count +</button>
        <button onClick={decreaseCount} style={{backgroundColor:"lightblue" , border:"4px solid black" , margin:"50px", padding:"10px",fontWeight:"bold",width:"200px", height:"80px",fontSize:"25px"}}>Count -</button>
        <button onClick={resetCount} style={{backgroundColor:"lightblue" , border:"4px solid black" , margin:"50px", padding:"10px",fontWeight:"bold",width:"200px", height:"80px",fontSize:"25px"}}>Reset</button>
    </div>
  )
}
