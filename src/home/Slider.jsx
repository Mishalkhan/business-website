import React, { useEffect } from 'react';
import { Carousel, initTWE } from 'tw-elements';

const Slider = () => {
  useEffect(() => {
    initTWE({ Carousel });
  }, []);

  return (
    <div className='w-full'>

      <div id="carouselExampleControls" className="relative w-full text-center text-xl md:text-3xl" data-twe-carousel-init data-twe-ride="carousel">
        {/* Carousel items */}
        <div className="relative mx-auto w-full md:w-9/12 overflow-hidden after:clear-both after:block after:content-['']">
          {/* First item */}
          <div className="relative float-left -mr-[100%] w-full transition-transform duration-100 delay-75 ease-in-out motion-reduce:transition-none py-10 md:py-20" data-twe-carousel-item data-twe-carousel-active>
            <p>“Imagine if you could hire someone to scour your Pinterest boards and translate your pins into a perfectly decorated room in your home.”</p>
          </div>
          {/* Second item */}
          <div className="relative float-left -mr-[100%] hidden w-full transition-transform duration-100 delay-75 ease-in-out motion-reduce:transition-none py-10 md:py-20" data-twe-carousel-item>
            <p>“M.Khan — offering services that were affordable for everyone.”</p>
          </div>
          {/* Third item */}
          <div className="relative float-left -mr-[100%] hidden w-full transition-transform duration-100 delay-75 ease-in-out motion-reduce:transition-none py-10 md:py-20" data-twe-carousel-item>
            <p>“If you’ve always dreamed of a glamorous home makeover experience but haven’t had the interior designer budget to go along with it, then you’re in luck.”</p>
          </div>
          {/* Fourth item */}
          <div className="relative float-left -mr-[100%] hidden w-full transition-transform duration-100 delay-75 ease-in-out motion-reduce:transition-none py-10 md:py-20" data-twe-carousel-item>
            <p>“These M.Khan's interior designers nailed it.”</p>
          </div>
          {/* Fifth item */}
          <div className="relative float-left -mr-[100%] hidden w-full transition-transform duration-100 delay-75 ease-in-out motion-reduce:transition-none py-10 md:py-20" data-twe-carousel-item>
            <p>“Unlike [another design service] though, we actually loved everything we saw from M.Khan.”</p>
          </div>
        </div>

        {/* Carousel controls - prev item */}
        <button className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] md:w-[10%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none" type="button" data-twe-target="#carouselExampleControls" data-twe-slide="prev">
          <span className="inline-block h-8 w-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
        </button>

        {/* Carousel controls - next item */}
        <button className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] md:w-[10%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none" type="button" data-twe-target="#carouselExampleControls" data-twe-slide="next">
          <span className="inline-block h-8 w-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
        </button>
      </div>

    </div>
  );
}

export default Slider;
