let express=require('express')
let apiRouter = (app) => {
  app.use('/api/workSpace', require('../api/workSpace'))
};

module.exports = apiRouter
