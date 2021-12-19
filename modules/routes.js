const { Router } = require('express')

const router = new Router()

const home = require('./home/home')
const admin = require('./admin/admin')
const users = require('./users/users')
const mainadmin = require('./mainadmin/mainadmin')
const posts = require('./posts/posts')

router
    .get('/', home.getHouses)//
    .get('/users', users.getUsers)//
    .post('/mainuser', users.mainUser)//
    .post('/adduser', users.addUsers)//
    .post('/checkuser', users.checkUser)//
    .post('/admin', admin.getAdmin) //
    .post('/mainadmin', mainadmin.mainadmin)//
    .post('/addpost', mainadmin.add)//
    .delete('/removepost', mainadmin.remove)//
    .delete('/mainadmin', mainadmin.deletePo)//
    .post('/usersdelete', mainadmin.deleteUser)//
    .get('/newposts', posts.getPosts)//
    .post('/adduserpost', posts.addPost)
    .post('/usertokenchecker', users.tokenChecker)//

module.exports = router