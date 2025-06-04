import React from 'react'

const DefaultBtn = ({ label = "Click the Button", onClick, type = "button", disabled = false }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`mt-0 px-6 py-2 rounded-md transition text-white 
        ${disabled ? 'bg-indigo-600 cursor-not-allowed' : 'bg-indigo-800 hover:bg-indigo-700'}
      `}
        >
            {label}
        </button>
    )
}

export default DefaultBtn