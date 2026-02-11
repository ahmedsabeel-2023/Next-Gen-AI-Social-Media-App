import React, { useState } from 'react';

const ModerationDemo = () => {
    const [text, setText] = useState('');
    const [status, setStatus] = useState('clean'); // clean, analyzing, flagged
    const [message, setMessage] = useState('System waiting for input...');

    // Mock "Bad Words" list for demonstration
    const BANNED_WORDS = ['scam', 'spam', 'hate', 'fake', 'bot'];

    const handleInput = (e) => {
        const newVal = e.target.value;
        setText(newVal);
        setStatus('analyzing');
        setMessage('AI is analyzing content safety...');

        // Debounce simulation
        setTimeout(() => {
            const lower = newVal.toLowerCase();
            const found = BANNED_WORDS.some(word => lower.includes(word));

            if (found) {
                setStatus('flagged');
                setMessage('⚠️ Content Flagged: Potential Violation Detected');
            } else {
                setStatus('clean');
                setMessage('✅ Content looks safe');
            }
        }, 500);
    };

    return (
        <div className="glass-panel" style={{ padding: '2rem' }}>
            <h2><span className="text-gradient">Real-time Moderation</span></h2>
            <p style={{ color: 'hsl(var(--text-muted))', marginBottom: '1.5rem' }}>
                Type below. Our AI automatically flags harmful keywords (try "scam", "bot").
            </p>

            <textarea
                rows="4"
                value={text}
                onChange={handleInput}
                placeholder="Type something here..."
                style={{
                    borderColor: status === 'flagged' ? 'hsl(var(--danger))' :
                        status === 'clean' && text.length > 0 ? 'hsl(var(--success))' : ''
                }}
            />

            <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                    width: '12px', height: '12px', borderRadius: '50%',
                    backgroundColor: status === 'flagged' ? 'hsl(var(--danger))' :
                        status === 'clean' ? 'hsl(var(--success))' : 'hsl(var(--secondary))',
                    boxShadow: `0 0 10px ${status === 'flagged' ? 'hsl(var(--danger))' : 'hsl(var(--success))'}`
                }}></div>
                <span style={{
                    color: status === 'flagged' ? 'hsl(var(--danger))' : 'hsl(var(--text-main))',
                    fontWeight: 'bold'
                }}>
                    {message}
                </span>
            </div>
        </div>
    );
};

export default ModerationDemo;
