import React from 'react'
import Layout from '../components/Layout'

const Giftcard = () => {
  return (
    <Layout>

    {/* Main Image */}
    <div className="relative">
    <img src="/gift/mainimg.avif" alt="blogmainimg" className="w-full object-cover h-[400px] md:h-[600px]" />

    <div className="absolute inset-0 font-serif flex items-center justify-center">
      <div className="w-full md:w-10/12 mx-auto text-center p-4 md:pt-40">
        <h1 className="text-3xl md:text-6xl lg:text-8xl font-light text-white">
          Give the gift of <br className="hidden md:block" /> design magic
        </h1>
        <p className="text-lg md:text-2xl lg:text-3xl text-white pt-4 md:pt-8">
        Have a design lover in your life? Gift a room makeover they'll enjoy for years to come.
        </p>
      </div>
    </div>
    </div>


    {/* 2nd Section */}
    <div className="bg-[#E0DFAF] px-6 md:px-10 font-serif">
    <h1 className="py-10 md:pt-16 text-3xl md:text-5xl text-center md:text-left">
        Our interior design services are tailored <br className="hidden md:block" /> to your space, style, and budget.
    </h1>

    <div className="flex flex-col md:flex-row pb-10 md:pb-20">
        <div className="w-full md:w-6/12 flex flex-col md:flex-row">
            <div className="w-full md:w-6/12 px-4 mt-8 md:mt-16">
                <div className="bg-white border rounded px-6 md:px-8 pt-6 pb-8 shadow">
                    <h3 className="text-2xl md:text-4xl font-thin">Design Online</h3>
                    <p className="font-medium text-sm md:text-lg mt-4">
                        Our in-person offering allows you to collaborate with your designer 1:1 in your home to bring your vision to life.
                    </p>
                    
                      <p className="text-red-500 text-lg md:text-2xl line-through">$199</p>
                      <p className="font-bold text-xl md:text-3xl pl-4">$159</p> 
                    
                    <button className="mt-6 md:mt-8 bg-[#E59400] border-2 border-[#E59400] hover:bg-transparent hover:text-black text-black py-2 px-4 md:py-3 md:px-5 rounded-full text-xs">
                        GIFT ONLINE DESIGN
                    </button>
                </div>
            </div>

            <div className="w-full md:w-6/12 px-4 mt-8 md:mt-16">
                <div className="bg-white border rounded px-6 md:px-8 pt-6 pb-8 shadow">
                    <h3 className="text-2xl md:text-4xl font-thin">Design In-Person</h3>
                    <p className="font-medium text-sm md:text-lg mt-4">
                        Our in-person offering allows you to collaborate with your designer 1:1 in your home to bring your vision to life.
                    </p>
                      <p className="text-red-500 text-lg md:text-2xl line-through">$699</p>
                      <p className="font-bold text-xl md:text-3xl pl-4">$499</p> 
                   
                    <button className="mt-6 md:mt-8 bg-[#E59400] border-2 border-[#E59400] hover:bg-transparent hover:text-black text-black py-2 px-4 md:py-3 md:px-5 rounded-full text-xs">
                        GET STARTED ONLINE
                    </button>
                </div>
            </div>
        </div>

        <img src="/home/background image/img1.png" className="w-full md:w-6/12 mt-8 md:mt-0 object-cover" alt="Design Service" />
    </div>
    </div>


    {/* 3rd Section */}
    <section className="text-gray-600 body-font bg-[#5B7FB2]">
    <div className="container px-5 py-16 mx-auto">

    <h1 className='text-6xl text-[#362B24] text-center pb-16 font-medium font-serif'> All packages include : </h1>

        <div className="flex flex-wrap -m-4 font-serif">

        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            
            <img alt="ecommerce" className="object-cover object-center w-full block" src="/gift/img11.avif" />
            
            <div className="mt-4">
            <p className="text-white text-center px-3">The experience of collaborating with one of our talented, professional designers can’t be matched anywhere else.</p>
            </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            
            <img alt="ecommerce" className="object-cover object-center w-full block" src="/gift/img12.avif" />
            
            <div className="mt-4">
            <p className="text-white text-center px-3">Your style is unique. Your home—and the process of designing it—should be, too. We tailor everything we do to your preferences.
            </p>
            </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            
            <img alt="ecommerce" className="object-cover object-center w-full block" src="/gift/img13.avif" />
            
            <div className="mt-4">
            <p className="text-white text-center px-3">Buy items from your personal shopping list or browse our catalogue of 100+ home brands. Order and track everything in one place.</p>
            </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            
            <img alt="ecommerce" className="object-cover object-center w-full block" src="/gift/img14.avif" />
            
            <div className="mt-4 text-center">
            <p className="text-white text-center px-3">Questions? Concerns? Just want to chat? Our amazing Customer Happiness team is available via chat, email, or a good old fashioned phone call.</p>
            </div>
        </div>
        
        </div>
    </div>
    </section>

    {/* 4th Section */}
    <div className="flex flex-col md:flex-row flex-1">
    <div className="w-full md:w-6/12">
        <img src="/gift/lastimg.avif" className="w-full h-auto" alt="image" />
    </div>

    <div className="w-full md:w-6/12 bg-[#E0E5F0] text-[#362B24]">
        <div className="px-6 md:px-14 pt-10 md:pt-20">
            <h1 className="text-3xl md:text-5xl">Choose how to gift</h1>
            <h1 className="text-base md:text-lg pt-6 md:pt-10 font-semibold">SNAIL MAIL</h1>
            <p className="pt-4 md:pt-5 text-sm md:text-base">
                The interior design may be virtual, but your gift doesn’t have to be. Send a personalized gift card straight to their door.
            </p>
            <h1 className="text-base md:text-lg pt-8 md:pt-10 font-semibold">STRAIGHT TO YOUR INBOX</h1>
            <p className="pt-4 md:pt-5 text-sm md:text-base">
                Need a last-minute gift, or just want to surprise someone right now? Send them a gift card via email immediately - or schedule it for a special day in the future.
            </p>
        </div>
    </div>
</div>





    </Layout>
  )
}

export default Giftcard
