import React from 'react'
import Image from 'next/image'
import { Instagram, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <div className='bg-black px-20 max-sm:px-5 py-[5%] mt-[5%]' >
        <div className="flex items-center justify-between flex-col lg:flex-row gap-5">
            <div className="flex flex-col lg:items-start items-center">
                <div className="logo flex gap-2 items-center mb-2">
                    <Image 
                        src='/con-img (1).jpg'
                        width={32}
                        height={32}
                        className='h-10 w-10 rounded-full'
                        alt='logo'
                    />
                     <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                        Confluence 2025
                    </span>
                </div>

                <p className='text-white'>Ogbomoso, Nigeria</p>
            </div>

            <div className="flex gap-5">
                 <div className='p-2 cursor-pointer bg-white rounded-lg w-10 text-center'>
                  <i className="bi bi-twitter-x"></i>
                </div>
                 <div className='p-2 cursor-pointer bg-white rounded-lg w-10'>
                  <Instagram />
                </div>
                 <div className='p-2 cursor-pointer bg-white rounded-lg w-10'>
                  <Linkedin />
                </div>
            </div>
            
            <div className="flex text-white gap-5">
                <p className='cursor-pointer text-xs'>Privacy Policy</p>
                <p className='cursor-pointer text-xs'>Terms of Service</p>
                <p className='cursor-pointer text-xs'>Code of Conduct</p>
            </div>
        </div>

        <hr className='text-white my-7' />

        <div className="flex justify-between text-white max-sm:flex-col gap-5 text-sm max-sm:items-center">
            <p>© 2025 Blockchain Lautech. All rights reserved.</p>
            <p>Powered by innovation. Driven by community.</p>
        </div>
    </div>
  )
}

export default Footer