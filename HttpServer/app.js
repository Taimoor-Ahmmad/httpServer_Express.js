const express=require('express');
const app=express();


app.get("",(req,resp)=>{
    resp.send("Hello from server");
});

const port= 3000;

app.listen(port,()=>{
    console.log('Server listening on port ${port}');
});