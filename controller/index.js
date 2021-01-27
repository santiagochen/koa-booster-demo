module.exports = ()=>({
  async i1(ctx){
    try {
      ctx.body = "Welcome to Koa-Booster"
    } catch (error) {
      console.error(error)
    }
  }
  
})