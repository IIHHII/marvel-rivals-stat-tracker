import express from 'express';
import { fetchPlayer } from '../controllers/playerController.js';

const router = express.Router();

router.get('/player/:username', fetchPlayer);

export default router;
