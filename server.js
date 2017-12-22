/**
 * Created by chokon on 12/18/2017.
 */
const express= require('express');
const app = express();
const http = require('http');
const path = require('path');


const server =http.createServer(app);

const PORT = "1984";

server.listen(PORT);
console.log("Server is Listening at "+ PORT);

app.use(express.static(path.join(__dirname, '/lib')));
app.use(express.static(path.join(__dirname, '/app')));
app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));
app.use(express.static(path.join(__dirname)));

/*app.get('/', function(req, res){
 res.sendFile(path.resolve('./app/index.html'))
 });

 app.get('*', function(req, res){
 res.sendFile(path.resolve('./app/index.html'))
 });*/