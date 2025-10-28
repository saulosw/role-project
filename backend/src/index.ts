const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
import express = require('express');
import sequelize from './config/database';

const app = express();

dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const userRoutes = require('./routes/userRoutes');

import './models/associations';

const apiPort = process.env.API_PORT || 3000;

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/', eventRoutes);

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Backend server working!');
});

const startServer = async () => {
    try {
        // Authenticate database connection
        await sequelize.authenticate();
        console.log('Database connection established successfully');

        // Sync database - use alter in development, remove in production
        // force: true drops all tables and recreates them
        // alter: true updates tables to match models
        await sequelize.sync({ alter: true });
        console.log('Database synchronized');

        app.listen(apiPort, () => {
            console.log(`Local: API is running at http://localhost:${apiPort}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }
};

startServer();