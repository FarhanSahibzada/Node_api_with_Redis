import express from 'express'

const app =  express();

app.use(express.json({limit : '20kb'}))
app.use(express.urlencoded({ extended : true}))



export {
    app
}
