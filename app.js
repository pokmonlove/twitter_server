import express from 'express' //express 서버
import tweetsRouter from './router/tweets.js'
import authRouter from './router/auth.js'
import { config } from './config.js'
import { initSocket } from './connection/socket.js'

const app = express()
app.use(express.json()) //미들웨어 설정
app.use('/tweets',tweetsRouter)
app.use('/auth', authRouter)
//라우팅
app.use((req, res, next)=> {
    res.sendStatus(404)
})

//대기
const server = app.listen(config.host.port)
initSocket(server)