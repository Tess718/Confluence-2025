import React from 'react'
import { Medal, Code, Target, Network, Award, Presentation, Users, Rocket } from 'lucide-react'

const Format = () => {
  return (
    <section id='format' className='pt-[8%] max-sm:pt-[20%] px-20 max-sm:px-5'>
        <div className='md:text-2xl text-xs font-semibold bg-white py-2 px-7 rounded-full w-fit text-nowrap mx-auto shadow'><h2 className=' text-gradient uppercase'>Event Format</h2></div>
        <p className='text-center text-gradient pt-3 text-2xl md:text-4xl lg:text-5xl font-semibold '>Two days of intensive learning, <br className='hidden lg:block' /> networking, and innovation designed <br className='hidden lg:block' /> for different audiences.</p>

        <div className="flex justify-between pt-10 flex-col lg:flex-row gap-5">
            <div className="basis-1/2 bg-[#ecf0ff] shadow p-2.5 rounded-lg" data-aos="fade-right">
                <div className="inner bg-[#ecf0ff] rounded-md p-4 h-full">
                    <div className="header py-5.5 border-b border-slate-300">
                        <h3 className='text-slate-700 font-semibold text-3xl'> Day 1: Developer Track</h3>
                        <p className='text-slate-500 text-lg font-medium pt-3'>November 7, 2025</p>
                    </div>
                    <div className="body pt-6">
                        <ul className='font-medium text-slate-500 space-y-4.5'>
                            <li className='flex gap-2'><Medal />Hackathons & Coding Competitions</li>
                            <li className='flex gap-2'><Code />Technical Workshops</li>
                            <li className='flex gap-2'><Target />Bounty Challenges</li>
                            <li className='flex gap-2'><Network />Developer Networking</li>
                            <li className='flex gap-2'><Award />Prize Distribution</li>
                        </ul>

                        <p className='font-medium text-slate-500 pt-5'>Registration via separate application process</p>
                    </div>

                </div>
            </div>
            <div className="basis-1/2 bg-[#fef4e2] shadow p-2.5 rounded-lg" data-aos="fade-left">
            <div className="inner bg-[#fef4e2] rounded-md p-4 h-full">
                <div className="header py-5.5 border-b border-slate-300">
                    <h3 className='text-slate-700 font-semibold text-3xl'>Day 2: Community Track</h3>
                    <p className='text-slate-500 text-lg font-medium pt-3'>November 8, 2025</p>
                </div>
                <div className="body body pt-6">
                    <ul className='font-medium text-slate-500 space-y-3.5'>
                        <li className='flex gap-2'><Presentation />Keynote Presentations</li>
                        <li className='flex gap-2'><Users />Expert Panel Discussions</li>
                        <li className='flex gap-2'><Target />Women in Web3 Sessions</li>
                        <li className='flex gap-2'><Rocket />Startup Exhibitions</li>
                        <li className='flex gap-2'><Code />Interactive Workshops</li>
                        <li className='flex gap-2'><Network />Networking Opportunities</li>
                    </ul>

                    <p className='font-medium text-slate-500 py-5'>Open registration for all attendees</p>
                </div>

            </div>
            </div>
        </div>
    </section>
  )
}

export default Format