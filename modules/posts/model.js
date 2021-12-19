const {
    fetch,
    fetchAll
} = require('../../lib/postgress')

const posts = `
SELECT
posts_id, post_size, post_location, post_tel, post_cost, post_img, post_description, user_login, user_email
FROM
posts
LEFT JOIN  users
ON post_owner = user_id
ORDER BY post_size;
`

const addPo = `
INSERT INTO posts(post_size, post_location, post_tel, post_cost, post_img, post_description, post_owner) VALUES($1,$2,$3,$4,$5,$6,$7);
`
// const NEW_USER = `
//     INSERT INTO users(user_name) VALUES($1) RETURNING *
// `

const getPosts = () => fetchAll(posts)

const addPost = (post_size, post_location, post_tel, post_cost, post_img, post_description, post_owner) => fetch(addPo,post_size, post_location, post_tel, post_cost, post_img, post_description, post_owner)

module.exports = {
    getPosts,
    addPost
}