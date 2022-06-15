const request = require("supertest");

const app = require("../index");

//Does the server start ?
describe("GET /api/todos", () => {
    it("should send an non empty array", async() => {
        const response = await request(app).get("/api/todos");
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });
});

describe("GET /api/todos/:id", () => {
    it("should send an non empty array", async() => {
        const response = await request(app).get("/api/todos/3");
        expect(response.status).toBe(200);
        expect(response.body.length).toBe(1);
    });
});
