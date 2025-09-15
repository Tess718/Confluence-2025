import React from 'react'
import {  CircleSmall } from 'lucide-react'
// import MagicBento from './MagicBento'

const Register = () => {
  return (
    <div className='pt-[8%] max-sm:pt-[20%]  px-20 max-sm:px-5'>
        <div className='md:text-2xl text-xs  font-semibold bg-white py-2 px-7 rounded-full w-fit text-nowrap mx-auto shadow'><h2 className=' text-gradient uppercase'>Register Now</h2></div>
        <p className='text-center text-gradient pt-3 text-2xl md:text-4xl lg:text-5xl font-semibold '>Choose your track and join us <br className='hidden lg:block' /> for an unforgettable experience <br className='hidden lg:block' /> at Confluence 2025.</p>

        <div className="flex justify-between pt-10 flex-col lg:flex-row gap-5">
            <div className="basis-1/2 bg-[#ecf0ff] shadow p-2.5 rounded-lg">
                <div className="inner bg-[#ecf0ff] rounded-md p-4 h-full">
                    <div className="header py-5.5 border-b border-slate-300">
                        <h3 className='text-slate-700 font-semibold text-3xl'> Community Track</h3>
                        <p className='text-slate-500 text-lg font-medium pt-3'>Perfect for: Students, professionals, entrepreneurs, and anyone curious about Web3</p>
                    </div>
                    <div className="body pt-6">
                        <p className='text-slate-500 font-medium pb-3'>Includes:</p>
                        <ul className='font-medium text-slate-500 space-y-4.5'>
                            <li className='flex gap-2'><CircleSmall fill='currentColor' />All sessions and keynotes</li>
                            <li className='flex gap-2'><CircleSmall fill='currentColor' />Networking lunch</li>
                            <li className='flex gap-2'><CircleSmall fill='currentColor' />Interactive workshops</li>
                            <li className='flex gap-2'><CircleSmall fill='currentColor' />Startup exhibitions</li>
                        </ul>

                       <button className='bg-white text-slate-700 px-7 py-3 rounded-lg md:text-sm text-xs pointer font-normal mt-15 w-full'>Register for Community Track → </button>
                    </div>

                </div>
            </div>
            <div className="basis-1/2 bg-[#fef4e2] shadow p-2.5 rounded-lg">
            <div className="inner bg-[#fef4e2] rounded-md p-4 h-full">
                <div className="header py-5.5 border-b border-slate-300">
                    <h3 className='text-slate-700 font-semibold text-3xl'>Developer Track</h3>
                    <p className='text-slate-500 text-lg font-medium pt-3'>Perfect for: Developers, designers, and technical creators</p>
                </div>
                 <div className="body pt-6 relative">
                        <p className='text-slate-500 font-medium pb-3'>Includes:</p>
                        <ul className='font-medium text-slate-500 space-y-4.5'>
                            <li className='flex gap-2'><CircleSmall fill='currentColor' />Hackathons and competitions</li>
                            <li className='flex gap-2'><CircleSmall fill='currentColor' />Bounty challenges</li>
                            <li className='flex gap-2'><CircleSmall fill='currentColor' />Technical workshops</li>
                            <li className='flex gap-2'><CircleSmall fill='currentColor' />Prizes and awards</li>
                        </ul>

                       <button className='bg-white text-slate-700 px-7 py-3 rounded-lg md:text-sm text-xs pointer font-normal mt-15 w-full lg:absolute -bottom-33 md:static'>Apply for Dev Track →</button>
                    </div>

            </div>
            </div>
        </div>

        

        {/* <MagicBento 
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor="132, 0, 255"
        /> */}
        
    </div>
  )
}

export default Register