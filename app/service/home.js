var todolist = ['吃饭', '睡觉', '打游戏'];

'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async getHomeContent() {  
    await this.ctx.render('home.html',{output:todolist});
  }

  async getPost() {
    var content = this.ctx.request.body.value;
    if (content != '')
      todolist.push(content);

    await this.ctx.render('home.html',{output:todolist});
  }

  async delValue() {
    var del = this.ctx.params;
    var i;
    for (i = 0; i < todolist.length; i++) {
        if (todolist[i] == del.id)
            break;
    }
    if (i != todolist.length) {
        todolist.splice(i, 1);
    }

    await this.ctx.render('home.html',{output:todolist});
  }
}

module.exports = HomeService;

