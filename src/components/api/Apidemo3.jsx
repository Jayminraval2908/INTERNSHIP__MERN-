import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';


export const Apidemo3 = () => {

  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler = async (data) => {
    try {
      const res = await axios.post("https://node5.onrender.com/user/user", data);
      console.log(res.data);
      console.log("Form Data  : ", data);
      alert("User Registered Successfully!!!!");

      reset();

    } catch (error) {
      console.error("Error Object:", error);
      console.error("Response Data:", error.response?.data);
      alert(error.response?.data?.message || error.message || "Registration Failed");
    }
  }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">

          <div className="card shadow p-4">
            <h3 className="text-center mb-4">API DEMO 3 - FORM</h3>

            <form onSubmit={handleSubmit(SubmitHandler)}>

              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name..."
                  {...register("name")}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email..."
                  {...register("email")}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Age</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Your Age..."
                  {...register("age")}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Your Password..."
                  {...register("password")}
                />
              </div>

              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  {...register("isActive")}
                />
                <label className="form-check-label">
                  Active
                </label>
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

