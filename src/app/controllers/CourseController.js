const Course = require('../models/Course');
const {
    mongooseToObject,
} = require('D:/NodeExpressJSF8/Code/Blog/src/ulti/mongoose');
class CourseController {
    //[GET] /course/:slug

    show(req, res) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch((err) => res.status(400).json({ error: 'ERROR!!!!!!!!!!' }));
    }
}
module.exports = new CourseController();
