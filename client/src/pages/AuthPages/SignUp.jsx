import React, { useState } from 'react'
import DefaultInput from '../../component/Form/DefaultInput'
import DefaultBtn from '../../component/Button/DefaultBtn'

const SignUp = () => {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Sign Up Data:', formData)
        // You can add validation or backend integration here
    }

    return (
        <div className="min-h-[70vh] flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create an Account</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <DefaultInput
                        label="Email Address"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <DefaultInput
                        label="Username"
                        type="text"
                        name="username"
                        placeholder="Choose a username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />

                    <DefaultInput
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <DefaultBtn type="submit" label="Register" />
                </form>

                <p className="mt-6 text-center text-gray-600 text-sm">
                    Already have an Account ? 
                    <a href="/login" className="text-indigo-600 hover:underline pl-2">
                        Sign In
                    </a>
                </p>
            </div>
        </div>
    )
}

export default SignUp
