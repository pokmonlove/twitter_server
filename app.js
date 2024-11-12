import express from 'express' //express 서버
import tweetsRouter from './router/tweets.js'
import authRouter from './router/auth.js'

const app = express() //주석 추가
app.use(express.json()) //미들웨어 설정
app.use('/tweets',tweetsRouter)
app.use('/auth', authRouter)
//라우팅
app.use((req, res, next)=> {
    res.sendStatus(404)
})

//대기
app.listen(8080)