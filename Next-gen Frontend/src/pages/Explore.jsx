import React from 'react';
import { FiSearch, FiTrendingUp, FiHash, FiVideo, FiImage, FiCpu } from 'react-icons/fi';
import Post from '../components/feed/Post';

const Explore = () => {
    // Mock Trending Topics
    const trendingTopics = [
        { id: 1, tag: '#AIRevolution', posts: '2.5M' },
        { id: 2, tag: '#MarsMission', posts: '1.2M' },
        { id: 3, tag: '#QuantumComputing', posts: '850K' },
        { id: 4, tag: '#DigitalArt', posts: '500K' }
    ];

    // Mock Categories
    const categories = ['Tech', 'Science', 'Art', 'Crypto', 'Space', 'Music'];

    // Mock Popular/Trending Posts
    const trendingPosts = [
        {
            id: 201,
            author: { name: 'Tech Insider', username: 'tech_insider' },
            timestamp: '5h',
            content: 'The new neural processor demonstrates 100x efficiency over traditional GPUs. This changes everything for edge AI. 🧠⚡ #Tech #AI',
            likes: '15.2K',
            comments: '340',
        },
        {
            id: 202,
            author: { name: 'Cosmic Ray', username: 'astro_ray' },
            timestamp: '8h',
            content: 'Just captured this simulation of a black hole merger using the new physics engine. Simply breathtaking. 🌌',
            image: true, // Placeholder logic in Post component
            likes: '8.9K',
            comments: '120',
        }
    ];

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '20px' }}>

            {/* Header */}
            <div style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <h2 style={{ margin: '0 0 20px 0' }}>Explore</h2>

                {/* Search Bar (Mobile/prominent) */}
                <div style={{
                    display: 'flex', alignItems: 'center',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '20px', padding: '10px 15px',
                    marginBottom: '20px'
                }}>
                    <FiSearch style={{ marginRight: '10px', color: 'var(--text-secondary)' }} />
                    <input
                        type="text"
                        placeholder="Search NextGen..."
                        style={{ background: 'transparent', border: 'none', color: 'white', width: '100%', outline: 'none' }}
                    />
                </div>

                {/* Categories */}
                <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '10px' }}>
                    {categories.map(cat => (
                        <span key={cat} style={{
                            padding: '8px 16px', borderRadius: '20px',
                            background: 'rgba(255,255,255,0.1)', cursor: 'pointer',
                            fontSize: '14px', whiteSpace: 'nowrap'
                        }}>
                            {cat}
                        </span>
                    ))}
                </div>
            </div>

            {/* Trending Hashtags Section */}
            <div style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <h3 style={{ fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FiTrendingUp /> Trending Now
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '15px' }}>
                    {trendingTopics.map(topic => (
                        <div key={topic.id} style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontWeight: 'bold' }}>{topic.tag}</span>
                            <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{topic.posts} posts</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Popular Posts Feed */}
            <div style={{ padding: '0' }}>
                <div style={{ padding: '15px 20px', color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 'bold' }}>
                    POPULAR POSTS
                </div>
                {trendingPosts.map(post => (
                    <Post key={post.id} {...post} />
                ))}
            </div>

        </div>
    );
};

export default Explore;
