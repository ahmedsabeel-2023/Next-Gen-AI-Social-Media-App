import React from 'react';

const Messages = () => {
    const conversations = [
        { id: 1, user: 'Sarah Connor', avatar: '#e91e63', message: 'Did you see the new neural updates?', time: '2m' },
        { id: 2, user: 'Dev Team', avatar: '#00bcd4', message: 'Deploying the fix in 10 mins.', time: '1h' },
        { id: 3, user: 'AI Monitor', avatar: '#9c27b0', message: 'Weekly summary report attached.', time: '1d' },
    ];

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', height: '100%' }}>
            <div style={{
                padding: '20px',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center'
            }}>
                <h2 style={{ margin: 0 }}>Messages</h2>
            </div>

            <div style={{ padding: '20px' }}>
                {conversations.map(chat => (
                    <div key={chat.id} className="glass-panel" style={{
                        padding: '15px',
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        cursor: 'pointer'
                    }}>
                        <div style={{
                            width: '50px', height: '50px', borderRadius: '50%',
                            background: chat.avatar,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontWeight: 'bold', fontSize: '20px', color: 'white'
                        }}>
                            {chat.user[0]}
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                <span style={{ fontWeight: 'bold' }}>{chat.user}</span>
                                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{chat.time}</span>
                            </div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '14px' }}>{chat.message}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Messages;
