const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet')
const morgan = require('morgan')
const { connectRedis } = require('./Config/redisConfig');
const userRoutes = require('./Routes/userRoutes')

require('dotenv').config()

const app = express()
app.use(express.json())

connectRedis();
console.log('Connected to Redis');

app.use(morgan('dev'))
app.use(helmet())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/user', userRoutes)

mongoose.connect(process.env.MONG_URI)
    .then(() => {
        app.listen((process.env.PORT), () => {
            console.log(`Conected to DB and Server is running on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })