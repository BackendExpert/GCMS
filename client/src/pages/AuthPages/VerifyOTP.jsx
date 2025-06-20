import React, { useState } from 'react';
import axios from 'axios';
import DefaultInput from '../../component/Form/DefaultInput'
import DefaultBtn from '../../component/Button/DefaultBtn'
import { useNavigate } from 'react-router-dom';

const VerifyOTP = () => {
    const [otpData, setOtpData] = useState({ email: '', otp: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setOtpData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const res = await axios.post(`${import.meta.env.VITE_APP_API}/auth/verify-otp`, otpData);
            if (res.data.Status === 'Success') {
                alert(res.data.Message);
                localStorage.setItem("updatepass", res.data.Token);
                navigate('/update-new-pass');
            } else {
                setError(res.data.Error || 'OTP verification failed');
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
                    Verify OTP
                </h2>

                <p className="text-center text-gray-600 text-sm mb-6">
                    Enter the OTP sent to your email to proceed.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <DefaultInput
                        label="Email"
                        type="email"
                        name="email"
                        value={otpData.email}
                        onChange={handleInputChange}
                        placeholder="you@example.com"
                        required
                    />
                    <DefaultInput
                        label="OTP"
                        type="text"
                        name="otp"
                        value={otpData.otp}
                        onChange={handleInputChange}
                        placeholder="Enter OTP"
                        required
                    />
                    {error && <div className="text-sm text-red-600 -mt-4">{error}</div>}
                    <DefaultBtn type="submit" label={loading ? 'Verifying...' : 'Verify OTP'} disabled={loading} />
                </form>

            </div>
        </div>
    );
};

export default VerifyOTP;
