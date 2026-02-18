import axios from 'axios';
import React, { useState } from 'react'


export const ApiTask = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/quotes");
            setUsers(response.data.quotes);

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>API TASK</h1>
            <button onClick={getUsers} style={{backgroundColor:"lightgoldenrodyellow",width:"200px",height:"30px",margin:"15px"}}>GET</button>
            <br />
            <br />
            {users.length > 0 && (
                <table style={{borderCollapse:"collapse", margin:"auto",width:"80%", backgroundColor:"lightblue",color:"black",fontWeight:"bolder"}} border="5" cellPadding="20">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Author</th>
                    <th>QUOTE</th>
                </tr>
            </thead>

                <tbody>
                    {users.map((user) => (
                        
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.author}</td>
                            <td>{user.quote}</td>
                        </tr>
                    ))}
                </tbody>



            </table>
            )}


        </div>
    )
}
