const {
    getHouses
} = require('./model')

module.exports = {
    getHouses: async (req, res) => {
        try {
            const allHouses = await getHouses()
            console.log('user connect '+ new Date())
            res.json(allHouses)
        } catch (e) {
            console.log(e.message)
        }
    }
}