const dataMapper = require('../app/model/dataMapper');

const todoList = dataMapper.getAllTodos();
const todo = dataMapper.getOneTodo();

describe("todo list", () => {
    it("should be an array", () =>{
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    })
})
