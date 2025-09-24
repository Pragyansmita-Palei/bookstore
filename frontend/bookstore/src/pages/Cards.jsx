import React from 'react'

function Cards({item}) {

  return (
    <>
    <div className='my-4 flex justify-center'>
      <div className="card bg-base-100 w-50 lg:w-80 shadow-sm hover:scale-105 dark:bg-slate-900 dark:text-white">
  <figure>
   <img
  src={item.image}
  alt="Shoes"
  className="h-50 w-50 lg:h-auto lg:w-auto"
/>

  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline px-2 py-1 hover:bg-pink-500 hover:text-white duration-300">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards