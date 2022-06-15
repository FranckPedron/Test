const client = require('./dbClient');

const dataMapper = {

    async getAllTodos() {
        const todosQuery = {
            text: 'SELECT * FROM todos',
            values:[]
        }
        const todosList = await client.query(todosQuery);
        return todosList.rows;
    },

    async getOneTodo(id) {
        const todoQuery = {
            text: 'SELECT * FROM todos WHERE id = $1',
            values: [id]
        }
        const todo = await client.query(todoQuery);
        return todo.rows[0];
    },

    async update(id, task) {
        // Sets the sentence prop = $1...
        const fields = Object.keys(task).map((prop, index) => `"${prop}" = $${index + 1}`);
        const values = Object.values(task);
        const updateQuery = {
            text: `UPDATE todos SET ${fields} WHERE id = $${fields.length + 1} RETURNING *`,
            values: [...values, id]
        }
        const updatedTask = await client.query(updateQuery);
        return updatedTask.rows[0];
    }
}

module.exports = dataMapper;
