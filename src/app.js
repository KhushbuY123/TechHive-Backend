const express = require('express');

// create new application of express
const app=express();

// handle the  path
app.use("/test",(req,res)=>{
    res.send('Hello World');
})

// listen to the root path
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});


