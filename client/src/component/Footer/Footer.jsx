import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 w-full py-4 px-4 text-center">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm">
                <p className="mb-2 md:mb-0">
                    &copy; {new Date().getFullYear()} <span className="font-semibold">GCMS</span> – Governor's Complaint Management System
                </p>
                <div className="flex flex-col md:items-end text-gray-400 italic text-xs md:text-sm">
                    <p>All rights reserved.</p>
                    <p>Engineered by <span className="not-italic text-gray-600 font-medium"><a href="https://www.blackalphalabs.com/" target='_blank'>Blackalphalabs</a></span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
