import * as tweetRepository from '../data/tweet.js'
// 모든 트윗을 가져오는 함수
export async function getTweets(req, res){
    const username = req.query.username
    const data = await (username ? tweetRepository.getAllByUsername(username) : tweetRepository.getAll())
    res.status(200).json(data)
}