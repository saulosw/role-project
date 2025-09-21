const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
import express = require('express');

const app = express();

dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

const authRoutes = require('./routes/authRoutes');


const apiPort = process.env.API_PORT || 3000;

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRoutes);

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Backend server working!');
});

app.listen(apiPort, () => {
    console.log(`Local: API is running at http://localhost:${apiPort}`);
});