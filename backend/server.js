import express from 'express';
import cors from 'cors';
import playerRoutes from './routes/playerRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use('/api', playerRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
