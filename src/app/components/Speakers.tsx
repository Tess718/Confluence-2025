import { Users } from 'lucide-react'
import React from 'react'

const Speakers = () => {
  return (
    <div className='pt-[8%] max-sm:pt-[20%]  px-20 max-sm:px-5'>
        <div className='md:text-2xl text-xs  font-semibold bg-white py-2 px-7 rounded-full w-fit text-nowrap mx-auto shadow'>
          <h2 className=' text-gradient uppercase'>Speakers & Partners</h2>
          </div>
        <p className='text-center text-gradient pt-3 text-2xl md:text-4xl lg:text-5xl font-semibold '>The Voices and the <br /> Visionaries</p>

        <div className='pt-10'>
            <div className="bg-white p-10 rounded-lg shadow text-center">
                <div className="p-5 rounded-lg mx-auto w-fit bg-blue-100 mb-5">
                    <Users size={30}/>
                </div>

                <h2 className='text-3xl font-semibold text-slate-700'>Coming Soon...</h2>
                <p className='text-slate-500 py-5 text-lg'>We're announcing our incredible lineup of industry leaders, <br /> innovative startups, and ecosystem partners.</p>

                <button className='px-10 py-3 rounded-lg md:text-sm text-xs pointer font-normal bg-blue-800 text-white transition cursor-pointer'>Contact Us</button>
            </div>
        </div>
    </div>
  )
}

export default Speakers