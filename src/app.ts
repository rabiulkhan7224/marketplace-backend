import express, { Application, Request } from 'express';
import routers from './app/routes';

const app: Application = express();

app.use(express.json());

app.get('/', (req:Request, res) => {
    res.send('Hello, World!');
});
app.use('/v1/api', routers);

// Routes




export default app;