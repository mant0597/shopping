import React, { useState } from 'react';

const Navbar = ({ showNavbar }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: "Men's", id: 'mens' },
    { name: "Women's", id: 'womens' },
  ];

  const hiddenLinks = [
    { name: 'Contact Us', id: 'contact' },
    { name: 'Careers', id: 'careers' },
    { name: 'Reviews', id: 'reviews' },
  ];

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); 
  };

  return (
    <nav className={`fixed w-full z-50 transition-all ease-in-out duration-700 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="ml-2 text-xl font-bold text-gray-800">NauticalShops</span>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              {mainLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollToSection(link.id)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-indigo-100"
                >
                  {link.name}
                </button>
              ))}
              <div className="relative">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-indigo-100 flex items-center"
                >
                  Menu
                  <span className={`ml-1 transform transition-all ease-out duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} >
                    ▼
                  </span>
                </button>
                {isMenuOpen && (
                  <div className="absolute right-0 w-48 mt-2 bg-white rounded-md shadow-lg">
                    {hiddenLinks.map((link) => (
                      <button
                        key={link.id}
                        onClick={() => handleScrollToSection(link.id)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100"
                      >
                        {link.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-indigo-100"
              >
                {isMenuOpen ? <span className="h-6 w-6">X</span> : <span className="h-6 w-6">Menu</span>}
              </button>
            </div>
          </div>
        </div>
        
        <div
          className={`md:hidden transition-all duration-700 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[...mainLinks, ...hiddenLinks].map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  handleScrollToSection(link.id);
                  setIsMenuOpen(false); 
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-indigo-100"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
