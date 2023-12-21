import express from 'express'
import cors from 'cors'


const app = express()

const PORT = process.env.PORT || 3500

// middlewares
app.use(express.json())
app.use(cors())

//routes


app.listen(PORT , async() => {

})