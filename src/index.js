import dotenv from "dotenv";
import app from "./app.js"
import databaseConnection from "./database/connection.js";

dotenv.config({
  path: "./env",
});

databaseConnection()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=> {
        console.log("App is listening to port",process.env.PORT)
    })
})
.catch((err)=>{
    console.log("MongoDB Connection Failed",err)
})
