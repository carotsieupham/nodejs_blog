const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const path = require('path');
const app = express();
const port = 3000;
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
// app.use(morgan("combined"));

//Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resource/views'));

//Home,Search,Contact

//route
route(      app);
// 127.0.0.1 - localhost:3000
                  app.listen(port, () => {
                      console.log(`Example app listening on port ${port}`);
                  });
