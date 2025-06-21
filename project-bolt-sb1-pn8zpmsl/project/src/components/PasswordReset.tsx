import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const PasswordReset: React.FC = () => {
    const [newPassword, setNewPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleReset = async () => {
        setLoading(true);
        // Simulate API call to reset password
        await new Promise((resolve) => setTimeout(resolve, 2000));
        // After resetting, navigate back to the admin panel
        history.push('/admin');
    };

    return (
        <div>
            <h1>Password Reset</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter new password"
                    />
                    <button onClick={handleReset}>Reset Password</button>
                </div>
            )}
        </div>
    );
};

export default PasswordReset; 