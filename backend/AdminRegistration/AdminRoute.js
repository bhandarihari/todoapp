const router = require('express').Router();
const controller = require('./AdminController');

router
    .route('/')
    .get(controller.GetAllData)
    .post(controller.Post)

router
    .route('/:id')
    .get(controller.GetById)
    .put(controller.Put)
    .delete(controller.Delete)
    
    router
    .route('/login')
    .post(controller.Login)

    router
    .route('/check_token')
    .post(controller.CheckToken)

    module.exports = router;