// 不连数据库版
const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() { 
        await this.service.home.getHomeContent();
    }

    async post() {
        await this.service.home.getPost();
    }

    async delete() {
        await this.service.home.delValue();
    }
}

module.exports = HomeController;
