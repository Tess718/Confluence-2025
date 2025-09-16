import { MailQuestionMark, ExternalLink } from 'lucide-react'
import React from 'react'

const Connected = () => {
  return (
    <section id='contact' className='pt-[8%] max-sm:pt-[20%] px-20 max-sm:px-5'>
      <div className='md:text-2xl text-xs  font-semibold bg-white py-2 px-7 rounded-full w-fit text-nowrap mx-auto shadow'>
        <h2 className=' text-gradient uppercase'>Stay Connected</h2>
      </div>
        <p className='text-center text-gradient pt-3 text-2xl md:text-4xl lg:text-5xl font-semibold '>Follow our journey to <br /> Confluence 2025</p>


        <div className="flex gap-10 md:mt-12 my-7 flex-col lg:flex-row lg:items-center">
          <div className="basis-1/2" data-aos="fade-right">
            <h2 className='text-4xl max-sm:text-2xl font-medium text-slate-700 max-sm:text-center'>About Blockchain Lautech</h2>
            <p className='text-lg text-slate-700 mt-5 max-sm:text-center'>Blockchain Lautech has been championing blockchain education since 2020. Through workshops, hackathons, and community building, we&apos;ve created a vibrant ecosystem that connects LAUTECH students to the global Web3 movement.


           </p>
            {/* <div className="flex gap-5 mt-5 text-center text-slate-700">
              <div className='basis-[33%] bg-white shadow rounded-lg p-5'>
                <h3 className='text-2xl font-semibold'>2020</h3>
                <p>Founded</p>
              </div>
              <div className='basis-[33%] bg-white shadow rounded-lg p-5'>
                <h3 className='text-2xl font-semibold'>500+</h3>
                <p>Students Reached</p>
              </div>
              <div className='basis-[33%] bg-white shadow rounded-lg p-5'>
                <h3 className='text-2xl font-semibold'>10+</h3>
                <p>Workshops</p>
              </div>
            </div> */}

            <div className='bg-white shadow rounded-lg p-5 border-l-3 border-blue-700 mt-5 font-medium text-slate-700'>
              <h3> Our Mission: To democratize blockchain education and foster innovation from Nigeria to the world.</h3>
            </div>


            <button className='bg-blue-700 px-7 py-3 rounded-lg md:text-sm text-xs cursor-pointer font-normal text-white mt-5 flex items-center justify-center gap-2 w-full'>Learn More About Us <ExternalLink /></button>  
          </div>
          <div className="basis-1/2">
            <div className="flex flex-col gap-5 text-slate-700">
              <div className='p-3 bg-white rounded-lg shadow flex gap-5 w-full' data-aos="fade-bottom">
                <div className='p-3 bg-blue-100 rounded-lg w-fit'>
                  <MailQuestionMark />
                </div>
                <div>
                  <h3 className='text-lg'>General Inquiries</h3>
                  <p>info@confluence2025.com</p>
                </div>
              </div>
              <div className='p-3 bg-white rounded-lg shadow flex gap-5 w-full
              ' data-aos="fade-bottom" data-aos-delay="200">
                <div className='p-3 bg-blue-100 rounded-lg w-fit'>
                   <MailQuestionMark />
                </div>
                <div>
                  <h3 className='text-lg'>Sponsorship</h3>
                  <p>sponsors@confluence2025.com</p>
                </div>
              </div>
              <div className='p-3 bg-white rounded-lg shadow flex gap-5 w-full' data-aos="fade-bottom" data-aos-delay="400">
                <div className='p-3 bg-blue-100 rounded-lg w-fit'>
                  <MailQuestionMark />
                </div>
                <div>
                  <h3 className='text-lg'>Media & Press</h3>
                  <p>press@confluence2025.com</p>
                </div>
              </div>
              <div className='p-3 bg-white rounded-lg shadow flex gap-5 w-full
              ' data-aos="fade-bottom" data-aos-delay="600">
                <div className='p-3 bg-blue-100 rounded-lg w-fit'>
                  <MailQuestionMark />
                </div>
                <div>
                  <h3 className='text-lg'>Technical Support</h3>
                  <p>tech@confluence2025.com</p>
                </div>
              </div>
            </div>
          
          </div>
        </div>

    </section>
  )
}

export default Connected