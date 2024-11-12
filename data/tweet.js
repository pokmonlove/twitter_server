import express from 'express' 

let tweets = [{

    id:'1',
    name:'김사과',
    username:'apple',
    text:'안녕하세요',
    createAt:Date.now().toString(),
    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEqoTLo45hu_aLx01lClHTvcmuRFNSESx9vw&s'

},
{

    id:'2',
    name:'반하나',
    username:'banana',
    text:'안녕하세요',
    createAt:Date.now().toString(),
    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEqoTLo45hu_aLx01lClHTvcmuRFNSESx9vw&s'

},
{

    id:'3',
    name:'오렌지',
    username:'orange',
    text:'첫 트윗',
    createAt:Date.now().toString(),
    url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEqoTLo45hu_aLx01lClHTvcmuRFNSESx9vw&s'

}
]
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