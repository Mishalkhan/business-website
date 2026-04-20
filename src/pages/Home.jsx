import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import Slider from '../home/Slider'

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
    <div className="relative">

    {/* Background Image */}
    <img
        src="/home/hero/img1.webp"   // change if needed
        alt="home hero"
        className="w-full h-[400px] md:h-[650px] object-cover"
    />

    {/* Overlay Content */}
    <div className="absolute inset-0 flex items-center ">

        <div className='absolute top-25 left-5 right-5  md:top-28 md:left-28'>
            <div className='w-full md:w-5/12 bg-[#F3F0EB] relative'>
            <div className='py-10 px-5 md:pb-8 md:pt-28 md:px-14'>
                <h1 className='text-xl md:text-5xl pb-5 md:pb-14'>Stunning interior design services, now within reach.</h1>
                <Link to="/portfolio" className="nav-link">
                <button className="bg-[#E59400] border-2 border-[#E59400] hover:bg-transparent hover:text-black hover:border-2 text-black py-2 md:py-3 px-5 md:px-10 rounded-full font-medium text-sm md:text-base cursor-pointer">
                    FIND YOUR STYLE
                </button>
                </Link>
            </div>
            <img src='/home/hero/tag1.png' className='absolute -top-5 left-5 md:left-14 w-10 md:w-20'/>
            </div>
        </div>

    </div>
    </div>


    {/* Section 2 */}
    <div className='py-20'>
    <h1 className='mx-5 md:mx-10 text-center pb-4 font-serif text-[#362B24] font-bold text-lg md:text-xl'>
        HOW M.KHAN INTERIOR DESIGNERS WORKS
    </h1>

    <div className='px-5 md:px-10 pt-16 pb-4 font-serif text-[#362B24]'>
        <div className='flex flex-col md:flex-row'>

            <div className='w-full md:w-1/12 text-center'>
                <p className='text-3xl md:text-4xl'>01</p>
            </div>

            <div className='w-full md:w-6/12 px-5 md:px-14'>
                <h1 className='text-xl md:text-2xl pb-5'>
                    Match with one of our talented designers and get inspired.
                </h1>
                <p>
                    With 10 years of experience in all 50 states and 100,000+ designs, we’ll help you hone your style, get inspired, and realize your design dreams for your specific space.
                </p>
            </div>

            <div className='w-full md:w-5/12 mt-5 md:mt-0'>
                <div className='flex flex-col md:flex-row'>
                    <img src='/home/section1/img11.jpg' className='w-full md:w-6/12 h-64 md:h-[280px] rounded-l-lg object-cover border-2 border-[#ffff]' />
                    <div className='w-full md:w-6/12'>
                        <img src='/home/section1/img12.jpg' className='w-full h-32 md:h-[140px] rounded-tr-lg border-2 border-[#ffff]'/>
                        <img src='/home/section1/img13.jpg' className='w-full h-32 md:h-[140px] rounded-br-lg border-2 border-[#ffff]'/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className='px-5 md:px-10 pt-16 pb-4 font-serif text-[#362B24]'>
        <div className='flex flex-col md:flex-row'>

            <div className='w-full md:w-1/12 text-center'>
                <p className='text-3xl md:text-4xl'>02</p>
            </div>

            <div className='w-full md:w-6/12 px-5 md:px-14'>
                <h1 className='text-xl md:text-2xl pb-5'>
                    Collaborate 1:1 with your designer to create your perfect space.
                </h1>
                <p>
                    Let your designer guide you to a design that meets your functional needs and suits your unique style. See it come to life with a 3D rendering of the design in your actual space.
                </p>
            </div>

            <div className='w-full md:w-5/12 mt-5 md:mt-0'>
                <img src='/home/section1/img21.jpg' className='w-full md:w-10/12 mx-auto rounded-lg object-cover' />
            </div>
        </div>
    </div>

    <div className='px-5 md:px-10 pt-16 pb-4 font-serif text-[#362B24]'>
        <div className='flex flex-col md:flex-row'>

            <div className='w-full md:w-1/12 text-center'>
                <p className='text-3xl md:text-4xl'>03</p>
            </div>

            <div className='w-full md:w-6/12 px-5 md:px-14'>
                <h1 className='text-xl md:text-2xl pb-5'>
                    Bring your design home with ease.
                </h1>
                <p>
                    Our designers source from 100+ home brands so no two spaces are ever alike. Leverage Havenly’s proprietary platform with a simple consolidated checkout and never overpay with our price guarantee.
                </p>
            </div>

            <div className='w-full md:w-5/12 mt-5 md:mt-0'>
                <div className='flex'>
                    <img src='/home/section1/img31.jpg' className='w-1/2 h-64 md:h-[280px] rounded-l-lg object-cover border-2 border-[#ffff]' />
                    <img src='/home/section1/img32.jpg' className='w-1/2 h-64 md:h-[280px] rounded-r-lg object-cover border-2 border-[#ffff]' />
                </div>
            </div>
        </div>
    </div>
</div>


    {/* Section 3 */}
    <div className='bg-[#E0DFAF] px-5 md:px-10 font-serif'>
    <h1 className='py-8 md:py-16 text-3xl md:text-5xl'>
        Our interior design services are tailored <br className='hidden md:block'/> to your space, style, and budget.
    </h1>

    <div className='flex flex-col-reverse md:flex-row pb-10 md:pb-20'>
        <div className='w-full md:w-6/12 flex flex-col md:flex-row'>
            <div className="mt-4 w-full md:w-6/12 px-4 md:mt-16 mx-auto">
                <div className="bg-white border rounded px-6 md:px-8 pt-6 pb-8 shadow">
                    <h3 className="text-2xl md:text-4xl font-thin"> Design Online </h3>
                    <p className="font-medium text-base md:text-lg pt-1">
                        Your designer will work with you 1:1 to bring your vision to life, complete with a 3D rendering of your actual space.
                    </p>
                    <p className="mt-2">Starting at</p>
                    <div className="mt-3">
                        <p className="text-red-500 text-xl md:text-2xl line-through">$199</p>
                        <br/>
                        <p className="font-bold text-2xl md:text-3xl pl-4"> $159 
                            <span className="text-gray-600 text-sm md:text-base">/ month</span>
                        </p> 
                    </div>
                    <p className="mt-3 text-xs">plus $119 for each additional room</p>

                    <button className="mt-3 bg-[#E59400] border-2 border-[#E59400] hover:bg-transparent hover:text-black hover:border-[#E59400] text-black py-2 md:py-3 px-4 md:px-5 mx-auto rounded-full text-xs cursor-pointer">
                        GET STARTED ONLINE
                    </button>
                </div>
            </div>

            <div className="mt-4 w-full md:w-6/12 px-4 md:mt-16 mx-auto">
                <div className="bg-white border rounded px-6 md:px-8 pt-6 pb-8 shadow">
                    <h3 className="text-2xl md:text-4xl font-thin"> Design In-Person </h3>
                    <p className="font-medium text-base md:text-lg pt-4">
                        Our in-person offering allows you to collaborate with your designer 1:1 in your home to bring your vision to life.
                    </p>
                    <p className="mt-5">First room at</p>
                    <div className="mt-3">
                        <p className="text-red-500 text-xl md:text-2xl line-through">$499</p>
                        <p className="font-bold text-2xl md:text-3xl pl-4">9 € 
                            <span className="text-gray-600 text-sm md:text-base">/ month</span>
                        </p> 
                    </div>
                    <p className="mt-5 text-xs">plus $199 for each additional room</p>

                    <button className="mt-8 bg-[#E59400] border-2 border-[#E59400] hover:bg-transparent hover:text-black hover:border-[#E59400] text-black py-2 md:py-3 px-4 md:px-5 mx-auto rounded-full text-xs cursor-pointer">
                        GET STARTED IN-PERSON
                    </button>
                </div>
            </div>
        </div>

        <img src='/home/background image/img1.png' className='w-full md:w-6/12 h-auto object-cover mt-8 md:mt-0'/>
    </div>
</div>


    {/* Section 4 */}
    <div className='w-9/12 mx-auto pb-20'>
      <Slider/>
      <img src='/home/slider2/img1.png' className='py-10'/>
      <div className='flex items-center'>
        <button className='hover:text-[#E59400] pr-2'> PREV </button>
        <hr className='border border-black w-11/12 p-0 m-0'/>
        <button className='hover:text-[#E59400] pl-2'> NEXT </button>
      </div>
    </div>

    {/* Section 5 */}
    <div className='bg-[#F3F0EB]'>
  <div className='mx-auto w-11/12 text-center'>
    <h2 className='pt-10 md:pt-20 font-semibold text-base md:text-lg text-[#352A24]'>GET INSPIRED</h2>
    <h1 className='pt-6 md:pt-12 text-[#352A24] text-3xl md:text-5xl'>Explore real client before & afters.</h1>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 items-center py-10 md:py-20'>
      <button className='rounded-full bg-[#F9DEBE] px-6 md:px-12 py-3 md:py-4 flex items-center justify-center text-sm md:text-base'>
        <img src='/home/smallimages/living1.svg' className='pr-2 md:pr-3 w-5 h-5 md:w-6 md:h-6' />
        Living Room
      </button>
      <button className='rounded-full bg-[#F9DEBE] px-6 md:px-12 py-3 md:py-4 flex items-center justify-center text-sm md:text-base'>
        <img src='/home/smallimages/dining2.svg' className='pr-2 md:pr-3 w-5 h-5 md:w-6 md:h-6' />
        Dining Room
      </button>
      <button className='rounded-full bg-[#F9DEBE] px-6 md:px-12 py-3 md:py-4 flex items-center justify-center text-sm md:text-base'>
        <img src='/home/smallimages/bedroom3.svg' className='pr-2 md:pr-3 w-5 h-5 md:w-6 md:h-6' />
        Bedroom
      </button>
      <button className='rounded-full bg-[#F9DEBE] px-6 md:px-12 py-3 md:py-4 flex items-center justify-center text-sm md:text-base'>
        <img src='/home/smallimages/more4.svg' className='pr-2 md:pr-3 w-5 h-5 md:w-6 md:h-6' />
        Explore More
      </button>
    </div>
  </div>

  <div className="flex flex-col md:flex-row">
    <img src="/home/beforeafter/a12.webp" className="w-full md:w-6/12 h-64 md:h-[600px] object-cover"/>
    <img src='/home/beforeafter/c12.webp' className="w-full md:w-6/12 h-64 md:h-[600px] object-cover"/>
  </div>

  
  <div className='mx-auto text-center py-10 md:py-16'>
    <Link to="/portfolio">
    <button className="bg-[#E59400] border-2 border-[#E59400] hover:bg-transparent hover:text-black text-black py-3 px-6 rounded-full font-semibold text-sm w-7/12 md:w-3/12 lg:w-2/12 cursor-pointer">
      GET STARTED
    </button>
    </Link>
  </div>
</div>


    {/* Section 6 */}
    <div className="flex flex-col md:flex-row">
  <div className='w-full md:w-6/12 h-64 md:h-[600px] text-[#362B24] p-6 md:pl-10 bg-[#E8E5DE]'>
    <h3 className='pt-10 md:pt-20 pb-4 md:pb-8 font-semibold text-lg md:text-xl'>OUR PARTNERS IN STYLE</h3>
    <p className='w-full md:w-9/12 text-sm md:text-base'>
      Having a hard time finding the perfect piece for your home? We’ve got you. Our designers thoughtfully source products from your favorite brands (tailored to your style and budget).
    </p>
  </div>

  <img src='/home/section1/imglast.webp' className="w-full md:w-6/12 h-64 md:h-[600px] object-cover" />
</div>



    {/* Section 7 */}
    <div className='mx-auto bg-[#FAC8A9] text-center justify-center'>

      <h3 className='pt-10 font-semibold'> OUR PARTNERS IN STYLE </h3>
      <p className='w-9/12 mx-auto pt-5 pb-10'>Having a hard time finding the perfect piece for your home? We’ve got you. Our designers thoughtfully source products from your favorite brands (tailored to your style and budget).</p>

    </div>



    </Layout>  

  )
}

export default Home
