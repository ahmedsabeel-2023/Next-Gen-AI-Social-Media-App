import React, { useState } from 'react';

const UserProfile = ({ user, onLogout }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [bio, setBio] = useState('Digital explorer in the neural net with a passion for AI.');
    const [name, setName] = useState(user?.name || 'CyberUser');

    if (!user) return null;

    return (
        <div className="glass-panel" style={{ padding: '2rem', height: 'fit-content' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
                <div style={{
                    width: '100px', height: '100px', borderRadius: '50%',
                    background: 'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem',
                    boxShadow: '0 0 20px hsla(var(--primary), 0.5)'
                }}>
                    {name[0]}
                </div>

                {isEditing ? (
                    <input value={name} onChange={(e) => setName(e.target.value)} style={{ textAlign: 'center', width: '80%', marginBottom: '0.5rem' }} />
                ) : (
                    <h2 style={{ margin: '0 0 0.5rem 0' }}>{name}</h2>
                )}

                <span className="status-badge status-safe">Verified Human</span>
            </div>

            <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ color: 'hsl(var(--text-muted))', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>Bio</h4>
                {isEditing ? (
                    <textarea value={bio} onChange={e => setBio(e.target.value)} />
                ) : (
                    <p style={{ lineHeight: '1.6' }}>{bio}</p>
                )}
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                    onClick={() => setIsEditing(!isEditing)}
                    style={{ flex: 1, padding: '0.75rem', background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', borderRadius: '8px', cursor: 'pointer' }}
                >
                    {isEditing ? 'Save Profile' : 'Edit Profile'}
                </button>
                <button
                    onClick={onLogout}
                    style={{ flex: 1, padding: '0.75rem', background: 'rgba(255,50,50,0.2)', border: '1px solid rgba(255,50,50,0.5)', color: 'hsl(var(--danger))', borderRadius: '8px', cursor: 'pointer' }}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default UserProfile;
