import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaAlignCenter, FaTimes } from "react-icons/fa";
import { NavbarItem } from "../../mockData/data";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open); 
  };
  return (
    <>
      <header className="sticky top-0 shadow-md px-8 py-5 bg-white z-[1000] ">
        <nav className=" flex  justify-between">
          <div className="flex left-0 lg:right-0">
            <h1 className="font-semibold">Magic Candles</h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-7 font-semibold ">
              {NavbarItem.map((item) => {
                return (
                  <li key={item.id}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        ` hover:border-b-2 border-orange-700 ${
                          isActive ? "border-b-2 border-stone-700" : ""
                        }`
                      }
                    >
                      {item.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className=" px-4 hidden lg:flex gap-6">
            <button className="font-semibold text-white bg-stone-600 px-4 rounded-2xl ">
              Sign Up
            </button>

            <button className="font-semibold text-stone-600 border  px-4 rounded-2xl">
              Log In
            </button>
          </div>
          {/* Mobile Menu Toggle */}
          <div className="lg:hidden block cursor-pointer" onClick={toggleMenu}>
            {open ? <FaTimes /> : <FaAlignCenter />}
          </div>
        </nav>
      </header>
      {/* Mobile Menu */}
      <div
        className={`${
          open ? "block" : "hidden"
        } absolute top-[70px] left-0 w-full bg-stone-400 text-white transition-all duration-300 z-[999]`}
      >
        <ul className="flex flex-col items-center py-5">
          {NavbarItem.map((item) => (
            <li key={item.id} className="py-2">
              <NavLink
                to={item.path}
                className="hover:border-b-2 border-orange-700"
                onClick={() => setOpen(false)} // Close menu on click
              >
                {item.title}
              </NavLink>
            </li>
          ))}
          <li className="py-2">
            <button className="font-semibold text-white bg-stone-600 px-6 py-2 rounded-2xl w-full">
              Sign Up
            </button>
          </li>
          <li className="py-2">
            <button className="font-semibold  text-white  border px-6 py-2 rounded-2xl w-full">
              Log In
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
