import React, { useState } from 'react';

const AuthModal = ({ onLogin, onClose }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate auth delay
        setTimeout(() => {
            onLogin({ name: 'CyberUser', email, avatar: null }); // Mock user
        }, 800);
    };

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(5px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000
        }}>
            <div className="glass-panel" style={{ padding: '2.5rem', width: '100%', maxWidth: '400px', position: 'relative' }}>
                <button
                    onClick={onClose}
                    style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.2rem' }}
                >✕</button>

                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    {isLogin ? 'Access Portal' : 'Initialize Identity'}
                </h2>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem', color: 'hsl(var(--text-muted))' }}>Neural ID (Email)</label>
                        <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="user@nextgen.ai" />
                    </div>

                    <div>
                        <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem', color: 'hsl(var(--text-muted))' }}>Passkey</label>
                        <input type="password" required value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" />
                    </div>

                    <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>
                        {isLogin ? 'Connect' : 'Register'}
                    </button>
                </form>

                <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: 'hsl(var(--text-muted))' }}>
                    {isLogin ? "No identity found? " : "Already connected? "}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        style={{ background: 'none', border: 'none', color: 'hsl(var(--primary))', fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline' }}
                    >
                        {isLogin ? 'Create one' : 'Login'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default AuthModal;
