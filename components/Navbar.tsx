import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 border-b border-transparent ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className={`text-2xl font-bold font-heading tracking-tight transition-colors ${scrolled ? 'text-white' : 'text-slate-900'}`}>
            Junaid<span className="text-primary">.Dev</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition-colors text-sm uppercase tracking-wider hover:text-primary ${scrolled ? 'text-slate-300' : 'text-slate-600'}`}
                >
                  {link.name}
                </a>
              ))}
              <a 
                 href="#contact"
                 className="btn-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wide"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${scrolled ? 'text-white hover:text-primary' : 'text-slate-900 hover:text-primary'}`}
            >
              <svg className="h-7 w-7" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-slate-900 border-b border-slate-800 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white hover:bg-slate-800 block px-3 py-3 rounded-md text-base font-bold"
            >
              {link.name}
            </a>
          ))}
           <a 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 text-center btn-primary text-white px-6 py-3 rounded-lg text-base font-bold"
           >
             Contact Me
           </a>
        </div>
      </div>
    </nav>
  );
};