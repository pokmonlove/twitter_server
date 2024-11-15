import { db } from "../db/database.js"


/*export async function createUser(username, password ,name, email) {
    const user= {
        id:'4',
        username,
        password,
        name,
        email,
        url:'https://img.vogue.co.kr/vogue/2023/05/style_64476b424c99e-1120x1400.jpg'
    }
    users = [user, ...users]*/
export async function createUser(user){
        const {username, password, name, email, url} = user
        return db.execute('INSERT INTO users (username, password, name, email, url) VALUES (?,?,?,?,?)',
            [username, password, name, email, url]).then((result)=>result[0].insertId)
    }
export async function findByUsername(username){
    //const user = users.find((user)=> user.username === username)
    //return user
    return db.execute('SELECT * FROM users WHERE username=?',[username]) //sql 실행
        .then((result)=> result[0][0]) //select 결과를 얻는다
}

export async function findById(id){
    //return users.find((user)=> user.id === id)
    return db.execute('SELECT * FROM users WHERE id=?', [id]).then((result)=> result[0][0])
}