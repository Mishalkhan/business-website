import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

const HowItWorks = () => {
  return (
    <Layout>

    <div className="bg-[url('/howitworks/backimg.webp')] bg-cover bg-center font-serif text-center">
    <div className="pt-20 md:pt-40 mb-10 h-auto md:h-[650px] w-11/12 md:w-10/12 mx-auto">
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-light text-white">M.Khan's Interior Design Process</h1>
      <p className="text-xl md:text-2xl lg:text-3xl text-white pt-4 md:pt-8">The easiest way to design your space.</p>
      <Link to="/portfolio">
      <button className="bg-[#E59400] border-2 border-[#E59400] hover:bg-transparent hover:text-white hover:border-[#E59400] text-black py-2 px-6 md:py-2 md:px-14 rounded-full font-extralight text-sm md:text-lg my-6 md:mt-10 cursor-pointer">
       GET STARTED
      </button>
      </Link>
    </div>
  </div>
  

    {/* Step 1 */}
    <section className="text-gray-600 body-font">
    <div className="container px-4 py-12 mx-auto flex flex-wrap">
    <div className="flex flex-wrap items-center mb-12 lg:w-3/5 sm:w-2/3">
        <div className="w-full px-4 mb-6">
        <h1 className="title-font leading-relaxed font-bold text-xl md:text-2xl lg:text-3xl mb-2 text-gray-900">STEP 1</h1>
        <div className="leading-relaxed text-lg md:text-xl lg:text-2xl">Select one of our talented designers. They'll become your one-on-one guide and partner.</div>
        </div>
    </div>
    <div className="w-full lg:w-2/5 rounded-lg overflow-hidden">
        <img className="object-cover object-center w-full h-full" src="/howitworks/step1.png" alt="stats" />
    </div>
    </div>
    </section>

    {/* Step 2 */}
    <section className="text-gray-600 body-font">
    <div className="container px-4 py-12 mx-auto flex flex-wrap">
    <div className="w-full lg:w-2/5 rounded-lg overflow-hidden mb-12 lg:mb-0">
        <img className="object-cover object-center w-full h-full" src="/howitworks/step2.jpg" alt="stats" />
    </div>
    <div className="flex flex-wrap items-center lg:w-3/5 sm:w-2/3">
        <div className="w-full px-4">
        <h1 className="title-font leading-relaxed font-bold text-xl md:text-2xl lg:text-3xl mb-2 text-gray-900">STEP 2</h1>
        <div className="leading-relaxed text-lg md:text-xl lg:text-2xl">Tell us all about your dream home. We’ll get to work on bringing it to life.</div>
        </div>
    </div>
    </div>
    </section>

    {/* Step 3 */}
    <section className="text-gray-600 body-font">
    <div className="container px-4 py-12 mx-auto flex flex-wrap">
    <div className="flex flex-wrap items-center mb-12 lg:w-3/5 sm:w-2/3">
        <div className="w-full px-4 mb-6">
        <h1 className="title-font leading-relaxed font-bold text-xl md:text-2xl lg:text-3xl mb-2 text-gray-900">STEP 3</h1>
        <div className="leading-relaxed text-lg md:text-xl lg:text-2xl">Your designer will blow your mind with inspo and ideas for transforming your space.</div>
        </div>
    </div>
    <div className="w-full lg:w-2/5 rounded-lg overflow-hidden">
        <img className="object-cover object-center w-full h-full" src="/howitworks/step3.png" alt="stats" />
    </div>
    </div>
    </section>

    {/* Step 4 */}
    <section className="text-gray-600 body-font">
    <div className="container px-4 py-12 mx-auto flex flex-wrap">
    <div className="w-full lg:w-2/5 rounded-lg overflow-hidden mb-12 lg:mb-0">
        <img className="object-cover object-center w-full h-full" src="/howitworks/step4.jpg" alt="stats" />
    </div>
    <div className="flex flex-wrap items-center lg:w-3/5 sm:w-2/3">
        <div className="w-full px-4">
        <h1 className="title-font leading-relaxed font-bold text-xl md:text-2xl lg:text-3xl mb-2 text-gray-900">STEP 4</h1>
        <div className="leading-relaxed text-lg md:text-xl lg:text-2xl">Tell us which design ideas you vibe with, and we’ll add all the beautiful finishing touches.</div>
        </div>
    </div>
    </div>
    </section>

    {/* Step 5 */}
    <section className="text-gray-600 body-font">
    <div className="container px-4 py-12 mx-auto flex flex-wrap">
    <div className="flex flex-wrap items-center mb-12 lg:w-3/5 sm:w-2/3">
        <div className="w-full px-4 mb-6">
        <h1 className="title-font leading-relaxed font-bold text-xl md:text-2xl lg:text-3xl mb-2 text-gray-900">STEP 5</h1>
        <div className="leading-relaxed text-lg md:text-xl lg:text-2xl">Shop items from your design in one place, and we'll take care of the logistics. It's that simple.</div>
        </div>
    </div>
    <div className="w-full lg:w-2/5 rounded-lg overflow-hidden">
        <img className="object-contain object-center w-full h-full mx-auto" src="/howitworks/step5.png" alt="stats" />
    </div>
    </div>
    </section>


    {/* Last Section */}
    <section className="flex flex-col md:flex-row font-serif items-center bg-[#ED6B4D] text-white">
    <div className="w-full md:w-1/2">
        <img src='/howitworks/lastimg.avif' className="w-full h-auto object-cover" alt="last section image" />
    </div>

    <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center text-center md:text-left">
        <h3 className='text-2xl md:text-3xl font-semibold mb-4'>STYLE QUIZ</h3>
        <p className='text-2xl md:text-4xl mb-6'>A "just for you" room design awaits.</p>

        <button className="bg-white border-2 border-white hover:bg-transparent hover:text-white hover:border-white text-black py-2 px-6 rounded-full font-bold text-sm md:text-base">
        GET STARTED
        </button>
    </div>
    </section>


    </Layout>
  )
}

export default HowItWorks
