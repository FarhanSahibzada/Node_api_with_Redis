import mongoose from "mongoose";


export const connectedDatabase = async ()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URL, {
            dbName: process.env.DB_NAME
        })
        console.log("database is connected", connect.connection.readyState)

    } catch (error) {
        console.log("error in database", error)
        process.exit(1)
    }
}


