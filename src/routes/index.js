const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./course')
function route(app) {
    app.use('/', siteRouter);
    app.use('/news', newsRouter);
    app.use('/course',courseRouter)
}

module.exports = route;
