import React, { useState } from 'react';
import axios from 'axios';
import DefaultInput from '../../component/Form/DefaultInput'
import DefaultBtn from '../../component/Button/DefaultBtn'
import { useNavigate } from 'react-router-dom';


const ForgetPass = () => {
    const [forgetPassData, setForgetPassData] = useState({ email: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setForgetPassData({ email: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const res = await axios.post(`${import.meta.env.VITE_APP_API}/auth/forgot-password`, forgetPassData);
            if (res.data.Status === 'Success') {
                alert(res.data.Message);
                navigate('/verify-otp');
            } else {
                setError(res.data.Error || 'Failed to send reset link');
            }
        } catch (err) {
            console.error(err);
            setError('An unexpected error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                    Forgot Password
                </h2>

                <p className="text-center text-gray-600 text-sm mb-6">
                    Enter your registered email address. We’ll send you a reset link.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <DefaultInput
                        label="Email"
                        type="email"
                        name="email"
                        value={forgetPassData.email}
                        onChange={handleInputChange}
                        placeholder="you@example.com"
                        required
                    />
                    {error && <div className="text-sm text-red-600 -mt-4">{error}</div>}
                    <DefaultBtn type="submit" label={loading ? 'Sending...' : 'Send Reset Link'} disabled={loading} />
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    <a href="/login" className="text-indigo-600 hover:underline">
                        Back to Login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default ForgetPass;