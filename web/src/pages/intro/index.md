## **koa-booster**

### 概要
> 这是一个基于koa的小巧便捷框架。你可以理解它没有给你任何门槛。它的出现仅仅是为了提供一种基于Koa更加合理，更加有“规范”的代码组织途径而已。

### 为什么可以有它
- 它的加入不要求我们去熟悉一个新的框架
- 它的使用你可以完全按照koajs来(当然我们还是推荐你按照我们的最佳实践用上booster所赋予的能力与便利)
- 它的加入让我们的koa项目可以更加易于组织代码，使得代码实现能够更加规范统一，易于阅读与维护。
- 另外我们也为您准备了一些模板功能，方便您快速去搭建特定功能的服务。
- 后续我们会在项目中加入团队开发流程自检等相关功能

### 安装与启动
  - #### cli工具(推荐)
    - 安装脚手架模块
      ```
      npm i -g koa-booster-cli
      ```
    - 创建项目(projectName为该项目名称; 若为.则表示在当前文件夹建立项目)
      ``` 
      kb create {projectName}
      ```
    - 创建文件(moduleType例如controller, service等；moduleName为当前文件名称)
      ``` 
      kb generator {moduleType} {moduleName}
      ```
    - 启动项目(当然你也可以用ide直接debug项目，入口文件就是app.js)
      ``` 
      npm run start
      ```
  - #### koa + koa-booster
    - 安装
      ```
      - npm i -S koa
      - npm i -S koa-booster
      ```
    - 初始化 in App.js
      ```
      const Koa = require('koa')
      const app = new Koa()
      module.exports = require('koa-boost')(app)
      ```