const { EggApplication } = require("egg");

module.exports = app => {
    const {router, controller} = app;

    router.get('/', controller.home.index); 

    router.post('/', controller.home.post);

    router.get('/:_id', controller.home.delete);    
};


