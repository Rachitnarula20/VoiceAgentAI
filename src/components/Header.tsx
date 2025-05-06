import React, { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';

interface HeaderProps {
  openModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ openModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/90 backdrop-blur-md py-2 shadow-lg' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-8 w-8 text-cyan-400" />
            <span className="font-bold text-xl tracking-tight">Convosia<span className="text-cyan-400">AI</span></span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#use-cases" className="text-gray-300 hover:text-white transition-colors">Use Cases</a>
          <a href="#integrations" className="text-gray-300 hover:text-white transition-colors">Integrations</a>
          <button 
            onClick={openModal}
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-medium px-5 py-2 rounded-full transition-all"
          >
            Book Demo
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-gray-900 transition-all duration-300 shadow-lg ${
        mobileMenuOpen ? 'max-h-60 py-4' : 'max-h-0 overflow-hidden'
      }`}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a href="#features" className="text-gray-300 hover:text-white py-2 transition-colors">Features</a>
          <a href="#use-cases" className="text-gray-300 hover:text-white py-2 transition-colors">Use Cases</a>
          <a href="#integrations" className="text-gray-300 hover:text-white py-2 transition-colors">Integrations</a>
          <button 
            onClick={() => {
              openModal();
              setMobileMenuOpen(false);
            }}
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-medium py-2 rounded-full transition-all"
          >
            Book Demo
          </button>
          
        </div>
      </div>
    </header>
  );
};

export default Header;