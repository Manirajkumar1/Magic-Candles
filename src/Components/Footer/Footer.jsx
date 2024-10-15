import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp   } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    < >
    <div className='w-full bg-stone-300 p-4  '>
      <div className='flex gap-3 md:justify-center  '>
        <a href="">Privacy policy</a>
        <a href="">Terms and conditions</a>
        <a href="/contact">contact</a>
      </div>
      <div className='flex justify-center gap-5 py-4'>
      <FaFacebook className='text-[30px] text-stone-800' />
      <FaInstagram className='text-[30px] text-stone-800'  />
      <FaWhatsapp className='text-[30px] text-stone-800'  />
      </div>
      <div className='flex justify-center'>
        A website created By Maniraj Singh
      </div>
    </div>
    </>
  )
}

export default Footer