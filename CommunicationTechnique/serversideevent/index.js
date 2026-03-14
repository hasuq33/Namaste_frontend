const express = require('express');
const app = express();
const { join } = require('node:path');

app.get("/sse",(req,res)=>{
    // Setup sse logic
    res.setHeader('Content-Type','text/event-stream');
    res.setHeader('Cache-Control','no-cache');
    res.setHeader('Connection','keep-alive');

    res.write('data: Welcome to Server sent event \n\n');

    const intervalId = setInterval(()=>{
        res.write(`data:  Server Time ${new Date().toLocaleString()} \n\n`);
    },5000)

    req.on('close',()=>{
        clearInterval(intervalId);
    })
})

app.get("/",(req,res)=>{
    res.sendFile(join(__dirname,'index.html'));
})

app.listen(3000,()=>{
    console.log("Server is running on the 3000 port number.");
})