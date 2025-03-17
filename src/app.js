import express from 'express'
import {Redis} from 'ioredis'

const app =  express();
const client = new Redis();

app.use(express.json({limit : '20kb'}))
app.use(express.urlencoded({ extended : true}))



export {
    app,
    client
}
