const { getAdmin, deletePost, addPost, addMain, deleteUser } = require('./model')
const secret_key = 'OSPROJECT'
const jwt = require('jsonwebtoken')

module.exports = {
    mainadmin: async(req, res) => {
        try {
            const {token} = req.body
            const allUsers = await getAdmin()
            const decoded = jwt.verify(token, secret_key)
            res.json('ok')
        } catch(e) {
            console.log(e.message)
            res.json('false')
        }
    },
    deletePo: async(req, res) => {
        try {
            const {id} = req.body
            await deletePost(id)
            res.json('ok')
        } catch(e) {
            console.log(e.message)
            res.json('false')
        }
    },
    add: async(req, res) => {
        try {
            const {posts_id, house_size, house_location, house_tel, house_cost, house_img, house_description} = req.body
            await addPost(house_size, house_location, house_tel, house_cost, house_img, house_description)
            await addMain(posts_id)
            res.json('ok')
        } catch(e) {
            console.log(e.message)
            res.json('false')
        }
    },
    remove: async(req, res) => {
        try {
            const {posts_id} = req.body
            await addMain(posts_id)
            res.json('ok')
        } catch(e) {
            console.log(e.message)
            res.json('false')
        }
    },
    deleteUser: async(req, res) => {
        try {
            const {user_id} = req.body
            await deleteUser(user_id)
            res.json('ok')
        } catch(e) {
            console.log(e.message)
            res.json('false')
        }
    }
}