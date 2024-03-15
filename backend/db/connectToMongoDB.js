import mongoose from "mongoose";

const connectToMongoDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to MongoDB");
    } catch (error) {
        console.log("error:",error);
    }
}

export default connectToMongoDB;