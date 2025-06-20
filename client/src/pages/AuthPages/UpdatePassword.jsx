import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DefaultInput from '../../component/Form/DefaultInput'
import DefaultBtn from '../../component/Button/DefaultBtn'
import { useNavigate } from 'react-router-dom';

const UpdatePassword = () => {
    const [newPassData, setNewPassData] = useState({
        email: '',
        newPassword: '',
        confirmpass: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const token = localStorage.getItem("updatepass");

    useEffect(() => {
        if (!token) {
            navigate('/', { replace: true });
        }
    }, [token, navigate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPassData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (newPassData.newPassword !== newPassData.confirmpass) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        try {
            const res = await axios.post(`${import.meta.env.VITE_APP_API}/auth/update-password`, newPassData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (res.data.Status === 'Success') {
                alert(res.data.Message);
                localStorage.clear();
                navigate('/');
            } else {
                setError(res.data.Error || 'Failed to update password');
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
                    Update Password
                </h2>

                <p className="text-center text-gray-600 text-sm mb-6">
                    Enter your email and set a new password to complete the reset process.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <DefaultInput
                        label="Email"
                        type="email"
                        name="email"
                        value={newPassData.email}
                        onChange={handleInputChange}
                        placeholder="you@example.com"
                        required
                    />
                    <DefaultInput
                        label="New Password"
                        type="password"
                        name="newPassword"
                        value={newPassData.newPassword}
                        onChange={handleInputChange}
                        placeholder="Enter new password"
                        required
                    />
                    <DefaultInput
                        label="Confirm Password"
                        type="password"
                        name="confirmpass"
                        value={newPassData.confirmpass}
                        onChange={handleInputChange}
                        placeholder="Confirm new password"
                        required
                    />
                    {error && <div className="text-sm text-red-600 -mt-4">{error}</div>}
                    <DefaultBtn type="submit" label={loading ? 'Updating...' : 'Update Password'} disabled={loading} />
                </form>

            </div>
        </div>
    );
};

export default UpdatePassword;
