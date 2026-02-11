import React, { useState, useEffect } from 'react';
import img1 from '../assets/image1.png';
import img2 from '../assets/image2.png';
import img3 from '../assets/image3.png';

const RecommendationEngine = () => {
    const [recommendations, setRecommendations] = useState([
        { id: 1, title: 'Future of Neural Networks', category: 'Tech', score: 98, img: img1 },
        { id: 2, title: 'Cyberpunk Aesthetics 2026', category: 'Art', score: 95, img: img2 },
        { id: 3, title: 'Secure AI Collaboration', category: 'Security', score: 92, img: img3 },
    ]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate AI processing time
        setTimeout(() => setIsLoading(false), 1500);
    }, []);

    if (isLoading) {
        return (
            <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                <h3>Thinking...</h3>
                <p style={{ color: 'hsl(var(--primary))' }}>Analyzing your preferences with Neural AI...</p>
            </div>
        );
    }

    return (
        <div className="animate-fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h2><span className="text-gradient">AI Top Picks</span> For You</h2>
                <span className="status-badge status-safe">Personalized</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {recommendations.map((item) => (
                    <div key={item.id} className="glass-panel" style={{ overflow: 'hidden', position: 'relative' }}>
                        <div style={{ height: '180px', overflow: 'hidden' }}>
                            <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
                        </div>
                        <div style={{ padding: '1.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span style={{ fontSize: '0.8rem', color: 'hsl(var(--secondary))', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.category}</span>
                                <span style={{ color: 'hsl(var(--success))', fontWeight: 'bold' }}>{item.score}% Match</span>
                            </div>
                            <h3 style={{ fontSize: '1.2rem', margin: '0 0 1rem 0' }}>{item.title}</h3>
                            <button className="btn-primary" style={{ width: '100%', padding: '0.5rem' }}>View Content</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecommendationEngine;
