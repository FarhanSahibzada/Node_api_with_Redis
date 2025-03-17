import { app } from './app.js'
import { connectedDatabase } from './db/db.js'
import { init } from './redis/redis.js'

connectedDatabase()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("app is running on port", process.env.PORT)
            init()
        })
    }).catch(() => {
        console.log("app crashed")
    })



