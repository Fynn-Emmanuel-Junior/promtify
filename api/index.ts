import express, {Express} from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import  cookieParser  from 'cookie-parser'
import mongoose from 'mongoose'

const database_uri : string = process.env.DATABASE_URI as string


const app: Express = express()

const PORT = process.env.PORT


// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(cookieParser())


//routes


app.listen(PORT , async() => {
    await mongoose.connect(database_uri)
        .then(() => console.log(`database connected succesfully\n Server running on PORT ${PORT}`))
        .catch((error) => console.log(`database connection failed\n ${error.message}`))
})