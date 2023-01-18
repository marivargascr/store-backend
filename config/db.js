import mongoose from "mongoose";
import dotenv from 'dotenv'


//create a funtion to connect to the database 
const connectDB = async () => {
    try {
      mongoose.set("strictQuery", false);
      const conn =  await mongoose.connect(process.env.MONGO_URI)

      console.log(`MongoDB Connected: ${conn.connection.host}` .cyan.underline.bold);
    } catch (error) {
      console.error(`Error: ${error.message}` .red.underline.bold)
      process.exit(1)
    }
  }


export default connectDB;


