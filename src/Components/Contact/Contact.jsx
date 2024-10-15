import React from 'react'
import { IoIosCall } from "react-icons/io";
import { CgMail } from "react-icons/cg";

const Contact = () => {
  
  return (
    <>
    <div className='flex flex-col items-center justify-center gap-y-5'>
  <div className='text-center'>
    <h1 className='text-[20px] font-bold'>Contact <br /> <span className='text-stone-600'>Magic Candles</span></h1>
  </div>
  <div className='flex flex-col r'>
    <div className='flex  mb-2'>
      <IoIosCall  className='mr-2 text-[30px] text-stone-600' />
      <p className='p-text'>+917667280029</p>
    </div>
    <div className='flex items-center'>
      <CgMail className='mr-2 text-[30px] text-stone-600' />
      <p className='p-text'>manirajsingh7667@gmail.com</p>
    </div>
  </div>
   </div>
   <div className='flex justify-center mt-10'>
   <form 
        className="bg-white p-6 rounded shadow-md w-96 "
      >
        <h1 className="text-xl font-bold mb-4 text-center">Sign Up</h1>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
   </div>
   
    </>

  )
}

export default Contact