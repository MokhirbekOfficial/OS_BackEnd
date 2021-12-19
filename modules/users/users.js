const { getUsers, addUsers, getUser} = require('./model')
const secret_key = 'OSPROJECT'
const jwt = require('jsonwebtoken')

module.exports = {
    getUsers: async(req, res) => {
        try {
            const allUsers = await getUsers()
            res.json(allUsers)
        } catch(e) {
            console.log(e.message)
        }
    },
    addUsers:async(req, res) => {
        try {
            let {user_login, user_password, user_email} = req.body
            let checker = true
            const allUsers = await getUsers()
            allUsers.forEach(item => {
                if(user_login == item.user_login){
                    checker = false
                }
            })
            if(checker){
                await addUsers(user_login, user_password, user_email)
                let login = user_login
                let email = (allUsers[allUsers.length-1] + 1)
                const token = jwt.sign({login, email}, secret_key)
                res.json(token)
            }else{
                res.json('false')
            }
        } catch(e) {
            console.log(e.message)
        }
    },
    checkUser: async(req, res) => {
        try {
            const {user_login,user_password} = req.body
            const users = await getUsers()
            for(let i of users){
                if(i.user_login == user_login && i.user_password == user_password){
                    const login = i.user_login
                    const email = i.user_id
                    const token = jwt.sign({login, email}, secret_key)
                    return res.json(token)
                }
            }
            res.json('false')
        } catch(e) {
            console.log(e.message)
        }
    },
    mainUser: async(req, res) => {
        try {
            const {token} = req.body
            const decoded = jwt.verify(token, secret_key)
            let userInfo = await getUser(decoded.login)
            let arr = [userInfo]
            res.json(arr)
        } catch(e) {
            console.log(e.message)
            res.json('false')
        }
    },
    tokenChecker: async(req, res) => {
        try {
            const {token} = req.body
            const decoded = jwt.verify(token, secret_key)
            res.json('ok')
        } catch(e) {
            console.log(e.message)
            res.json('false')
        }
    }
}