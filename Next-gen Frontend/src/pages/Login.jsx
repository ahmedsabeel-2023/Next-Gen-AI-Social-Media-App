import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FiLoader } from 'react-icons/fi';

const Login = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState(''); // '' | 'checking' | 'authenticating' | 'fetching_ai'

    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        setStatus('Authenticating...');

        // Mock authentication - frontend only
        setTimeout(() => {
            // Simulate successful login
            const mockUser = {
                email,
                name: email.split('@')[0],
                id: Date.now()
            };

            // Store user in localStorage for session persistence
            localStorage.setItem('user', JSON.stringify(mockUser));

            setStatus('Credentials valid. Accessing Dashboard...');
            setTimeout(() => {
                navigate('/');
            }, 500);
        }, 1000); // Simulate network delay
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'radial-gradient(circle at top right, #1a1a2e 0%, #000000 100%)',
            padding: '20px' // Mobile padding
        }}>
            <div className="glass" style={{
                width: '100%',
                maxWidth: '400px',
                padding: '40px',
                borderRadius: '24px',
                textAlign: 'center'
            }}>
                <h1 className="text-gradient" style={{ fontSize: 'clamp(24px, 5vw, 32px)', marginBottom: '8px', fontWeight: 'bold' }}>NextGen</h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: 'clamp(14px, 3vw, 16px)' }}>Welcome back to the future.</p>

                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ minHeight: '24px', color: 'var(--danger)', fontSize: '14px', marginBottom: '10px' }}>
                        {error}
                    </div>

                    <input
                        required
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                        style={{
                            padding: '14px',
                            borderRadius: '12px',
                            background: 'rgba(255,255,255,0.05)',
                            border: error ? '1px solid var(--danger)' : '1px solid rgba(255,255,255,0.1)',
                            color: 'white',
                            outline: 'none'
                        }}
                    />
                    <input
                        required
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isLoading}
                        style={{
                            padding: '14px',
                            borderRadius: '12px',
                            background: 'rgba(255,255,255,0.05)',
                            border: error ? '1px solid var(--danger)' : '1px solid rgba(255,255,255,0.1)',
                            color: 'white',
                            outline: 'none'
                        }}
                    />

                    <button
                        className="btn-primary"
                        disabled={isLoading}
                        style={{ marginTop: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
                    >
                        {isLoading ? (
                            <>
                                <FiLoader className="spin" /> {status}
                            </>
                        ) : 'Log In'}
                    </button>

                    {isLoading && (
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '10px' }}>
                            <span style={{ color: 'var(--success)' }}>●</span> Secure Connection Established
                        </div>
                    )}
                </form>

                <div style={{ marginTop: '24px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                    Don't have an account? <Link to="/signup" style={{ color: 'var(--primary)' }}>Sign up</Link>
                </div>
            </div>

            <style>{`
                .spin { animation: spin 1s linear infinite; }
                @keyframes spin { 100% { transform: rotate(360deg); } }
            `}</style>
        </div>
    );
};

export default Login;
