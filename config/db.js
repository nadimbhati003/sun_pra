import mongoose from "mongoose";
const connectDB = async ()=>{
    
    const bhati = await mongoose.connect("mongodb+srv://prod:aELt8iimgyhwPCbV@cluster0.fhesput.mongodb.net/?retryWrites=true&w=majority");
    console.log("bhati----",bhati.connection.host);
};

export default connectDB