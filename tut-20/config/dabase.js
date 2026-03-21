import mongoose from 'mongoose';

export const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://sjava8643_db_user:UbvHHdpg4KbIsoa0@cluster0.dqcxlvs.mongodb.net/devTinder");
}