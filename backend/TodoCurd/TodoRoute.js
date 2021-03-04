const router = require('express').Router();
const TodoController = require('./TodoController');

router
    .route('/')
    .get(TodoController.GET)
    .post(TodoController.POST)

    router
    .route('/:id')
    .put(TodoController.PUT)
    .delete(TodoController.DELETE)
    .get(TodoController.GETBYID)
    
    module.exports = router;
    

