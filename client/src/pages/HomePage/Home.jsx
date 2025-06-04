import React from 'react';
import { FaUsers } from "react-icons/fa";
import DefaultBtn from '../../component/Button/DefaultBtn';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
            <FaUsers className="text-indigo-600 w-20 h-20 md:w-32 md:h-32 mb-6" />

            <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2">
                Welcome to GCMS
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
                Governor's Complaint Management System
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                <Link to="/quick-complaint">
                    <DefaultBtn
                        type="button"
                        label="Create Quick Complaint"
                    />
                </Link>

                <span className="hidden sm:inline text-gray-400">|</span>

                <Link to="/login">
                    <DefaultBtn
                        type="button"
                        label="Login to System"
                    />
                </Link>
            </div>
        </div>
    );
};

export default Home;
