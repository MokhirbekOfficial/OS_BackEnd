const { fetch, fetchAll } = require('../../lib/postgress')

const houses = `
    SELECT 
        * 
    FROM
        houses
`

// const NEW_USER = `
//     INSERT INTO users(user_name) VALUES($1) RETURNING *
// `

const getHouses = () => fetchAll(houses)

module.exports = {
    getHouses
}