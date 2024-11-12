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

// 아이디에 대한 트윗 리턴
export async function getAllByUsername(username){
    return tweets.filter((tweet)=>tweet.username == username)
}
export async function getById(id) {
    return tweets.find((tweet)=>tweet.id === id)
}