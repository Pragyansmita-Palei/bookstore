import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import toast from 'react-hot-toast'
function Logout() {
    const [authUser,setAuthUser]=useAuth()
    const handleLogout =()=>{
      try{
       setAuthUser({
        ...authUser,
        user:null
       })
       localStorage.removeItem("Users")
       toast.success("logout sucessfully")
        setTimeout(() => {
           window.location.reload();
          }, 2000)
      }catch(err){
       toast.error("err "+err.message)
      }
    }
  return (
    <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
    onClick={handleLogout}
    >Logout</button>
  )
}

export default Logout