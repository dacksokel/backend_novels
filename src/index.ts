
import express from 'express';
import { Request, Response } from 'express';
import config from '../config/config';
import { connectDB } from './db/db';

const app = express();
const port = config.port;

connectDB();


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});


