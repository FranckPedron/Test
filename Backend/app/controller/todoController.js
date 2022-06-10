const tasks = require('../data/tasks.json')

const todoController = {
    /**
     * Allows to show all the Todos
     * @param req
     * @param res
     */
    getAll: (req, res) => {
        const listTasks = [];
       for (let task of tasks) {
            listTasks.push(task);
       }
        res.json(listTasks);
    }
}

module.exports = todoController;
