import React from 'react';
import { FiTrendingUp, FiSearch } from 'react-icons/fi';

const Rightbar = () => {
    return (
        <div className="rightbar" style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            padding: '20px',
            overflowY: 'auto',
            borderLeft: '1px solid rgba(255,255,255,0.1)',
            backgroundColor: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(10px)'
        }}>
            {/* Search Bar */}
            <div style={{ marginBottom: '30px', position: 'relative' }}>
                <FiSearch style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input
                    type="text"
                    placeholder="Search NextGen..."
                    style={{
                        width: '100%',
                        padding: '12px 12px 12px 45px',
                        borderRadius: '30px',
                        border: 'none',
                        background: 'rgba(255,255,255,0.05)'
                    }}
                />
            </div>

            {/* AI Suggestions Box */}
            <div className="glass-panel" style={{ padding: '20px', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '15px' }}>AI Insights</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '15px' }}>
                    Based on your recent activity, here are some topics you might like:
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {['#GenerativeArt', '#SpaceX', '#ReactJS', '#Cyberpunk'].map(tag => (
                        <span key={tag} style={{
                            background: 'rgba(var(--primary), 0.2)',
                            color: 'var(--primary-light)',
                            padding: '5px 10px',
                            borderRadius: '15px',
                            fontSize: '12px',
                            border: '1px solid var(--primary)'
                        }}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Trending Box */}
            <div className="glass-panel" style={{ padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                    <FiTrendingUp color="var(--secondary)" />
                    <h3 style={{ fontSize: '18px', margin: 0 }}>Trending for you</h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {[
                        { topic: 'Technology', title: 'OpenAI releases GPT-5', posts: '1.2M posts' },
                        { topic: 'Design', title: 'Glassmorphism UI Trends', posts: '450K posts' },
                        { topic: 'Science', title: 'Mars Colonization Update', posts: '89K posts' }
                    ].map((trend, i) => (
                        <div key={i} style={{ cursor: 'pointer' }}>
                            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{trend.topic}</div>
                            <div style={{ fontWeight: 'bold', margin: '2px 0' }}>{trend.title}</div>
                            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{trend.posts}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Rightbar;
