import express, { Application, Request, Response } from 'express';
import cors from "cors";
const app: Application = express()

//parsers
app.use(express.json())  //json parse will happen
app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Your Server Running Well at server.ts</h1>')
})

export default app;