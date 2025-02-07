import axios from 'axios';

const MARVEL_RIVALS_API_URL_ID = "https://mrapi.org/api/player-id";
const MARVEL_RIVALS_API_URL_PLAYER = "https://mrapi.org/api/player";

export const getPlayerId = (username) => {
    return axios.get(`${MARVEL_RIVALS_API_URL_ID}/${username}`)
        .then(response => response.data.id || null)
        .catch(error => {
            console.error(`❌ Error fetching player ID:`, error.message);
            return null;
        });
};

export const getPlayerData = (playerId) => {
    return axios.get(`${MARVEL_RIVALS_API_URL_PLAYER}/${playerId}`)
        .then(response => response.data)
        .catch(error => {
            console.error(`❌ Error fetching player data:`, error.message);
            return null;
        });
};
