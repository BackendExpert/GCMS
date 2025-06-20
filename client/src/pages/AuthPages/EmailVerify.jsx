import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DefaultInput from '../../components/Form/DefaultInput';
import DefaultBtn from '../../components/Button/DefaultBtn';
import { useNavigate } from 'react-router-dom';
import uopLogo from '../../assets/uoplogo.png';

const VerifyEmail = () => {
    const [emailData, setEmailData] = useState({ otp: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const token = localStorage.getItem("emailVerify");

    // Redirect if no token found
    useEffect(() => {
        if (!token) {
            navigate('/', { replace: true });
        }
    }, [token, navigate]);

    const handleInputChange = (e) => {
        setEmailData({ otp: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await axios.post(`${import.meta.env.VITE_APP_API}/auth/verify-email`, emailData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (res.data.Status === 'Success') {
                alert(res.data.Message);
                navigate('/', { replace: true });
                localStorage.clear();
            } else {
                setError(res.data.Error || 'Email verification failed. You cannot verify later.');
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
                <img src={uopLogo} alt="University Logo" className="h-20 w-auto mb-6 mx-auto" />
                <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Verify Email</h2>

                <p className="text-center text-gray-600 text-sm mb-6">
                    Please verify your email now. If you cannot verify at this stage, you will not be able to verify later.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <DefaultInput
                        label="OTP"
                        type="text"
                        name="otp"
                        value={emailData.otp}
                        onChange={handleInputChange}
                        placeholder="Enter OTP"
                        required
                    />
                    {error && <div className="text-sm text-red-600 -mt-4">{error}</div>}

                    <DefaultBtn type="submit" label={loading ? 'Verifying...' : 'Verify Email'} disabled={loading} />
                </form>

                <p className="mt-6 text-center text-gray-600 text-xs">
                    &copy; {new Date().getFullYear()} University of Peradeniya | Internship Monitoring System
                </p>
            </div>
        </div>
    );
};

export default VerifyEmail;