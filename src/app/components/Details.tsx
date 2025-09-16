import { Calendar, CircleDollarSign, MapPin, Target } from 'lucide-react'
import React from 'react'

const Details = () => {
  return (
    <div className='pt-[8%] max-sm:pt-[20%]  px-20 max-sm:px-5'>
      <div className='md:text-2xl text-xs  font-semibold bg-white py-2 px-7 rounded-full w-fit text-nowrap mx-auto shadow'><h2 className=' text-gradient uppercase'>Event Details</h2></div>
        <p className='text-center text-gradient pt-3 text-2xl md:text-4xl lg:text-5xl font-semibold '>When, Where, and What’s <br /> Happening</p>  

      <div className="flex pt-12 gap-5 flex-col lg:flex-row items-stretch">
        <div className="basis-1/2">
          <div className="flex flex-col">
            <div className="bg-white px-5 py-10 rounded-lg text-center shadow h-55" data-aos="fade-right">
              <div className='p-3 bg-conblue text-white rounded-lg w-fit mx-auto'>
                <Calendar />
              </div>
              <h2 className='text-conblue font-bold py-3 text-3xl'>Event Date</h2>
              <p className='text-slate-500 font-medium'>November 7-8, 2025</p>
            </div>

            <div className="flex gap-5 pt-5 flex-col md:flex-row">
              <div className="bg-white px-5 py-10 rounded-lg text-center shadow basis-1/2 h-55" data-aos="fade-up" data-aos-delay="200">
              <div className='p-3 bg-conblue text-white rounded-lg w-fit mx-auto'>
                <MapPin/>
              </div>
              <h2 className='text-conblue font-bold py-3 text-3xl'>Location</h2>
              <p className='text-slate-500 font-medium'>Ogbomoso, Oyo State, Nigeria</p>
            </div>

              <div className="bg-white px-5 py-10 rounded-lg text-center shadow basis-1/2 h-55" data-aos="fade-up" data-aos-delay="300">
                <div className='p-3 bg-conblue text-white rounded-lg w-fit mx-auto'>
                  <Calendar />
                </div>
                <h2 className='text-conblue font-bold py-3 text-3xl'>Attendance</h2>
                <p className='text-slate-500 font-medium'>500+ participants</p>
              </div>
            </div>

          </div>
        </div>
        <div className="basis-1/2">
          <div className="flex flex-col md:flex-row lg:flex-col gap-5">
              <div className="bg-white px-5 py-10 rounded-lg text-center shadow h-55" data-aos="fade-left" data-aos-delay="500">
                  <div className='p-3 bg-conblue text-white rounded-lg w-fit mx-auto'>
                    <CircleDollarSign />
                  </div>
                  <h2 className='text-conblue font-bold py-3 text-3xl'>Cost</h2>
                  <p className='text-slate-500 font-medium'>Free for all attendees</p>
              </div>
              <div className="bg-white px-5 py-10 rounded-lg text-center shadow h-55" data-aos="fade-left" data-aos-delay="700">
                  <div className='p-3 bg-conblue text-white rounded-lg w-fit mx-auto'>
                    <Target />
                  </div>
                  <h2 className='text-conblue font-bold py-3 text-3xl'>Focus</h2>
                  <p className='text-slate-500 font-medium'>Blockchain, Web3, and emerging technologies</p>
              </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Details