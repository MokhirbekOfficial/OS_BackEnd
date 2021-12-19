const { fetch, fetchAll } = require('../../lib/postgress')

const admin = `
    SELECT 
        * 
    FROM
        mainadmin
`

// const NEW_USER = `
//     INSERT INTO users(user_name) VALUES($1) RETURNING *
// `

const getAdmin = () => fetchAll(admin)

module.exports = {
    getAdmin
}