import React from 'react';
import { FiAlertTriangle, FiCheckCircle, FiShield } from 'react-icons/fi';

const AdminDashboard = () => {
    // Mock data based on the 'Admin' actor's need to monitor the 'AI System'
    const moderationQueue = [
        { id: 101, user: 'glitch_user', reason: 'Hate Speech', score: '98% Confidence', status: 'Pending' },
        { id: 102, user: 'bot_net_01', reason: 'Spam Pattern', score: '92% Confidence', status: 'Pending' },
    ];

    const systemStats = [
        { label: 'Active AI Nodes', value: '4 / 5', color: 'var(--success)' },
        { label: 'Threats Blocked', value: '1,240', color: 'var(--secondary)' },
        { label: 'Pending Reports', value: '12', color: 'var(--danger)' },
    ];

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ marginBottom: '30px' }}>
                <h1 className="text-gradient" style={{ fontSize: '24px' }}>Admin Control Panel</h1>
                <p style={{ color: 'var(--text-muted)' }}>AI System Overview & Moderation Queue</p>
            </div>

            {/* System Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '30px' }}>
                {systemStats.map((stat, i) => (
                    <div key={i} className="glass-panel" style={{ padding: '20px', textAlign: 'center' }}>
                        <div style={{ fontSize: '32px', fontWeight: 'bold', color: stat.color }}>{stat.value}</div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '14px' }}>{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* AI Moderation Queue */}
            <h3 style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginBottom: '20px' }}>
                <FiShield style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                Moderation Queue (AI Flagged)
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {moderationQueue.map(item => (
                    <div key={item.id} className="glass-panel" style={{
                        padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                    }}>
                        <div>
                            <div style={{ fontWeight: 'bold', color: 'var(--danger)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <FiAlertTriangle /> {item.reason}
                            </div>
                            <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '5px' }}>
                                User: @{item.user} • AI Confidence: {item.score}
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button className="btn-ghost" style={{ border: '1px solid var(--danger)', color: 'var(--danger)' }}>Ban User</button>
                            <button className="btn-primary" style={{ background: 'var(--success)' }}><FiCheckCircle /> Safe</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminDashboard;
