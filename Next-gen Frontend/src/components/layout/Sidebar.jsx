import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiHome, FiHash, FiBell, FiMessageSquare, FiUser, FiCpu, FiLogOut } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // In a real app, clear auth tokens here
        navigate('/login');
    };

    const navItems = [
        { icon: FiHome, label: 'Home', path: '/' },
        { icon: FiHash, label: 'Explore', path: '/explore' },
        { icon: FiBell, label: 'Notifications', path: '/notifications' },
        { icon: FiMessageSquare, label: 'Messages', path: '/messages' },
        { icon: FiCpu, label: 'AI Studio', path: '/ai-studio' }, // Unique AI feature
        { icon: FiUser, label: 'Profile', path: '/profile' },
    ];

    return (
        <div className="sidebar" style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRight: '1px solid rgba(255,255,255,0.1)',
            backgroundColor: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(10px)'
        }}>
            <div>
                <div style={{ marginBottom: '40px', padding: '0 10px' }}>
                    <h1 className="text-gradient" style={{ fontSize: '24px', margin: 0 }}>NextGen</h1>
                </div>

                <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {navItems.map((item) => (
                        <NavLink
                            key={item.label}
                            to={item.path}
                            style={({ isActive }) => ({
                                display: 'flex',
                                alignItems: 'center',
                                gap: '15px',
                                padding: '12px 20px',
                                borderRadius: '30px',
                                color: isActive ? 'white' : 'var(--text-muted)',
                                background: isActive ? 'linear-gradient(90deg, var(--primary) 0%, rgba(0,0,0,0) 100%)' : 'transparent',
                                fontSize: '18px',
                                fontWeight: isActive ? 'bold' : 'normal',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease'
                            })}
                        >
                            <item.icon size={22} />
                            <span>{item.label}</span>
                        </NavLink>
                    ))}
                </nav>
            </div>

            <div style={{ padding: '0 10px' }}>
                <button
                    onClick={handleLogout}
                    className="btn-ghost"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        color: 'var(--danger)',
                        width: '100%',
                        padding: '12px 20px',
                        border: '1px solid rgba(255,50,50,0.2)',
                        borderRadius: '30px',
                        background: 'rgba(255,0,0,0.05)',
                        cursor: 'pointer'
                    }}
                >
                    <FiLogOut />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
