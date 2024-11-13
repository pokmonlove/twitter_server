//회원
import express from 'express' //express 서버
import * as authController from '../controller/auth.js'
import {body} from 'express-validator'
import { validate } from '../middleware/validator.js'


const router = express.Router()

const validateTweet=[
    body('username').trim().isLength({min:3}).withMessage('최소 3자 이상 입력').matches(/^[a-zA-Z0-9]*$/).withMessage('특수문자 사용 금지'), 
    body('password').trim().isLength({min:4}).withMessage('최소 4자 이상 입력'), 
    body('email').trim().isEmail().withMessage('최소 3자 이상 입력'), 
    validate
]

router.post('/signup', validateTweet, authController.signup)
router.post('/login', authController.login)
router.post('/me', authController.verify)
// 회원가입
// 로그인

// 로그인 유지

export default router
