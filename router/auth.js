//회원
import express from 'express' //express 서버
import * as authController from '../controller/auth.js'

const router = express.Router()
router.post('/signup', authController.signup)
router.post('/login', authController.login)
// 회원가입
// 로그인

// 로그인 유지

export default router
