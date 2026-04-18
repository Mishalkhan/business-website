import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PiShoppingCartBold } from "react-icons/pi";

const Navbar = () => {
  const [navbarBackground, setNavbarBackground] = useState('bg-transparent');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavbarBackground('bg-white text-black');
    } else {
      setNavbarBackground('bg-transparent text-white');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`fixed w-full z-10 font-serif ${navbarBackground} transition-colors duration-300 hover:bg-white`}>
      <header className="sticky inset-0 z-50 border-slate-100">
        <nav className="mx-auto flex gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
          <div className="relative flex items-center">
            <Link to={'/'}>
              <p className='text-4xl text-black'>M.Khan</p>
            </Link>
          </div>
          <ul className="hidden items-center justify-center gap-6 md:flex">
            <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
            <Link to={'/'}>HOME</Link>
            </li>
            <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
              <Link to={'/works'}>HOW IT WORKS</Link>
            </li>
            <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
              <Link to={'/portfolio'}>PORTFOLIO</Link>
            </li>
            <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
              <Link to={'/blog'}>BLOG</Link>
            </li>
            <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
              <Link to={'/gift'}>GIFT CARDS</Link>
            </li>
          </ul>
          <div className="flex-grow" />
          <div className="hidden items-center justify-center gap-6 md:flex">

            
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center text-black"
            aria-label="Toggle navigation"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

        </nav>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white z-20 p-4 md:hidden transition-transform duration-300 ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
          <button onClick={toggleMenu} className="text-black absolute top-4 right-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="flex flex-col space-y-4 text-center mt-10">
            <li className="text-sm font-medium text-slate-700 hover:text-[#E59400]">
              <Link to={'/'}>HOME</Link>
            </li>
            <li className="text-sm font-medium text-slate-700 hover:text-[#E59400]">
              <Link to={'/works'}>HOW IT WORKS</Link>
            </li>
            <li className="text-sm font-medium text-slate-700 hover:text-[#E59400]">
              <Link to={'/portfolio'}>PORTFOLIO</Link>
            </li>
            <li className="text-sm font-medium text-slate-700 hover:text-[#E59400]">
              <Link to={'/blog'}>BLOG</Link>
            </li>
            <li className="text-sm font-medium text-slate-700 hover:text-[#E59400]">
              <Link to={'/gift'}>GIFT CARDS</Link>
            </li>
            
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
