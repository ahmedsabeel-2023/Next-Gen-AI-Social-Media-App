import { FiHeart, FiMessageCircle, FiShare2, FiMoreHorizontal, FiAlertTriangle } from 'react-icons/fi';
import { useState } from 'react';

const Post = ({ author, content, image, likes, comments, timestamp, warning }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [isReported, setIsReported] = useState(false);

    const handleReport = () => {
        setIsReported(true);
        setShowMenu(false);
        // In a real app, this would trigger an API call to the Admin/AI System
    };

    return (
        <div style={{ padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            {warning && (
                <div style={{
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid var(--danger)',
                    color: 'var(--danger)',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    marginBottom: '12px',
                    display: 'flex',
                    gap: '8px'
                }}>
                    <span>⚠️ Sensitive Content Warning: {warning}</span>
                </div>
            )}

            <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#444', flexShrink: 0 }}></div>

                <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                            <span style={{ fontWeight: 'bold' }}>{author.name}</span>
                            <span style={{ color: 'var(--text-secondary)' }}>@{author.username} · {timestamp}</span>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <FiMoreHorizontal
                                style={{ color: 'var(--text-secondary)', cursor: 'pointer' }}
                                onClick={() => setShowMenu(!showMenu)}
                            />
                            {showMenu && (
                                <div className="glass-panel" style={{
                                    position: 'absolute', right: 0, top: '20px',
                                    padding: '8px', zIndex: 10, minWidth: '120px',
                                    background: 'var(--bg-card)'
                                }}>
                                    <div
                                        onClick={handleReport}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '8px',
                                            padding: '8px', cursor: 'pointer', color: 'var(--danger)',
                                            fontSize: '14px'
                                        }}
                                    >
                                        <FiAlertTriangle /> Report
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div style={{ marginTop: '4px', marginBottom: '12px', lineHeight: '1.5' }}>
                        {content}
                    </div>

                    {image && (
                        <div style={{
                            borderRadius: '16px',
                            overflow: 'hidden',
                            marginBottom: '12px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            position: 'relative'
                        }}>
                            {/* Placeholder for image */}
                            <div style={{ width: '100%', height: '300px', background: '#222' }}></div>
                        </div>
                    )}

                    <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '400px', color: 'var(--text-secondary)' }}>
                        <button className="btn-ghost" style={{ padding: '8px', display: 'flex', gap: '6px', alignItems: 'center', border: 'none' }}>
                            <FiMessageCircle /> <span>{comments}</span>
                        </button>
                        <button className="btn-ghost" style={{ padding: '8px', display: 'flex', gap: '6px', alignItems: 'center', border: 'none' }}>
                            <FiHeart /> <span>{likes}</span>
                        </button>
                        <button className="btn-ghost" style={{ padding: '8px', display: 'flex', gap: '6px', alignItems: 'center', border: 'none' }}>
                            <FiShare2 />
                        </button>
                    </div>
                </div>
            </div>
            {isReported && (
                <div style={{ marginTop: '10px', fontSize: '12px', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                    Pass sent to AI Moderation Review.
                </div>
            )}
        </div>

    );
};

export default Post;
