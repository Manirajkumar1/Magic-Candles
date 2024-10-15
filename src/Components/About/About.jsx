import React, { useEffect } from 'react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'
import img1 from '../../assets/aimg1.png.webp'
import img2 from '../../assets/aimg2.png.webp'

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      '#about-text', 
      { x: -100, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 1.5,   }
    );
  },[])
  return (
    <div className='m-2 '>
      <div className='mt-6 '>
        <div className='lg:flex lg:justify-center'>
        <h1 className='text-[20px] font-semibold mb-7 '>
          About us <br /> <span className='text-stone-400'>with a passion</span>
        </h1>
        </div>
        
        <div className='flex flex-col lg:flex-row  relative'>
        <Link className='lg:absolute lg:right-36'>
        <img className='lg:w-[600px] lg:h-[500px]' src={img1} alt="" />
        </Link>
        <div id='about-text' className='space-y-6 mb-7 lg:w-[600px] lg:ml-40 lg:mt-20 lg:mb-20 '>
        <div className=''>
        <h1 className='mt-4 mb-2 text-[20px] font-semibold  '>
        Relax in harmony with nature
        </h1>
        </div>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
          <p>
          Quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
          </p>
          <p>
          Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
          </p>
        </div>
        </div>
        <div className='lg:flex lg:mt-12 lg:px-36 '>
        <Link className=' '>
        <img src={img2} alt="" />
        </Link>
        <div className='lg:w-[680px] lg:ml-10 '>
        <h1 className='mt-5 font-semibold text-[20px]'>
        Find a moment for yourself
        </h1>
        <div className='space-y-6 mt-7'>
        <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.
        </p>
        <p>
        Quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
        </p>
        <p>
        Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore.
        </p>
        <div className='flex justify-center'>
        <button 
        className='px-6 py-3  border-2 border-stone-700'
        >Go to store</button>
        </div>
        </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default About