import { useEffect, useState } from 'react'
import React from 'react'
import logo from '../image/logo2.svg'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`sticky top-0 z-50 h-15 transition-all duration-300 ease-in-out ${isScrolled ? "bg-black/90 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <nav className='flex ml-px ml-2 place-content-around h-[50px]'>
        <span className='m-3 text-white text-[25px] flex'><img src={logo} alt="" className='h-10' />Ujjwal's Portfolio</span>
        <ul className='flex justify-between m-3'>
          <li><a href="#home" className='text-blue-700 hover:text-blue-900 text-[20px] m-2'>.Home()</a></li>
          <li><a href="#about" className='text-blue-700 hover:text-blue-900 text-[20px] m-2'>.About()</a></li>
          <li><a href="#project" className='text-blue-700 hover:text-blue-900 text-[20px] m-2'>.Projects()</a></li>
          <li><a href="#contact" className='text-blue-700 hover:text-blue-900 text-[20px] m-2'>.Contact()</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar