import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.all("/",(req,res)=>{
    console.log("Request ",req);
    console.log("Response ",res);

    res.send(`I'm UP!`)
})
const PORT = 3000
app.listen(PORT,()=>{
    console.log(`Server is running at the PORT ${PORT}`);
})

const Todos =  [{
    id:1,
    name:"Harshiv"
},{
    id:2,
    name:"Joy Patel"
}]

// Create 
app.post("/todo/create",(req,res)=>{
    const todo = req.body;
    Todos.push(todo);
    res.status(200)
    return res.send({message:"Successfully Created TODO!"})
})

// Read
app.get("/todo/get",(req, res)=>{
    return res.json(Todos)
})


// Update
app.put("/todo/:id",(req,res)=>{
    const id = req.params.id;
    const newData = req.body;
    console.log(id)

    const todoIndex =  Todos.findIndex((item)=>item.id === parseInt(id));
    if(todoIndex !== -1){
        Todos[todoIndex] ={
            id:req.params.id,
            ...newData
        }
        return res.json({"message":"Todo Updates Successfully!"});
    }
    res.status(404)
    return res.json({"message":"Invalid ID "});
})

// Delete
app.delete("/todo/delete/:id",(req,res)=>{
    const id = req.params.id;

    const todoIndex =  Todos.findIndex((item)=>item.id === parseInt(id));
    if(todoIndex !== -1){
        Todos.splice(todoIndex,1);
        return res.json({"message":"Todo Deleted Successfully!"});
    }
    res.status(404)
    return res.json({"message":"Invalid ID "});
})