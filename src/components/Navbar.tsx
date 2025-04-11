
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xl text-brand-blue">MyOrgWallet</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-brand-blue">
                  Solutions <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">For Businesses</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">For Organizations</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">For Enterprises</a>
                </div>
              </div>
              <a href="#features" className="text-gray-700 hover:text-brand-blue">Features</a>
              <a href="#attestations" className="text-gray-700 hover:text-brand-blue">Attestations</a>
              <a href="#dashboard" className="text-gray-700 hover:text-brand-blue">Dashboard</a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                Login
              </Button>
              <Button className="bg-brand-blue hover:bg-brand-darkblue">Get Started</Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-brand-blue"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <div className="relative py-3">
                <button className="flex items-center text-gray-700 hover:text-brand-blue">
                  Solutions <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="pl-4 mt-2 space-y-2">
                  <a href="#" className="block py-2 text-sm text-gray-700 hover:text-brand-blue">For Businesses</a>
                  <a href="#" className="block py-2 text-sm text-gray-700 hover:text-brand-blue">For Organizations</a>
                  <a href="#" className="block py-2 text-sm text-gray-700 hover:text-brand-blue">For Enterprises</a>
                </div>
              </div>
              <a href="#features" className="py-3 text-gray-700 hover:text-brand-blue">Features</a>
              <a href="#attestations" className="py-3 text-gray-700 hover:text-brand-blue">Attestations</a>
              <a href="#dashboard" className="py-3 text-gray-700 hover:text-brand-blue">Dashboard</a>
              <div className="flex flex-col space-y-3 pt-3">
                <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white w-full">
                  Login
                </Button>
                <Button className="bg-brand-blue hover:bg-brand-darkblue w-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
