import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo = () => {

    const {register,handleSubmit}=useForm()
    const [userData,setuserData]=useState({})
    const [isSubmitted,setisSubmitted]=useState(false)

    const submitHandler=(data)=>{
        console.log(data)
        setuserData(data)
        setisSubmitted(true)

    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Simple Form</h1>
        <form action="" onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label htmlFor="">NAME :</label>  
                <input type="text" placeholder='Enter Your Name...' {...register("firstName")} />
            </div>
            <div>
                <label htmlFor="">AGE :</label>
                <input type="text" placeholder='Enter Your Age...'{...register("age")} />
            </div>
            <div>
                <label htmlFor="">GENDER</label>
                <br /><br />
                MALE: <input type="radio" value="male" {...register("gender")} />
                FEMALE: <input type="radio" value="female" {...register("gender")} />
            </div>
            <div>
                <label htmlFor="">Hobbies</label>
                <br /><br />
                CRICKET : <input type="checkbox" value="cricket" {...register("hobbies")} />
                TRAVELLING : <input type="checkbox" value="travelling" {...register("hobbies")} />
                MUSIC : <input type="checkbox" value="music" {...register("hobbies")} />
            </div>
            <div>
                <input type="submit" />
            </div>

        </form>

        {
            isSubmitted==true&&
            <div>
                <h1>OUTPUT</h1>

                <h2>Name = {userData.firstName}</h2>
                <h2>Age = {userData.age}</h2>
            </div>
        }

    </div>
  )
}
