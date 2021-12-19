const { getPosts, addPost } = require('./model')
const secret_key = 'OSPROJECT'
const jwt = require('jsonwebtoken')

module.exports = {
    getPosts: async(req, res) => {
        try {
            const newPosts = await getPosts()
            res.json(newPosts)
        } catch(e) {
            console.log(e.message)
        }
    },
    addPost:async(req, res) => {
        try {
            let {post_size, post_location, post_tel, post_cost, post_img, post_description, post_owner} = req.body
            await addPost(post_size, post_location, post_tel, post_cost, post_img, post_description, post_owner)
            res.json('ok')
        } catch(e) {
            console.log(e.message)
            res.json('false')
        }
    } 
}