import {validationResult} from "express-validator";

export const validate = (req, res, next) => { 
    const errors = validationResult(req) //유효성 검사를 통과했는지 안 됐는지
    if(errors.isEmpty()){
        return next() //에러가 없다면 넘어간다
    }
    return res.status(400).json({message: errors.array()[0].msg}) //통과하지 못했을 때 에러메시지[0] 보낸다
}

