const { fetch, fetchAll } = require('../../lib/postgress')

const users = `
    SELECT 
        * 
    FROM
        users
`
const user = `
    SELECT
    user_id, user_login, post_cost, post_img, post_description, user_login, user_email, post_size, post_location, post_tel, post_cost, post_img, post_description 
FROM
users
LEFT JOIN  posts
ON post_owner = user_id
where user_login = $1
ORDER BY user_id;
`
const addUs = `
INSERT INTO users(user_login, user_password, user_email) VALUES($1,$2,$3);
`

const getUsers = () => fetchAll(users)

const addUsers = (user_login, user_password, user_email) => fetch(addUs, user_login, user_password, user_email)

const getUser = (user_login) => fetch(user, user_login)

module.exports = {
    getUsers,
    addUsers,
    getUser
}