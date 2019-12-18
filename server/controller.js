module.exports = {
    getList: async (req, res) => {
        const db = req.app.get('db')
        let list = await db.get_list()
        res.status(200).send(list)
    },
    addToDo: async (req, res) => {
        const db = req.app.get('db')
        const {item} = req.body
        let list = await db.add_todo(item)
        res.status(200).send(list)
    },
    editToDo: async (req, res) => {
        
    },
    deleteToDo: async (req, res) => {

    }
}