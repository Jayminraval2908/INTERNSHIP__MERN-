import React from 'react'

export const MapDemo3 = () => {

    let students=[
        {id:1,name:"Jaymin",age:22,marks:50,city:"Ahmedabad",gender:"Male"},
        {id:2,name:"Avni",age:23,marks:40,city:"Baroda",gender:"Female"},
        {id:3,name:"Krishiv",age:24,marks:45,city:"Bhavnagar",gender:"Male"},
        {id:4,name:"Aditya",age:20,marks:35,city:"Godhra",gender:"Male"},
        {id:5,name:"Mansi",age:26,marks:42,city:"Amreli",gender:"Female"},
        {id:6,name:"Vandana",age:21,marks:33,city:"Bharuch",gender:"Female"},
        {id:7,name:"Radhika",age:19,marks:20,city:"Limkheda",gender:"Female"},
        {id:8,name:"Jay",age:18,marks:49,city:"Ahmedabad",gender:"Male"},
        {id:9,name:"Dhyey",age:25,marks:47,city:"Khambhat",gender:"Male"},
        {id:10,name:"Darshan",age:24,marks:49,city:"Surat",gender:"Male"}
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>MapDemo3</h1>
        <table border="5" align='center' className='table-table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>MARKS</th>
                    <th>CITY</th>
                    <th>GENDER</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((s)=>{
                        return <tr style={{backgroundColor:s.gender=="Female" && "pink"}}>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td>{s.age}</td>
                            <td style={{color:s.marks>40?"Green":"Red"}}>{s.marks}</td>
                            <td>{s.city}</td>
                            <td>{s.gender}</td>
                            
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
