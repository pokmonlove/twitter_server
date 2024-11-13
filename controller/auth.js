import * as authRepository from '../data/auth.js'
import * as bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const secret = 'abcdefg1234%^&*'

async function makeToken(id) {
    const Token = jwt.sign({
        id:id,
        isAdmid:false
    }, secret, {expiresIn:'1h'})
    return Token
    
}

//singn up
export async function signup(req, res, next){
    const { username, password ,name, email } = req.body
    //const users = await authRepository.createUser(username, password ,name, email )
    const hashed = bcrypt.hashSync(password, 10)
    const users = await authRepository.createUser(username, hashed ,name, email )
    if(users){
        res.status(201).json(users)
    }}
   
//login 
export async function login(req, res, next){
    const { username, password } = req.body
    const user = await authRepository.findByUsername(username)
    if(!user){
        res.status(401).json(`${username} 아이디를 찾을 수 없음`)
    }
    else{
        if(bcrypt.compareSync(password, user.password)){
            res.status(201).header('Token', makeToken(username)).json(`${username} 로그인 완료`)
        }else{
            res.status(404).json({message: `${username}님 아이디 또는 비번 확인`})
        }
    }
}

export async function verify(req, res, next){
    const token = req.header['Token']
    if(token){
        res.status(200).json(token)
    }
}
   