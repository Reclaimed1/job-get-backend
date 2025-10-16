import {connect} from 'mongoose';
import {configDotenv} from 'dotenv';
import app from './app.js';
configDotenv();
const PORT= process.env.PORT || 5000;

try{
    const con=await connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${con.connection.host}`)
}
catch(error){
    console.log(error);
    process.exit(1);
}

app.listen(PORT,()=>{
    console.log(`server currently running on ${PORT}`);
})