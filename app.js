import express from 'express' //express 서버
import tweetsRouter from './router/tweets.js'
import authRouter from './router/auth.js'
import { config } from './config.js'
import { initSocket } from './connection/socket.js'
//import {db} from './db/database.js'
//npm i cors
import cors from 'cors'

const app = express()

app.use(cors({
    origin: '*',
    credential:true //쿠키 사용 허용
})); 

app.use(express.json()) //미들웨어 설정
app.use('/tweets',tweetsRouter)
app.use('/auth', authRouter)
//라우팅
app.use((req, res, next)=> {
    res.sendStatus(404)
})

//db 연결확인
//db.getConnection().then((connection)=> console.log(connection))
//console.log(config.host.port)
const server = app.listen(config.host.port)
initSocket(server)
