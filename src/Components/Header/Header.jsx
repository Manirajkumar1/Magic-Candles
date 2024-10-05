import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaAlignCenter } from "react-icons/fa";
const Header = () => {
  return (
    <header className='sticky shadow-md px-8 py-5'>
        <nav className=' flex  justify-between'>
            <div>
                <h1 className='font-semibold'>Magic Candles</h1>
            </div>
            <div className='hidden md:block'>
            <ul className='flex gap-7 font-semibold '>
                <li>
                    <NavLink to='' className={({isActive}) => ` hover:border-b-2 border-stone-700 ${isActive ? " hover:border-b-2 border-b-2 border-stone-700" : ""}`}>
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/candles' className={({isActive}) => ` hover:border-b-2 border-stone-700 ${isActive ? " hover:border-b-2 border-b-2 border-stone-700" : ""}`}>
                        Candles
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/about' className={({isActive}) => ` hover:border-b-2 border-stone-700 ${isActive ? " hover:border-b-2 border-b-2 border-stone-700" : ""}`}>
                        About us
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/contact' className={({isActive}) => ` hover:border-b-2 border-stone-700 ${isActive ? " hover:border-b-2 border-b-2 border-stone-700" : ""}`}>
                        Contact Us
                    </NavLink>
                </li>
            </ul>
            </div>
            <div className=' gap-4 hidden lg:block'>
                <button
                className='font-semibold text-white bg-stone-600 px-3 rounded-2xl'
                >Sign Up</button>

                <button
                className='font-semibold text-stone-600 border  px-3 rounded-2xl'
                >Log In</button>
            </div>
            <div className='lg:hidden'>
            <FaAlignCenter className='text-[20px]' />
            </div>
        </nav>
    </header>
  )
}

export default Header