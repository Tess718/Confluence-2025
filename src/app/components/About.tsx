import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section id='about' className='pt-[5%] px-20 max-sm:px-5'>
        <div className='md:text-2xl text-xs font-semibold bg-white py-2 px-7 rounded-full w-fit text-nowrap mx-auto shadow'><h2 className=' text-gradient uppercase'>About Confluence</h2></div>
        <p className='text-center text-gradient pt-3 text-2xl md:text-4xl lg:text-5xl font-semibold '>The Vision Behind <br /> Confluence</p>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 lg:pt-16 mt-8">
          <div>

            <p className='text-slate-700'>
              Confluence is the flagship tech conference of Blockchain Lautech, designed to unite students,
              developers, innovators, and industry leaders at the intersection of blockchain, Web3, and emerging
              technologies.
            </p>
            <p className='py-3.5 text-slate-700'>
              Since 2020, Blockchain Lautech has championed blockchain adoption on campus, driving education and
              innovation through hands-on workshops, hackathons, Bitcoin Pizza Day celebrations, developer
              bootcamps, and partnerships with global Web3 projects. To date, we have trained 2,500+ students,
              onboarded developers into ecosystems such as Solana, Sui, and Celo, and nurtured a vibrant community
              that connects LAUTECH to the global blockchain movement
            </p>
            <p className='text-slate-700'>
              Confluence represents the next milestone in this journey — a platform to amplify impact, foster
              collaboration, and showcase the future of technology from Ogbomoso to the world
            </p>

            <div className="flex gap-5 mt-5 flex-col md:flex-row">
              <div className='w-full md:w-70 py-10 text-center rounded-2xl bg-[#ecf0ff] shadow text-slate-700'>
                <h2 className='text-3xl font-semibold'>2,500+</h2>
                <p>Students Trained</p>
              </div>
              <div className='w-full md:w-70 py-10 text-center rounded-2xl bg-[#fef4e2] shadow text-slate-700'>
                <h2 className='text-3xl font-semibold'> 5+</h2>   
                <p>Years of Impact</p>
              </div>
            </div>
          </div>
          <div>
            <Image src='/con-img (2).jpg'
             width={400} 
             height={400}
             alt='About img'
             className='w-full h-full object-cover rounded-2xl'
             />
          </div>
        </div>

    </section>
  )
}

export default About