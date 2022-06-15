const express = require('express');
const router = express.Router();
const todoController = require("./controller/todoController");
const routerWrapper = require("../helper/routerWrapper");

router.route('/todos')
    .get(routerWrapper(todoController.getAll));

router.route('/todos/:id')
    .get(routerWrapper(todoController.getOneById))
    .patch(routerWrapper(todoController.update));

module.exports = router;
