import mongoose from "mongoose";
const connectDB = async ()=>{
    const bhati = await mongoose.connect("mongodb://localhost:27017");
    console.log("bhati----",bhati.connection.host);
};

export default connectDB