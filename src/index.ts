
import express, { Application } from 'express';
import config from '../config/config';
import { connectDB } from './db/db';
import Routers from './routers';

const app: Application = express();
const port: number = config.port;

app.use(express.json());

connectDB();

app.use('/api', Routers);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});


