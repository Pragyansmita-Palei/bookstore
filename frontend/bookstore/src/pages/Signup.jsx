import React from 'react'
import { Link } from 'react-router-dom'
import Login from './login'
import { useForm } from "react-hook-form";

function Signup() {
   const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 relative">
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
              className="w-full px-3 py-2 border rounded-md outline-none"
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
              className="w-full px-3 py-2 border rounded-md outline-none"
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
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("password", { required: true })}

            />
            {errors.password && <span className='text-red-500'>This field is required</span>}

          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-3 py-2 border rounded-md outline-none"
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
