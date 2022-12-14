const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

// Midleware xử lý việc gửi dữ liệu lên server 
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// Câu hình để chạy được file ảnh
app.use(express.static(path.join(__dirname, 'public')));

// Template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));