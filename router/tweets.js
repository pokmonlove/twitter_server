import express from 'express' //express 서버
import * as tweetController from '../controller/tweet.js'
import {body} from 'express-validator'
import { validate } from '../middleware/validator.js'

const router = express.Router()

const validateTweet=[
    body('text').trim().isLength({min:3}).withMessage('최소 3자 이상 입력'), 
    validate
]



//data 


// 해당 아이디에 대한 트윗 가져오기
// Get 방식
// http://127.0.0.1:8080/tweets?username=:username
router.get('/', tweetController.getTweets)

// 글 번호에 대한 트윗 가져오기
// Get 방식
// http://127.0.0.1:8080/tweets/:id
router.get('/:id', tweetController.getTweet)

// 트윗 하기
// Post 방식
// http://127.0.0.1:8080/tweets
// json 형태로 입력 후 추가된 데이터까지 모두 json으로 출력

router.post('/',validateTweet,  tweetController.CreateTweet)


// 트윗 수정 하기
// Put 방식
// http://127.0.0.1:8080/tweets/:id
// json 형태로 입력 후 추가된 데이터까지 모두 json으로 출력

router.put('/:id', tweetController.UpdateTweet)

// 주석
// 트윗 삭제 하기
// Delete 방식
// http://127.0.0.1:8080/tweets/:id

router.delete('/:id', tweetController.deleteTweet)

export default router
