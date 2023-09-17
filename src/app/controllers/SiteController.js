const Course = require('../models/Course');
const {
    multipleMongooseToObject,
} = require('D:/NodeExpressJSF8/Code/Blog/src/ulti/mongoose');
class SiteController {
    //[GET] /
    async index(req, res) {
        await Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch((err) => res.status(400).json({ error: 'ERROR!!!!!!' }));
    }
    //[GET] /search

    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
