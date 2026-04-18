import React from 'react'
import Layout from '../components/Layout'

const Portfolio = () => {
  return (
    <Layout>
        
    {/* 1st main image */}
    <img src="/portfolio/mainimg.webp" alt='blogmainimg' className='w-full object-cover h-[600px] '/>

    {/* heading */}
    <h1 className='text-5xl pt-20 text-[#A98066] px-10 font-medium text-center font-serif'> Interior Design Ideas To Inspire Every Room In Your Home </h1>

    {/* 1st section */}
   <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="/portfolio/img11.webp" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="/portfolio/img12.webp" />
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="/portfolio/img20.webp" />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="/portfolio/img10.webp" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="/portfolio/img21.webp" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="/portfolio/img22.webp" />
        </div>
      </div>
    </div>

  </div>
</section>

    {/* 1st main image */}
    <img src="/portfolio/middleimage.webp" alt='blogmainimg' className='w-11/12 mx-auto'/>

    {/* 2nd section */}
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="/portfolio/img31.webp" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="/portfolio/img32.webp" />
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="/portfolio/img40.webp" />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="/portfolio/img30.webp" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="/portfolio/img41.webp" />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="/portfolio/img42.webp" />
        </div>
      </div>
    </div>

  </div>
</section>



    </Layout>
  )
}

export default Portfolio
