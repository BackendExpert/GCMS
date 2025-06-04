import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo / Brand */}
                <div className="text-xl font-semibold text-gray-800">
                    GCMS<span className="text-indigo-600">.</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 text-sm text-gray-700 font-medium">
                    <a href="/" className="hover:text-indigo-600 transition">Home</a>
                    <a href="/complaints" className="hover:text-indigo-600 transition">Complaints</a>
                    <a href="/about" className="hover:text-indigo-600 transition">About</a>
                    <a href="/contact" className="hover:text-indigo-600 transition">Contact</a>
                </nav>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-700" onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2 text-sm text-gray-700 font-medium">
                    <a href="/" className="block hover:text-indigo-600 transition">Home</a>
                    <a href="/complaints" className="block hover:text-indigo-600 transition">Complaints</a>
                    <a href="/about" className="block hover:text-indigo-600 transition">About</a>
                    <a href="/contact" className="block hover:text-indigo-600 transition">Contact</a>
                </div>
            )}
        </header>
    );
};

export default Navbar;
