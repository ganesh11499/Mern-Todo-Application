import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.USER_NAME;
const PASSWORD = process.env.USER_PASSWORD;


const connection = () => {
    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.b5qa7ur.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URI, {useNewUrlParser:true});

    mongoose.connection.on('connected', () => {
        console.log('Database connected successfully');
    });

    mongoose.connection.on('disconnect', () => {
        console.log('Database disconnected');
    });


    mongoose.connection.on('error', (error) => {
        console.log('error while connect in DB', error.message);
    });
}


export default connection;