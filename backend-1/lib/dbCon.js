import mongoose from "mongoose";

export default async function dbConn(){
    try {
        const mongoUrl = process.env.MONGO_URL || 'mongodb://127.0.0.1/fiverr-clone';
        mongoose.set('strictQuery', true);
        await mongoose.connect(mongoUrl);
        console.log('mongodb connected');
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}