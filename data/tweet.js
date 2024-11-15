import { db } from "../db/database.js"
const SELECT_JOIN='SELECT tw.id, u.username, u.name, u.url, tw.userId, tw.text, tw.createdAt FROM users as u JOIN tweets as tw ON u.id = tw.userId'
const ORDER_DESC= 'ORDER BY tw.createdAt DESC'

//import express from 'express' 
/*
let tweets = [{

    id:'1',
    userId: '1',
    text:'안녕하세요',
    createAt:Date.now().toString(),

},
{

    id:'2',
    userId: '2',
    username:'banana',
    text:'안녕하세요',
    createAt:Date.now().toString(),

},
{

    id:'3',
    userId: '1',
    text:'첫 트윗',
    createAt:Date.now().toString(),


}
]*/


/*
// 모든 트윗 리턴
export async function getAll(){
    return tweets
}
// 이름에 대한 트윗 리턴
export async function getAllByUsername(username){
    return tweets.filter((tweet)=>tweet.username == username)
}

// 아이디에 대한 트윗 리턴

export async function getById(id) {
    return tweets.find((tweet)=>tweet.id === id)
}

//트윗을 작성
export async function create(username, name, text) {
    const tweet= {
        id:'4',
        username:username,
        name:name,
        text:text,
        createAt:Date.now().toString()
    }
    tweets = [tweet, ...tweets]
    return tweet
}
    //트윗 변경
export async function update(id, text) {
    const tweet= tweets.find((tweet)=> tweet.id === id)
    if(tweet){
        tweet.text=text
    }
    return tweet
}

// 트윗 삭제
export async function remove(id) {
    tweets=tweets.filter((tweet)=>tweet.id !== id)
}

*/

// 모든 트윗 리턴
export async function getAll(){
   return db.execute(`${SELECT_JOIN} ${ORDER_DESC}`).then((result)=>result[0])
}

//아이디에 대한 트윗 리턴
export async function getAllByUsername(username) {
    return db.execute(`${SELECT_JOIN} WHERE u.username=? ${ORDER_DESC}`, [username])
    .then((result)=> result[0])}

//글 번호에 대한 트윗 리턴
export async function getById(id){
    //return tweets.find((tweet)=>tweet.id ===id)
    return db.execute(`${SELECT_JOIN} where tw.id=?`,[id]).then((result) => result[0][0])
}

// 트윗 작성
export async function create(text, userId) {
    return db.execute('INSERT INTO tweets (userId, text, createdAt) VALUES (?,?,?)',
    [userId, text, new Date()]
).then((result)=> getById(result[0].insertId))
}

//트윗 변경
export async function update(id, text) {
    return  db.execute('UPDATE tweets SET text=? WHERE id=?',[text, id]).then(()=> getById(id))
}

// 트윗 삭제
export async function remove(id) {
    return db.execute('DELETE FROM tweets Where id=?', [id])
}