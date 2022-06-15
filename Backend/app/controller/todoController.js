const tasks = require('../data/tasks.json')
const dataMapper = require('../model/dataMapper')

const todoController = {
    /**
     * Allows to show all the Todos
     * @param res
     */
    async getAll(_, res) {
        const listTasks = await dataMapper.getAllTodos();
        res.json(listTasks);
    },

    /**
     * Allows to find one Todo with its id
     * @param req
     * @param res
     */
    async getOneById(req, res) {
        const id = req.params.id;
        const task = await dataMapper.getOneTodo(id);
        console.log(task);
        res.json(task);
    },

    /**
     * Allows to modify a todo
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async update(req, res) {
        console.log("task",req.body)
        const id = req.params.id;
        const task = req.body;
        const result = await dataMapper.update(id, task);
        res.json(result);
    }
}

module.exports = todoController;
