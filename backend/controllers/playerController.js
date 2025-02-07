import { getPlayerId, getPlayerData } from '../models/playerModel.js';

export const fetchPlayer = (req, res) => {
    const { username } = req.params;

    getPlayerId(username)
        .then(playerId => {
            if (!playerId) {
                return res.status(404).json({ message: "Player ID not found" });
            }

            return getPlayerData(playerId);
        })
        .then(playerData => {
            if (!playerData) {
                return res.status(404).json({ message: "Player data not found" });
            }
            res.json(playerData);
        })
        .catch(error => {
            console.error('❌ API request failed:', error.message);
            res.status(500).json({ message: "Error fetching player data", error: error.message });
        });
};
