import app from "./app";
import mongoose from 'mongoose';
import config from "./app/config";



async function server() {
    try {
        await mongoose.connect(config.dbUrl as string);
        console.log("mongoose.connect success!!");
        app.listen(config.port, () => {
            console.log(`hurray!! ki moja ${config.port} port tomar`)
        })
    } catch (error) {
        console.log(error);
    }
}


server().catch(err => console.log(err));


