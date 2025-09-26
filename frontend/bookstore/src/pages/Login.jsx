import React from 'react'
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';

function Login() {
   const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("https://bookstore-ru35.onrender.com/api/V1/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
        toast.success(' login Successfully');
        document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000)
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("err "+err.message)
      });
  };
  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <div>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/"className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={()=>document.getElementById("my_modal_3").close()}
      >✕</Link>
    </div>
    <h3 className="font-bold text-lg dark:text-black">Login</h3>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mt-4 space-y-2 flex flex-col dark:text-black'
    onSubmit={handleSubmit(onSubmit)}
    >
    <label>Email</label>
    <input 
      type="email" 
      placeholder="Enter your email" 
      className="w-80 px-3 py-1 border rounded-md outline-none"
      {...register("email", { required: true })}
    />
     {errors.email && <span className='text-red-500'>This field is required</span>}

    <label>Password</label>
    <input 
      type="password" 
      placeholder="Enter your password" 
      className="w-80 px-3 py-1 border rounded-md outline-none"
       {...register("password", { required: true })}

    />
   {errors.password && <span className='text-red-500'>This field is required</span>}

    <div className='flex flex-row justify-around mt-4'>
      <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700'>login</button>
      <p className='dark:text-black'>Not registered? <Link to="/signup" className='text-blue-500 underline decoration-blue-500'>signup</Link></p>
    </div>
  </div>
    </form>
  </div>

</dialog>
    </div>
  )
}

export default Login
