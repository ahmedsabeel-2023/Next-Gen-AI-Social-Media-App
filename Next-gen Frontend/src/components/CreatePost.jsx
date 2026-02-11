import React, { useState } from 'react';

const CreatePost = ({ onPost }) => {
    const [content, setContent] = useState('');
    const [mediaType, setMediaType] = useState(null); // 'image', 'video'

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!content.trim()) return;

        const newPost = {
            id: Date.now(),
            author: 'CyberUser', // Mock
            content,
            type: mediaType || 'text',
            timestamp: new Date().toISOString(),
            likes: 0
        };

        onPost(newPost);
        setContent('');
        setMediaType(null);
    };

    return (
        <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ marginTop: 0 }}>Create Content</h3>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Share your thoughts with the network..."
                    rows="3"
                    style={{ marginBottom: '1rem', resize: 'vertical' }}
                />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button type="button"
                            onClick={() => setMediaType('image')}
                            style={{ background: mediaType === 'image' ? 'hsl(var(--primary))' : 'rgba(255,255,255,0.1)', border: 'none', padding: '0.5rem 1rem', borderRadius: '20px', color: 'white', cursor: 'pointer', fontSize: '0.9rem' }}
                        >
                            📷 Image
                        </button>
                        <button type="button"
                            onClick={() => setMediaType('video')}
                            style={{ background: mediaType === 'video' ? 'hsl(var(--primary))' : 'rgba(255,255,255,0.1)', border: 'none', padding: '0.5rem 1rem', borderRadius: '20px', color: 'white', cursor: 'pointer', fontSize: '0.9rem' }}
                        >
                            🎥 Video
                        </button>
                    </div>

                    <button type="submit" className="btn-primary">Post</button>
                </div>
            </form>
        </div>
    );
};

export default CreatePost;
