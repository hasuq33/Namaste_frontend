const express =  require('express');

const app = express();
let data = "Namaste Duniya."
const waitClientList =  [];

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.get("/getData",(req,res)=>{
    if(data !== req.query.lastData){
        res.json({data});
    }else{
        waitClientList.push(res);
    }
})

// POST / put data
// Use post/put to update
app.get('/updateData', (req, res) => {
  const {rdata} = req.query
  if(!rdata) return res.send({'message':"Data is not updated"})
    data = rdata;
  while(waitClientList.length > 0) {
    const client = waitClientList.pop();
    client.json({ data });
  }

  res.send({ success: 'Data updated successfully'})
})

app.listen(8000,()=>{
    console.log("server is listening on port 8000,")
})