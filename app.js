const Koa = require('koa')
const app = new Koa()

module.exports = require('koa-booster')(app, {
  middlewares : app=>[
    require('./middlewares/m1')({name:'Booster'}),
    require('koa-static')('public'),
  ]
})