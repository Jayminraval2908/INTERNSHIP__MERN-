import React from 'react';

export const MapDemo2 = () => {
    let users=[
        {id:1, name:"Jaymin",age:22,gender:"male"},
        {id:2, name:"Avni",age:24,gender:"female"},
        {id:3,name:"Janki", age :24,gender:"female"},
        {id:4, name:"Aditya", age:17, gender:"Male"}
    ]
  return (
    <div>
        <h1>MapDemo2</h1>
        {
            users.map((u)=>{
                return <li>{u.id}-{u.name}-{u.age}-{u.gender}</li>
            })
        }
    </div>
    
  )
}
