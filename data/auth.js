let users= [

    {
        id:'1',
        username:'apple',
        password:'1111',
        name:'김사과',
        email:'apple@apple.com',
        url:'https://img.vogue.co.kr/vogue/2023/05/style_64476b424c99e-1120x1400.jpg'

    }
,
    {
        id:'2',
        username:'banana',
        password:'2222',
        name:'반하나',
        email:'banana@banana.com',
        url:'https://img.vogue.co.kr/vogue/2023/05/style_64476b424c99e-1120x1400.jpg'
    }
,
    {
        id:'3',
        username:'orange',
        password:'3333',
        name:'오렌지',
        email:'orange@orange.com',
        url:'https://img.vogue.co.kr/vogue/2023/05/style_64476b424c99e-1120x1400.jpg'
    }

]

export async function createUser(username, password ,name, email) {
    const user= {
        id:'4',
        username,
        password,
        name,
        email,
        url:'https://img.vogue.co.kr/vogue/2023/05/style_64476b424c99e-1120x1400.jpg'
    }
    users = [user, ...users]
    return user
}

export async function findByUsername(username){
    const user = users.find((user)=> user.username === username)
    return user
}

export async function findById(id){
    return users.find((user)=> user.id === id)

}