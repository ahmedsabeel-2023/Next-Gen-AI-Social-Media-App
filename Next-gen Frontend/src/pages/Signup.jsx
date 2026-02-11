import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
    });
    const [error, setError] = React.useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        // Mock registration - frontend only
        setTimeout(() => {
            const newUser = {
                name: `${formData.firstName} ${formData.lastName}`,
                username: formData.username,
                email: formData.email,
                id: Date.now()
            };

            // Store user in localStorage
            localStorage.setItem('user', JSON.stringify(newUser));

            // Auto login and redirect to home
            navigate('/');
        }, 1000); // Simulate network delay
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'radial-gradient(circle at bottom left, #1a1a2e 0%, #000000 100%)',
            padding: '20px'
        }}>
            <div className="glass" style={{
                width: '100%',
                maxWidth: '400px',
                padding: '40px',
                borderRadius: '24px',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.1)'
            }}>
                <h1 className="text-gradient" style={{ fontSize: 'clamp(24px, 5vw, 32px)', marginBottom: '8px', fontWeight: 'bold' }}>Join NextGen</h1>
                <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: 'clamp(14px, 3vw, 16px)' }}>Create your account to access the future.</p>

                {error && <div style={{ color: 'red', marginBottom: '16px' }}>{error}</div>}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', gap: '16px' }}>
                        <input
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            style={{ padding: '14px', borderRadius: '12px', flex: 1, background: 'rgba(255,255,255,0.05)', border: 'none', color: 'white' }}
                            onChange={handleChange}
                            required
                        />
                        <input
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            style={{ padding: '14px', borderRadius: '12px', flex: 1, background: 'rgba(255,255,255,0.05)', border: 'none', color: 'white' }}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        style={{ padding: '14px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: 'none', color: 'white' }}
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        style={{ padding: '14px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: 'none', color: 'white' }}
                        onChange={handleChange}
                        required
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        style={{ padding: '14px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: 'none', color: 'white' }}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" className="btn-primary" style={{ marginTop: '16px' }}>Sign Up</button>
                </form>

                <div style={{ marginTop: '24px', fontSize: '14px', color: 'var(--text-muted)' }}>
                    Already have an account? <Link to="/login" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Log in</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
