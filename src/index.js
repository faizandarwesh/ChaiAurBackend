import dotenv from 'dotenv'
import databaseConnection from "./database/connection.js"

dotenv.config({
path : './env'
})

databaseConnection()