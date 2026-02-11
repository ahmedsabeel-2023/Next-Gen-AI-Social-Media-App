import React, { useState, useRef, useEffect } from 'react';

const ChatAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: 'ai', text: 'Hello! I am Cortex, your AI assistant. How can I help you today?' }
    ]);
    const [input, setInput] = useState('');
    const endRef = useRef(null);

    const toggleOpen = () => setIsOpen(!isOpen);

    const sendMessage = () => {
        if (!input.trim()) return;

        // User message
        const newMsgs = [...messages, { sender: 'user', text: input }];
        setMessages(newMsgs);
        setInput('');

        // Simulate AI response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                sender: 'ai',
                text: `I processed that request about "${input}". This is a demo response.`
            }]);
        }, 1000);
    };

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <>
            <div style={{
                position: 'fixed',
                bottom: '1rem',
                right: '1rem',
                zIndex: 1000
            }}>
                {isOpen && (
                    <div className="glass-panel chat-assistant-panel" style={{
                        width: '350px',
                        height: '500px',
                        marginBottom: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden'
                    }}>
                        {/* Header */}
                        <div style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.2)' }}>
                            <h4 style={{ margin: 0 }}>Cortex Assistant</h4>
                            <span style={{ fontSize: '0.8rem', color: 'hsl(var(--success))' }}>● Online</span>
                        </div>

                        {/* Messages */}
                        <div style={{ flex: 1, padding: '1rem', overflowY: 'auto' }}>
                            {messages.map((m, i) => (
                                <div key={i} style={{
                                    marginBottom: '1rem',
                                    textAlign: m.sender === 'user' ? 'right' : 'left'
                                }}>
                                    <div style={{
                                        display: 'inline-block',
                                        padding: '0.8rem 1rem',
                                        borderRadius: '12px',
                                        background: m.sender === 'user' ? 'hsl(var(--primary))' : 'rgba(255,255,255,0.1)',
                                        borderTopRightRadius: m.sender === 'user' ? '0' : '12px',
                                        borderTopLeftRadius: m.sender === 'ai' ? '0' : '12px',
                                        fontSize: '0.9rem',
                                        maxWidth: '80%'
                                    }}>
                                        {m.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={endRef} />
                        </div>

                        {/* Input */}
                        <div style={{ padding: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                                    placeholder="Ask me anything..."
                                    style={{ padding: '0.5rem', flex: 1 }}
                                />
                                <button className="btn-primary" onClick={sendMessage} style={{ padding: '0.5rem 1rem' }}>→</button>
                            </div>
                        </div>
                    </div>
                )}

                <button
                    onClick={toggleOpen}
                    className="btn-primary"
                    style={{
                        width: '60px', height: '60px',
                        borderRadius: '50%',
                        fontSize: '1.5rem',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 4px 20px hsla(var(--primary), 0.5)'
                    }}
                >
                    {isOpen ? '✕' : '💬'}
                </button>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .chat-assistant-panel {
                        position: fixed !important;
                        bottom: 80px !important;
                        right: 0 !important;
                        left: 0 !important;
                        width: calc(100vw - 2rem) !important;
                        margin: 0 1rem !important;
                        max-height: 70vh !important;
                        height: auto !important;
                    }
                }
            `}</style>
        </>
    );
};

export default ChatAssistant;
