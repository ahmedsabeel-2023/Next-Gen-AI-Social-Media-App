import React, { useState } from 'react';
import Post from '../components/feed/Post';
import { FiImage, FiSmile, FiSend, FiCpu, FiDatabase, FiServer, FiCheckCircle } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            author: { name: 'Elon Musk', username: 'elonmusk' },
            timestamp: '2h',
            content: 'Just deployed the new AI safety protocols to the neural net. Mars is looking good today! 🚀 #SpaceX #AI',
            likes: '45.2K',
            comments: '12.1K',
            image: true
        },
        {
            id: 2,
            author: { name: 'Sam Altman', username: 'sama' },
            timestamp: '4h',
            content: 'The future of AGI is not just about intelligence, but about alignment. We are making great progress.',
            likes: '12K',
            comments: '3.4K'
        },
        {
            id: 3,
            author: { name: 'System Moderator', username: 'mod_ai' },
            timestamp: 'Just now',
            content: '[Flagged Content Hidden] This post violated our community guidelines on misinformation.',
            warning: 'Misinformation detected by AI',
            likes: '0',
            comments: '0'
        }
    ]);

    const [newPostContent, setNewPostContent] = useState('');
    const [isPosting, setIsPosting] = useState(false);
    const [processingStep, setProcessingStep] = useState(null); // 'backend', 'ai', 'db', 'done'

    const handlePost = () => {
        if (!newPostContent) return;
        setIsPosting(true);

        // FLOW: User Input -> Backend -> AI -> Database -> Feed (User)

        // Step 1: Input -> Backend
        setProcessingStep('backend');
        setTimeout(() => {

            // Step 2: Backend -> AI (Processing)
            setProcessingStep('ai');
            setTimeout(() => {

                // Step 3: AI -> Database (Storage)
                setProcessingStep('db');
                setTimeout(() => {

                    // Step 4: Database -> Feed (User)
                    setProcessingStep('done');

                    const newPost = {
                        id: Date.now(),
                        author: { name: 'Current User', username: 'me' },
                        timestamp: 'Just now',
                        content: newPostContent,
                        likes: 0,
                        comments: 0
                    };
                    setPosts([newPost, ...posts]);
                    setNewPostContent('');

                    setTimeout(() => {
                        setIsPosting(false);
                        setProcessingStep(null);
                    }, 500);

                }, 800);
            }, 1000);
        }, 600);
    };

    const getStatusText = () => {
        switch (processingStep) {
            case 'backend': return 'Sending to Backend...';
            case 'ai': return 'AI Analyzing Content...';
            case 'db': return 'Saving to Database...';
            case 'done': return 'Published to Feed!';
            default: return '';
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px 15px' }}>
            <div style={{
                position: 'sticky',
                top: 0,
                zIndex: 10,
                backdropFilter: 'blur(10px)',
                background: 'rgba(var(--bg-dark), 0.8)',
                padding: '10px 15px',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                marginBottom: '20px',
                marginLeft: '-15px',
                marginRight: '-15px'
            }}>
                <h2 style={{ margin: 0, fontSize: 'clamp(18px, 4vw, 24px)' }}>Home</h2>
            </div>

            {/* Create Post Widget */}
            <div className="glass-panel" style={{ padding: '20px', marginBottom: '30px' }}>
                <div style={{ display: 'flex', gap: '15px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(45deg, var(--primary), var(--secondary))' }}></div>
                    <div style={{ flex: 1 }}>
                        <textarea
                            placeholder="What's happening? (AI will moderate your post)..."
                            value={newPostContent}
                            onChange={(e) => setNewPostContent(e.target.value)}
                            disabled={isPosting}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                resize: 'none',
                                fontSize: 'clamp(14px, 3.5vw, 18px)',
                                minHeight: '80px',
                                padding: '10px 0',
                                width: '100%'
                            }}
                        />

                        {/* Status Visualization Pipeline */}
                        <AnimatePresence>
                            {isPosting && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    style={{ overflow: 'hidden', marginBottom: '10px' }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px', color: 'var(--text-muted)' }}>
                                        {/* Icons representing the flow */}
                                        <div style={{ color: processingStep === 'backend' ? 'var(--primary)' : 'var(--text-muted)', transition: 'color 0.3s' }}>
                                            <FiServer /> Backend
                                        </div>
                                        →
                                        <div style={{ color: processingStep === 'ai' ? 'var(--secondary)' : 'var(--text-muted)', transition: 'color 0.3s' }}>
                                            <FiCpu /> AI
                                        </div>
                                        →
                                        <div style={{ color: processingStep === 'db' ? 'var(--success)' : 'var(--text-muted)', transition: 'color 0.3s' }}>
                                            <FiDatabase /> DB
                                        </div>

                                        <span style={{ marginLeft: 'auto', fontWeight: 'bold', color: 'var(--primary-light)' }}>
                                            {getStatusText()}
                                        </span>
                                    </div>
                                    <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', marginTop: '5px', borderRadius: '2px' }}>
                                        <motion.div
                                            initial={{ width: '0%' }}
                                            animate={{ width: processingStep === 'done' ? '100%' : processingStep === 'db' ? '75%' : processingStep === 'ai' ? '50%' : '25%' }}
                                            style={{ height: '100%', background: 'var(--primary)', borderRadius: '2px' }}
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginTop: '10px',
                            borderTop: '1px solid rgba(255,255,255,0.1)',
                            paddingTop: '15px'
                        }}>
                            <div style={{ display: 'flex', gap: '15px', color: 'var(--primary)' }}>
                                <FiImage style={{ cursor: 'pointer' }} size={20} />
                                <FiSmile style={{ cursor: 'pointer' }} size={20} />
                                <FiCpu style={{ cursor: 'pointer' }} title="AI Enhanced" size={20} />
                            </div>
                            <button
                                className="btn-primary"
                                onClick={handlePost}
                                disabled={isPosting}
                                style={{ opacity: isPosting ? 0.7 : 1, display: 'flex', alignItems: 'center', gap: '8px' }}
                            >
                                {isPosting ? <FiDatabase className="spin" /> : <>Post <FiSend /></>}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feed */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                <AnimatePresence>
                    {posts.map(post => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            key={post.id}
                        >
                            <Post {...post} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <style>{`
                .spin { animation: spin 1s linear infinite; }
                @keyframes spin { 100% { transform: rotate(360deg); } }
            `}</style>
        </div>
    );
};

export default Home;
