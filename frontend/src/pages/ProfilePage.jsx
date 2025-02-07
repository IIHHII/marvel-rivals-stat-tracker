import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProfilePage() {
    const { username } = useParams();
    const [playerStats, setPlayerStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`/api/player/${username}`)
            .then(response => {
                setPlayerStats(response.data);
            })
            .catch(error => {
                console.error('❌ Error fetching player data:', error);
            })
            .finally(() => setLoading(false));
    }, [username]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile-container">
            {playerStats ? (
                <div>
                    <h2>{playerStats.player_name}'s Stats</h2>
                    <div className="stats-overview">
                        <p><strong>Total Wins:</strong> {playerStats.stats?.total_wins ?? "N/A"}</p>
                        <p><strong>Total Losses:</strong> {playerStats.stats?.total_losses ?? "N/A"}</p>
                    </div>
                </div>
            ) : (
                <p>No player found</p>
            )}
        </div>
    );
}

export default ProfilePage;
