import express, { Application, Request } from 'express';

const app: Application = express();

app.use(express.json());

app.get('/', (req:Request, res) => {
    res.send('Hello, World!');
});

// Routes




export default app;