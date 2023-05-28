
import express from 'express';
import { Request, Response } from 'express';
import config from '../config/config';
import { connectDB } from './db/db';
import Routers from './routers';

const app = express();
const port = config.port;

connectDB();


app.use('/api', Routers);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});


