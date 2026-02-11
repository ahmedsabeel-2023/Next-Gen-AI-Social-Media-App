import React from 'react';
import { FiHeart, FiMessageCircle, FiUserPlus, FiAlertTriangle } from 'react-icons/fi';

const Notifications = () => {
    // Mock Notifications Data
    const notifications = [
        {
            id: 1,
            type: 'like',
            user: 'Tech Insider',
            text: 'liked your post.',
            time: '2m',
            read: false,
        },
        {
            id: 2,
            type: 'alert',
            user: 'AI Moderator',
            text: 'flagged your post for review: "Potential misinformation detected."',
            time: '15m',
            read: false,
        },
        {
            id: 3,
            type: 'comment',
            user: 'Sarah Connor',
            text: 'commented: "This is exactly what I was looking for!"',
            time: '1h',
            read: true,
        },
        {
            id: 4,
            type: 'follow',
            user: 'Elon Musk',
            text: 'followed you.',
            time: '3h',
            read: true,
        }
    ];

    const getIcon = (type) => {
        switch (type) {
            case 'like': return <FiHeart fill="var(--danger)" color="var(--danger)" />;
            case 'comment': return <FiMessageCircle color="var(--primary)" />;
            case 'follow': return <FiUserPlus color="var(--success)" />;
            case 'alert': return <FiAlertTriangle color="orange" />;
            default: return <FiHeart />;
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <h2 style={{ margin: 0 }}>Notifications</h2>
            </div>

            <div>
                {notifications.map(notif => (
                    <div key={notif.id} className="notification-item" style={{
                        padding: '16px 20px',
                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                        display: 'flex',
                        gap: '15px',
                        background: notif.read ? 'transparent' : 'rgba(var(--primary-rgb), 0.05)',
                        transition: 'background 0.2s'
                    }}>
                        <div style={{ fontSize: '24px', marginTop: '4px' }}>
                            {getIcon(notif.type)}
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                                <div style={{
                                    width: '32px', height: '32px', borderRadius: '50%',
                                    background: '#333',
                                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                                    fontWeight: 'bold', fontSize: '12px'
                                }}>
                                    {notif.type === 'alert' ? 'AI' : notif.user[0]}
                                </div>
                            </div>
                            <div style={{ fontSize: '15px', lineHeight: '1.4' }}>
                                <span style={{ fontWeight: 'bold' }}>{notif.user}</span> {notif.text}
                            </div>
                        </div>
                        <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                            {notif.time}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notifications;
