import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      {/* Main Navbar */}
      <div className="flex justify-between items-center bg-black/25 backdrop-blur-md text-white px-8 py-4 border-b border-white/10">
        {/* Logo */}
        <div className="text-xl font-bold">
        <a 
          href="#home"
          onClick={handleClick}
          className="text-xl font-bold cursor-pointer"
        >
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Midhun Mohan
          </span>
        </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <a 
              href="#home" 
              onClick={handleClick}
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={handleClick}
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              onClick={handleClick}
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              onClick={handleClick}
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              onClick={handleClick}
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Projects
            </a>
          </li>
          
        </ul>

        {/* Contact Button */}
        <a 
          href="#contact"
          onClick={handleClick}
          className="hidden md:block border border-white/20 text-white px-6 py-2 rounded-full 
            hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
        >
          Contact Me
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className="space-y-2">
            <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2.5' : ''
            }`}></span>
            <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2.5' : ''
            }`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-black/25 backdrop-blur-md border-b border-white/10 
        transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <ul className="flex flex-col text-white items-center space-y-4 py-4">
          <li>
            <a 
              href="#home" 
              onClick={handleClick}
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={handleClick}
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              onClick={handleClick}
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              onClick={handleClick}
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              onClick={handleClick}
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact"
              onClick={handleClick}
              className="border border-white/20 text-white px-6 py-2 rounded-full 
                hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar