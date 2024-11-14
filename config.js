import dotenv from 'dotenv'

dotenv.config()
function required(key, defaultValue = undefined){
    const value = process.env[key] || defaultValue
    if(value== null){
        throw new Error(`키 ${key} undefined`)
    }
    return value
}
export const config = {
    jwt:{
        secretKey: required('JWT_SECRET'),
        expireInSec: parseInt(required('JWT_EXPIRES_SEC', 259200))
    },
    bycrpt:{
        saltRounds: parseInt(required('BYCRPT_SALT_ROUNDS', 10))
    }, 
    host: {
        host:parseInt(required("HOST_PORT", 8080))
    }
}