import React from 'react'

const TextAreaInput = ({
    label,
    name,
    rows = 4,
    value,
    onChange,
    placeholder = '',
    required = false,
    className = '',
    disabled = false,
}) => {
    return (
        <div className="mb-6">
            {label && (
                <label
                    htmlFor={name}
                    className="block text-sm font-semibold text-gray-900 mb-2 cursor-pointer"
                >
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <textarea
                id={name}
                name={name}
                rows={rows}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
          transition-shadow resize-none disabled:opacity-50 disabled:cursor-not-allowed
          ${className}`}
            />
        </div>
    )
}

export default TextAreaInput
