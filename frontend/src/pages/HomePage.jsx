import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
            <h1>Marvel Rivals Stat Tracker</h1>
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
    );
}

export default HomePage;
