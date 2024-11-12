import express from 'express' //express 서버
import * as tweetController from '../controller/tweet.js'

const router = express.Router()

//data 


// 해당 아이디에 대한 트윗 가져오기
// Get 방식
// http://127.0.0.1:8080/tweets?username=:username
router.get('/', tweetController.getTweets)

// 글 번호에 대한 트윗 가져오기
// Get 방식
// http://127.0.0.1:8080/tweets/:id
router.get('/:id', (req, res, next)=>{
    const id = req.params.id
    const tweet = tweet.find((tweet) => tweet.id===id)
    if(tweet){
        res.status(200).json(tweet)
    }else{
        res.status(404).json({message:`${id}의 트윗이 없습니다`})
    }
})

// 트윗 하기
// Post 방식
// http://127.0.0.1:8080/tweets
// json 형태로 입력 후 추가된 데이터까지 모두 json으로 출력

router.post('/', (req, res, next)=>{
    const {username, name, text} = req.body
    const tweet={
        id:'4',
        username:username,
        name:name,
        text:text,
        createAt:Date.now().toString()
    }
    tweets = [tweet, ...tweets]
    res.status(201).json(tweets)
})

// 트윗 수정 하기
// Put 방식
// http://127.0.0.1:8080/tweets/:id
// json 형태로 입력 후 추가된 데이터까지 모두 json으로 출력

router.put('/:id', (req, res, next)=>{
    const id = req.params.id
    const text = req.body.text
    const tweet = tweet.find((tweet) => tweet.id===id)
    if(tweet){
        tweet.text= text
        res.status(200).json(tweet)
    }else{
        res.status(404).json({message:`${id}의 트윗이 없습니다`})
    }

})

// 주석
// 트윗 삭제 하기
// Delete 방식
// http://127.0.0.1:8080/tweets/:id

router.delete('/:id', (req, res, next)=>{
    const id = req.params.id
    tweets = tweets.filter((tweet)  => tweet.id !==id)
    res.status(200).json(tweets)

})

export default router
