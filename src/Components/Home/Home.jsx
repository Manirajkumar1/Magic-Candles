import React, { useEffect } from 'react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'
import homepng from '../../assets/home.png'
import img2 from '../../assets/page2img.png'
import img3 from '../../assets/page2img2.jpg'
import { FaEarthAsia, FaLeaf , FaStopwatch , FaGripfire } from "react-icons/fa6";

const Home = () => {
  useEffect(() => {
    gsap.fromTo(
      '#hero-text', 
      { x: -100, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 1.5, delay: 1,  }
    );
  },[])
  return (
    <>
    <div className='mb-10'>
      <div className='flex flex-col lg:flex-row p-4 relative lg:mb-60 '>
      {/* text */}
      <div id='hero-text' className=' hero-text lg:w-full   lg:mt-[300px] lg:ml-14 lg:mr-16 flex flex-col  bg-stone-600 text-white font-semibold p-4 '>
        <div className='lg:w-[500px] lg:ml-40 ' >
          <h1 className='text-[20px] text-center'>Magic</h1>
          <h3 className='font-bold text-[15px] text-center'>Natural soy candles</h3>
          <p className='text-center text-[15px] leading-7'>
         Welcome to the world of natural soy candles, where pleasant fragrance and magical atmosphere come together.
          Our soy candles are handmade, made from natural soy wax, which is eco-friendly and biodegradable.
          </p>
        </div>
      </div>
      {/* img section */}
      <Link id='hero-img' className='lg:absolute lg:right-40'>
      <img className='lg:h-[600px] md:w-full' src={homepng} alt="img" />
      </Link>
    </div>

    {/* page 2 */}

    <div id='pagetwo' className='p-4 '>
      {/* text */}
      <div className=''>
        <h2 className='text-[20px] font-semibold'>Indulge yourself with a little pleasure....</h2>
        <div className='flex'>
        <FaEarthAsia className='text-[150px] text-stone-500 px-2' />
        <p className='mt-10 px-2 '>Soy wax is a natural, eco-friendly and biodegradable source, which means it does not harm the environment.</p>
        </div>

        <div className='flex'>
        <FaLeaf  className='text-[150px] text-stone-500 px-2' />
        <p className='mt-10 px-2 '>Soy wax is made from natural ingredients, which means it doesn't give off the toxic compounds found in traditional paraffin candles.</p>
        </div>

        <div className='flex'>
        <FaStopwatch   className='text-[150px] text-stone-500 px-2' />
        <p className='mt-10 px-2 '>Soy candles burn longer than regular candles, which means you can enjoy their beautiful fragrance and romantic atmosphere for a longer period of time.</p>
        </div>

        <div className='flex'>
        <FaGripfire  className='text-[150px] text-stone-500 px-2' />
        <p className='mt-10 px-2 '>Soy candles are available in a wide range of fragrances, so you can find the perfect scent to relax, unwind or simply to create a pleasant atmosphere in your home.</p>
        </div>
      </div>
      {/* image  */}
      <Link className='flex justify-center '>
      <img className='mt-8 flex ' src={img2} alt="" />
      </Link>
    </div>
    {/* text */}
    <div className='p-4 relative'>
      <h1 className='text-[20px] font-semibold py-3'>
      Healthy, natural, organic....
      </h1>
      <div className='flex-col lg:absolute lg:left-10 lg:mt-10 lg:w-[500px]'>
      <p className='py-3'>
      Our soy candles are high-quality products made from natural soy wax, which is eco-friendly and biodegradable. They are an ideal alternative to ordinary candles, which emit toxic substances.
      </p>

      <p>
      They are available in a variety of scents, from holiday lemon to fresh lavender to warm and soothing vanilla notes. Each scent is a unique experience that will allow you to relax and unwind after a hard day.
      </p>
      <p className='py-4'>
      The products we offer are unique because we take care of every detail to make your experience exceptional.
      </p>
      </div>
      <Link>
      <img className='lg:h-[600px] lg:w-full' src={img3} alt="img" />
      </Link>
    </div>
    </div>
  
    </>
  )
}

export default Home