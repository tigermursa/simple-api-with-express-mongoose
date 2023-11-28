import express, { Application, Request, Response } from 'express';
import cors from "cors";
import { userRoutes } from './app/config/modules/user/user.route';
const app: Application = express()

//parsers
app.use(express.json())  //json parse will happen
app.use(cors())


//application routes
app.use('/api/data/users', userRoutes)


app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Your Server Running Well at server.ts</h1>')
})

export default app;