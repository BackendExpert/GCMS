import React from 'react'
import DefaultInput from '../../component/Form/DefaultInput'
import DefaultBtn from '../../component/Button/DefaultBtn'

const SignIn = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                    Sign In to Your Account
                </h2>
                <form className="space-y-6">
                    <div>
                        <DefaultInput
                            label={"Email address"}
                            type='email'
                            placeholder={"you@example.com"}
                        />
                    </div>

                    <div>
                        <DefaultInput
                            label={"Password"}
                            type='password'
                            placeholder={"*********"}
                        />
                    </div>


                    <div className="">
                        <DefaultBtn
                            type='submit'
                            label='Sign In'
                        />
                    </div>
                </form>

                <p className="mt-6 text-center text-gray-600 text-sm">
                    Don&apos;t have an account?{' '}
                    <a href="/Signup" className="text-indigo-600 hover:underline">
                        Sign Up
                    </a>
                </p>
                <p className=" text-center text-gray-600 text-sm">                    
                    <a href="#" className="text-indigo-600 hover:underline">
                        Forget Password
                    </a>
                </p>
            </div>
        </div>
    )
}

export default SignIn
