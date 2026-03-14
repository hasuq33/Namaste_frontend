const express = require('express');
const { createServer } = require('node:http');
const { join } = require("node:path");
const { Server } = require("socket.io");

const app = express();
const server =  createServer(app);
const io = new Server(server);

app.get("/",(req,res)=>{
    res.sendFile(join(__dirname,'index.html'));
});

io.on('connection',(socket)=>{
    console.log("Connection Established!");

    socket.on('chat message',(msg)=>{
        console.log('recieved message',msg);
        io.emit('chat message',msg);
    })

    socket.on('disconnect',()=>{
        console.log("user is diconnected!");
    })
})

server.listen(3000,()=>{
    console.log("User is disconnected!");
})