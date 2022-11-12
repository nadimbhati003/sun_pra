import mongoose from "mongoose";
const connectDB = async ()=>{
    
    const bhati = await mongoose.connect("mongodb://localhost:27017"
    );
    console.log("bhati----",bhati.connection.host);
};

export default connectDB

// "mongodb+srv://prod:aELt8iimgyhwPCbV@cluster0.fhesput.mongodb.net/?retryWrites=true&w=majority"