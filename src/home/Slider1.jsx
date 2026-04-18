import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, initTWE } from 'tw-elements';

const Slider1 = () => {
  useEffect(() => {
    initTWE({ Carousel });
  }, []);

  return (
    <div className='relative'>
      <div id="carouselExampleControls" className="relative" data-twe-carousel-init data-twe-ride="carousel">
        <div className="relative w-full h-[650px] overflow-hidden after:clear-both after:block after:content-['']">
          {/* First item */}
          <div className="relative float-left w-full transition-transform duration-100 delay-75 ease-in-out min-h-[60vh] max-h-screen" data-twe-carousel-item data-twe-carousel-active>
            <img src="/carousel/img1.webp" className="block w-full h-auto" alt="Wild Landscape" />
          </div>
          {/* Repeat for other items */}
        </div>
        {/* Carousel controls */}
        <button className="absolute bottom-0 left-0 top-0 z-[1] w-[10%] md:w-[15%] flex items-center justify-center text-white opacity-50 transition-opacity duration-150 hover:opacity-90" type="button" data-twe-target="#carouselExampleControls" data-twe-slide="prev">
          <span className="h-8 w-8">
            <svg xmlns="/carousel/img2.webp" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>
        <button className="absolute bottom-0 right-0 top-0 z-[1] w-[10%] md:w-[15%] flex items-center justify-center text-white opacity-50 transition-opacity duration-150 hover:opacity-90" type="button" data-twe-target="#carouselExampleControls" data-twe-slide="next">
          <span className="h-8 w-8">
            <svg xmlns="/carousel/img3.webp" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </span>
          <span className="sr-only">Next</span>
        </button>
      </div>

      <div className='absolute top-10 left-5 md:top-28 md:left-28'>
        <div className='w-full md:w-5/12 bg-[#F3F0EB] relative'>
          <div className='py-10 px-5 md:pb-8 md:pt-28 md:px-14'>
            <h1 className='text-xl md:text-5xl pb-5 md:pb-14'>Stunning interior design services, now within reach.</h1>
            <Link to="/" className="nav-link">
              <button className="bg-[#E59400] border-2 border-[#E59400] hover:bg-transparent hover:text-black hover:border-2 text-black py-2 md:py-3 px-5 md:px-10 rounded-full font-medium text-sm md:text-base">
                FIND YOUR STYLE
              </button>
            </Link>
          </div>
          <img src='/carousel/tag1.png' className='absolute -top-5 left-5 md:left-14 w-10 md:w-20'/>
        </div>
      </div>
    </div>
  );
}

export default Slider1;
