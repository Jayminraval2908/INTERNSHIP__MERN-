import React from 'react'

export const MapDemo = () => {
    let cars=["audi", "BMW","Lamborghini","Lexus","XC90","Sierra"];
  return (
    <div>
        <h1>MapDemo</h1>
        {
            cars.map((c)=>{
               return <h1>{c}</h1>
            })
        }
    </div>
  )
}
