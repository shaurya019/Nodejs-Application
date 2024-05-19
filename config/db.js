import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URL)
        console.log("CONNECTED....")
    } catch (err) {
        console.log(`ERROR....${err}`)
    }
}

export default connectDB;