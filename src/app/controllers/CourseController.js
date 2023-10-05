const Course = require('../models/Course');
const {
    mongooseToObject,
} = require('D:/NodeExpressJSF8/Code/Blog/src/ulti/mongoose');
class CourseController {
    //[GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }
    //[POST] /courses/store

    async store(req, res, next) {
        const formdata = req.body;
        formdata.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formdata);
        await course.save()
            .then(()=>res.redirect('/'))
            .catch(next)
    }
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
    //[GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) =>
                res.render('courses/edit', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }
    //[PUT] /courses/:id
    update(req,res,next){
       Course.updateOne({_id:req.params.id},req.body)
       .then(()=>res.redirect('/me/stored/courses'))
       .catch(next)
    }
    //[DELETE] /courses/:id
    delete(req,res,next){
        Course.deleteOne({_id:req.params.id})
        .then(()=>res.redirect('back'))
        .catch(next)
    }
}
module.exports = new CourseController();
