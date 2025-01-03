import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log("error");
  }
};

export default connectMongoDB;

//connecting to a mongoDB dataabase involves network i/o, which can take some time to complete. Instead of blocking the main thread while waiting for the connection to suceed or fail, the async function allows the code to continue executing other tasks in the meantime
//the await keyword is used to pause the execution of the function until the Promise returned by mongoose.connect is resolved
