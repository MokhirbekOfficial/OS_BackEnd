const { getAdmin } = require('./model')
const secret_key = 'OSPROJECT'
const jwt = require('jsonwebtoken')

module.exports = {
    getAdmin: async(req, res) => {
        try {
            const {mainadmin_login,mainadmin_password} = req.body
            const admin = await getAdmin()

            if(admin[0].admin_login == mainadmin_login && admin[0].admin_password == mainadmin_password){
                const login = admin[0].mainadmin_login
                const email = admin[0].mainadmin_id
                const token = jwt.sign({login, email}, secret_key)
                console.log('user connect '+ new Date())
                res.json(token)
            }else{
                res.json('false')
            }
        } catch(e) {
            console.log(e.message)
        }
    }
}