const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./course')
const meRouter= require('./me')
function route(app) {
    app.use('/', siteRouter);
    app.use('/news', newsRouter);
    app.use('/courses',courseRouter)
    app.use('/me',meRouter)
}

module.exports = route;
