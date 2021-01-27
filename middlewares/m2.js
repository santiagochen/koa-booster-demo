module.exports = ()=>{
  return async (ctx, next)=>{
    ctx.privateMidName = "Private Mid Name"
    await next()
  }
}