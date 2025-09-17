import { Users, Globe, Code, Zap, Palette, Database, Smartphone, Cloud } from 'lucide-react'
import React from 'react'
// import LogoLoop from './LogoLoop'

// const techLogos = [
//   { node: <Code size={32} />, title: "Development", href: "#" },
//   { node: <Globe size={32} />, title: "Web Technologies", href: "#" },
//   { node: <Zap size={32} />, title: "Performance", href: "#" },
//   { node: <Palette size={32} />, title: "Design Systems", href: "#" },
//   { node: <Database size={32} />, title: "Data Solutions", href: "#" },
//   { node: <Smartphone size={32} />, title: "Mobile Apps", href: "#" },
//   { node: <Cloud size={32} />, title: "Cloud Services", href: "#" },
// ]

// Alternative with image sources
// const imageLogos = [
//   { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
//   { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
//   { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
// ]

const Speakers = () => {
  return (
    <div className='pt-[8%] max-sm:pt-[20%] px-20 max-sm:px-5'>
      <div className='md:text-2xl text-xs font-semibold bg-white py-2 px-7 rounded-full w-fit text-nowrap mx-auto shadow'>
        <h2 className='text-gradient uppercase'>Speakers & Partners</h2>
      </div>
      <p className='text-center text-gradient pt-3 text-2xl md:text-4xl lg:text-5xl font-semibold'>
        The Voices and the <br /> Visionaries
      </p>

      <div className='pt-10'>
        <div className="bg-white p-10 rounded-3xl shadow text-center" data-aos="fade-up">
          <div className="p-5 rounded-lg mx-auto w-fit text-white bg-conblue mb-5">
            <Users size={30}/>
          </div>

          <h2 className='text-3xl font-semibold text-slate-700'>Coming Soon...</h2>
          <p className='text-slate-500 py-5 text-lg'>
            We&apos;re announcing our incredible lineup of industry leaders, <br /> 
            innovative startups, and ecosystem partners.
          </p>

          <button className='px-10 py-3 rounded-lg md:text-sm text-xs pointer font-normal bg-conblue text-white transition cursor-pointer'>
            Contact Us
          </button>
        </div>
      </div>

      {/* Logo Loop Section */}
      {/* <div className="mt-16">
        <p className='text-center text-gradient pt-3 text-2xl md:text-4xl lg:text-5xl font-semibold'>
        Our Partners
      </p>
        <div style={{ position: 'relative', overflow: 'hidden'}} className='pt-10'>
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="transparent"
            ariaLabel="Technology partners"
          />
        </div>
      </div> */}
    </div>
  )
}

export default Speakers