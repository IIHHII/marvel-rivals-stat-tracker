import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';

function HomePage() {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username) {
            navigate(`/profile/${username}`);
        }
    };

    return (
        <div className="home-container">
            <div className="top-left-section">
                <img src="/assets/images/mrlogo.jpeg" alt="Top Left Logo" className="top-left-logo" />
            </div>
            
            <div className="top-right-buttons">
                <button>Home</button>
                <button>My Stats</button>
                <button>Hero Guides</button>
                <button>AI Coaching</button>
                <button>Leaderboard</button>
                <button className="login-signin">Sign In</button>
                <button className="login-signin">Login</button>
            </div>

            <div className="main-content">
                <h1>
                    <img src="/assets/images/mrlogo.jpeg" alt="Logo" />
                    Marvel Rivals Stat Tracker
                </h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Enter Player Username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        </div>
    );
}

export default HomePage;
