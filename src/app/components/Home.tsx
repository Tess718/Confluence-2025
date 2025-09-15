'use client'

import React, { useState, useEffect } from 'react'
import { MapPin, Calendar } from 'lucide-react'
import Navbar from './Navbar'
import CircularGallery from './CircularGallery'

const Home = () => {
  const [bend, setBend] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setBend(0.5) // smaller bend on small screens
      } else {
        setBend(3) // default bend on larger screens
      }
    }

    handleResize() // run on mount
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section id='home'>
      <div>
        <Navbar />
        <div className='flex flex-col justify-center items-center gap-7 pt-15 max-sm:px-5 relative z-10'>
          <div className="bg-[#fef4e2] px-7 py-2 rounded-full shadow">
            <h2 className='text-gradient font-medium lg:text-2xl uppercase text-center'>
              Welcome to Confluence 2025
            </h2>
          </div>

          <h1 className='font-semibold lg:text-7xl text-3xl text-gradient text-center tracking-wide'>
            Where Innovation Meets <br className='hidden lg:block' /> Opportunity
          </h1>

          <p className='font-normal lg:text-lg text-center text-slate-700'>
            The flagship tech conference uniting students, developers, and industry leaders at <br className='hidden lg:block' /> 
            the intersection of blockchain, Web3, and emerging technologies.
          </p>

          <div className='flex lg:gap-10 gap-5'>
            <div className="flex items-center gap-2">
              <MapPin className='fill-pink-700 stroke-white' size={20} /> 
              <p className='uppercase font-normal md:text-base text-xs text-slate-700'>Ogbomoso, Nigeria</p>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className='stroke-pink-700 fill-white' size={20} />
              <p className='uppercase font-normal md:text-base text-xs text-slate-700'>November 7-8, 2025</p>
            </div>
          </div>

          <div className='flex gap-5'>
            <button className='bg-blue-700 text-white px-7 py-3 rounded-lg md:text-sm text-xs pointer font-normal cursor-pointer'>
              Register for Community Track
            </button>

            <button className='border-blue-700 border-2 text-blue-700 px-7 py-3 rounded-lg md:text-sm text-xs pointer font-normal cursor-pointer'>
              Apply for Dev Track
            </button>
          </div>
        </div>

        <div style={{ position: 'relative' }} className='-mt-10 max-sm:-mt-10 h-[350px] md:h-[600px]'>
          <CircularGallery 
            bend={bend} 
            textColor="#000" 
            borderRadius={0.05} 
            scrollEase={0.02} 
          />
        </div>
      </div>

    </section>
  )
}

export default Home
