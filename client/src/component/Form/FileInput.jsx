import React from 'react'

const FileInput = ({
    label,
    name,
    onChange,
    required = false,
    accept,
    multiple = false,
    disabled = false,
    className = '',
}) => {
    return (
        <div className="mb-6">
            {label && (
                <label
                    htmlFor={name}
                    className="block mb-2 text-sm font-semibold text-gray-900 cursor-pointer"
                >
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <input
                type="file"
                id={name}
                name={name}
                onChange={onChange}
                required={required}
                accept={accept}
                multiple={multiple}
                disabled={disabled}
                className={`block w-full text-sm text-gray-700 border border-gray-300 rounded-lg
          bg-white cursor-pointer
          file:px-5 file:py-2 file:border-0 file:bg-indigo-100 file:text-indigo-700 file:font-semibold
          file:rounded-lg hover:file:bg-indigo-200
          focus:outline-none focus:ring-2 focus:ring-indigo-500
          disabled:cursor-not-allowed disabled:opacity-50
          transition ${className}`}
            />
        </div>
    )
}

export default FileInput
