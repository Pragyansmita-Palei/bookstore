import React from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';

function Signup() {
   const { register, handleSubmit, watch, formState: { errors } } = useForm();
     const navigate = useNavigate();

    const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:8080/api/V1/user/register", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
        toast.success(' signup Successfully');
        navigate("/");
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        console.log(err);
        toast.error('user esxit already');
      });
  };
  console.log(watch("example"));
  return (
    <div className="flex justify-center items-center min-h-screen relative pr-4 pl-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-96 relative">
        {/* Close Button */}
        <Link
          to="/"
          className="absolute top-4 right-4 text-gray-500 hover:text-pink-500 text-2xl font-bold"
        >
          ✕
        </Link>

        <h3 className="font-bold text-2xl text-center mb-6 text-gray-800">
          Signup
        </h3>

      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
          <div>
            <label className=" text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-md outline-none dark:text-black"
              {...register("name", { required: true })}
            />
          {errors.name && <span className='text-red-500'>This field is required</span>}

          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none dark:text-black"
             {...register("email", { required: true })}

            />
            {errors.email && <span className='text-red-500'>This field is required</span>}

          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md outline-none dark:text-black"
              {...register("password", { required: true })}

            />
            {errors.password && <span className='text-red-500'>This field is required</span>}

          </div>
        </div>

        <button className="mt-6 w-full bg-pink-500 text-white rounded-md px-3 py-2 hover:bg-pink-700">
          Signup
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already registered?{" "}
          <a
            className="text-blue-500 underline decoration-blue-500 cursor-pointer"
            onClick={() =>
              document.getElementById("my_modal_3").showModal()
            }
          >
            Login
          </a>
        </p>
      </form>
      </div>
      <Login />

    </div>
  )
}

export default Signup
