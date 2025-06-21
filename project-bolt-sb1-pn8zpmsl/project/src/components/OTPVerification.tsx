import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const OTPVerification: React.FC = () => {
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleVerify = async () => {
        setLoading(true);
        // Simulate API call to verify OTP
        await new Promise((resolve) => setTimeout(resolve, 2000));
        // After verification, navigate back to the admin panel
        history.push('/admin');
    };

    return (
        <div>
            <h1>OTP Verification</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter OTP"
                    />
                    <button onClick={handleVerify}>Verify OTP</button>
                </div>
            )}
        </div>
    );
};

export default OTPVerification; 