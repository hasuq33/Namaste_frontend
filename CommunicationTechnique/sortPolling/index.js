const express =  require("express");
const app = express();
let data = "Namaste Duniye.";

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.get("/getData",(req,res)=>{
    res.send({
        data
    })
})

// POST / put data
app.get("/updateData",(req,res)=>{
    data = 'Updated Data';
    res.send({
        data
    })
})

const PORT = process.env.PORT || 5123;
app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);
})