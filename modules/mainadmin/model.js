const { fetch, fetchAll } = require('../../lib/postgress')

const admin = `
    SELECT 
        * 
    FROM
        mainadmin
`

const deletePo = `
    DELETE 
        FROM 
            houses
        WHERE house_id = $1;
`
const addPo = `
    INSERT INTO houses(house_size, house_location, house_tel, house_cost, house_img, house_description) VALUES($1,$2,$3,$4,$5,$6);
`
const addmainPo = `
DELETE 
FROM 
    posts
WHERE posts_id = $1;
`
const deleteUs = `
DELETE 
FROM 
    users
WHERE user_id = $1;
`
const getAdmin = () => fetchAll(admin)

const deletePost = (id) => fetch(deletePo, id)
const addMain = (posts_id) => fetch(addmainPo, posts_id)
const deleteUser = (user_id) => fetch(deleteUs, user_id)
const addPost = (house_size, house_location, house_tel, house_cost, house_img, house_description) => fetch(addPo, house_size, house_location, house_tel, house_cost, house_img, house_description)

module.exports = {
    getAdmin,
    deletePost,
    addPost,
    addMain,
    deleteUser
}