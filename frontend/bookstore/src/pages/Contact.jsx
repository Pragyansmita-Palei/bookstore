import React from 'react'

function Contact() {
  return (
<div className='max-w-screen-2xl mx-auto container px-4 pt-10 '>
  <div className='pt-36 text-center space-y-8 '>
    <h1 className='font-bold text-4xl'>Get in touch</h1>
  <p className='text-gray-700 text-lg md:text-xl leading-relaxed dark:text-white'>We love to hear all the positives, but more importantly all the{" "}
  <span className='block '> critical feedback that helps us improve & grow.</span>
  </p>   
  </div>

 <div className="flex justify-center mt-12 w-full ">
      <div className="bg-gray-500  p-8 w-96 relative">
      
      

        <h3 className="font-bold text-2xl text-center mb-6 text-white">
          Contact Us
        </h3>

      <form>
        <div className="space-y-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Name */}
    <div>
      <label className="block text-sm font-medium text-white">
        Name
      </label>
      <input
        type="text"
        placeholder="Enter your name"
        className="w-full px-3 py-2 border rounded-md outline-none dark:text-white text-white"
      />
    </div>

    {/* Email */}
    <div>
      <label className="block text-sm font-medium text-white">
        Email
      </label>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-3 py-2 border rounded-md outline-none dark:text-white text-white"
      />
    </div>
     
  </div>
   <div>
      <label className="block text-sm font-medium text-white">
        Message
      </label>
      <textarea
        placeholder="Write your message..."
        rows="4"
        className="w-full px-3 py-2 border rounded-md outline-none dark:text-white text-white"
      />
    </div>
</div>

      <div className='flex justify-center'>
        <button className="mt-6  bg-pink-500 text-white  px-3 py-2 hover:bg-pink-700  ">
          Send
        </button>
      </div>
        
       
      </form>
      </div>

    </div>
</div>
  )
}

export default Contact