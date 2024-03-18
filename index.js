const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'dist')));

app.get("/abc",(req,res)=>{
    res.json({success:true,message:"we are get the data"});
});

app.listen(10_000,()=>console.log("Hello"));

// render 
// 1.