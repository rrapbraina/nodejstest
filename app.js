const express = require('express');

const server = express();

server.set('view engine', 'ejs');

server.get('/',(req, res) => {
        res.render('index');
});

server.get('/about',(req, res) => {
        res.render('about');
});

server.listen(3000, ()=>{
        console.log("Server is running...");
});
