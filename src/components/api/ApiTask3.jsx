import axios from 'axios';
import React, { useState } from 'react'


export const ApiTask3 = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/users");
            setUsers(response.data.users);

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>API TASK3</h1>
            <button onClick={getUsers} style={{ backgroundColor: "lightgoldenrodyellow", width: "200px", height: "30px", margin: "15px" }}>GET</button>
            <br />
            <br />
            {users.length > 0 && (
                <table style={{ borderCollapse: "collapse", margin: "auto", width: "80%", backgroundColor: "lightblue", color: "black", fontWeight: "bolder" }} border="5" cellPadding="20">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.firstName} {user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                            </tr>
                        ))}
                    </tbody>



                </table>
            )}


        </div>
    )
}
