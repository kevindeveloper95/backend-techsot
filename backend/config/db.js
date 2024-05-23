import mongoose, { connect } from "mongoose";




const conectDB = async () =>{
    try {
       const conn = await mongoose.connect(process.env.MONGO_URI,)
     console.log(`Mongo conected ${conn.connection.host}`)
      
    } catch (error) {
       console.log(`error ${error.message}`)
       process.exit(1)
    }
}


export default conectDB;



