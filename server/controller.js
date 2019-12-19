module.exports = {
    getList: async (req, res) => {
        const db = req.app.get('db')
        let list = await db.get_list()
        res.status(200).send(list)
    },
    addToDo: async (req, res) => {
        const db = req.app.get('db')
        const {item} = req.body
        console.log(item)
        let list = await db.add_todo(item)
        res.status(200).send(list)
    },
    editToDo: async (req, res) => {
        const db = req.app.get("db");
        const {item} = req.body
        const {itemid} = req.params      
        // let data = await db.update_todo({itemid: itemid, item: item})
        let updatedList = await db.update_todo([itemid, item])
        res.status(200).send(updatedList)
    },
    deleteToDo: async (req, res) => {
        const db = req.app.get("db");
        const {id}  = req.params;
        let something = await db.delete_todo(id)
        res.status(200).send(something)
    }
}