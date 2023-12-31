const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override')

const path = require('path');
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');
//Connect to DB
db.connect();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());
app.use(express.json());

app.use(methodOverride('_method'))
// app.use(morgan("combined"));

//Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers:{
            sum: (a,b)=> a + b,
        }
    }),
);
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resource', 'views'));

//Home,Search,Contact

//route
route(app);
// 127.0.0.1 - localhost:3000
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
