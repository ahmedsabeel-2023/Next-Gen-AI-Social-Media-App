import React, { useState } from 'react';
import Post from '../components/feed/Post';
import { FiEdit2, FiMapPin, FiLink, FiCalendar } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Profile = () => {
    // Mock User Data - This would normally come from your Backend/Database
    const user = {
        name: 'Current User',
        username: 'me',
        bio: 'Building the future with AI. 🚀 | NextGen Early Adopter',
        location: 'Mars Colony 1',
        website: 'nextgen.ai',
        joinDate: 'Joined January 2026',
        following: 142,
        followers: 8903,
        coverColor: 'linear-gradient(to right, #240b36, #c31432)', // Mock cover
    };

    const [posts] = useState([
        {
            id: 101,
            author: { name: user.name, username: user.username },
            timestamp: '2h',
            content: 'Just tried the new AI Studio feature. The moderation speed is insane! ⚡',
            likes: '45',
            comments: '12',
        },
        {
            id: 102,
            author: { name: user.name, username: user.username },
            timestamp: '1d',
            content: 'Setting up my profile on NextGen. Hello world!',
            likes: '120',
            comments: '34',
        }
    ]);

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', paddingBottom: '50px' }}>

            {/* Header / Nav */}
            <div style={{
                position: 'sticky', top: 0, zIndex: 10,
                backdropFilter: 'blur(10px)', background: 'rgba(var(--bg-dark), 0.8)',
                padding: '10px 20px', borderBottom: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', gap: '20px'
            }}>
                <h2 style={{ margin: 0, fontSize: '20px' }}>{user.name}</h2>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{posts.length} posts</span>
            </div>

            {/* Hero Section */}
            <div>
                {/* Cover Image */}
                <div style={{
                    height: '200px',
                    background: user.coverColor,
                    position: 'relative'
                }}></div>

                {/* Profile Info */}
                <div style={{ padding: '0 20px', position: 'relative' }}>

                    {/* Avatar & Edit Button */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '-50px', marginBottom: '15px' }}>
                        <div style={{
                            width: '130px', height: '130px',
                            borderRadius: '50%', border: '4px solid black',
                            background: 'linear-gradient(45deg, var(--primary), var(--secondary))',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '50px', fontWeight: 'bold', color: 'white'
                        }}>
                            {user.name[0]}
                        </div>
                        <button className="btn-ghost" style={{
                            border: '1px solid var(--text-muted)',
                            borderRadius: '20px', padding: '8px 16px', fontWeight: 'bold'
                        }}>
                            Edit profile
                        </button>
                    </div>

                    {/* Details */}
                    <div style={{ marginBottom: '20px' }}>
                        <h1 style={{ margin: 0, fontSize: '24px' }}>{user.name}</h1>
                        <div style={{ color: 'var(--text-muted)', marginBottom: '15px' }}>@{user.username}</div>

                        <p style={{ margin: '0 0 15px 0', lineHeight: '1.5' }}>{user.bio}</p>

                        <div style={{ display: 'flex', gap: '15px', color: 'var(--text-muted)', fontSize: '14px', flexWrap: 'wrap', marginBottom: '15px' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><FiMapPin /> {user.location}</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><FiLink /> <a href="#" style={{ color: 'var(--primary)' }}>{user.website}</a></span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><FiCalendar /> {user.joinDate}</span>
                        </div>

                        <div style={{ display: 'flex', gap: '20px', fontSize: '14px' }}>
                            <span><strong style={{ color: 'white' }}>{user.following}</strong> <span style={{ color: 'var(--text-muted)' }}>Following</span></span>
                            <span><strong style={{ color: 'white' }}>{user.followers}</strong> <span style={{ color: 'var(--text-muted)' }}>Followers</span></span>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <div style={{ flex: 1, textAlign: 'center', padding: '15px', fontWeight: 'bold', borderBottom: '4px solid var(--primary)', cursor: 'pointer' }}>Posts</div>
                        <div style={{ flex: 1, textAlign: 'center', padding: '15px', color: 'var(--text-muted)', cursor: 'pointer' }}>Replies</div>
                        <div style={{ flex: 1, textAlign: 'center', padding: '15px', color: 'var(--text-muted)', cursor: 'pointer' }}>Media</div>
                        <div style={{ flex: 1, textAlign: 'center', padding: '15px', color: 'var(--text-muted)', cursor: 'pointer' }}>Likes</div>
                    </div>
                </div>
            </div>

            {/* User's Posts Feed */}
            <div>
                {posts.map(post => (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        key={post.id}
                    >
                        <Post {...post} />
                    </motion.div>
                ))}
            </div>

        </div>
    );
};

export default Profile;
