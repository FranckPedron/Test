const express = require('express');
const router = express.Router();
const todoController = require("./controller/todoController");

router.route('/todos')
    /**
     *
     */
    .get(todoController.getAll);

module.exports = router;
