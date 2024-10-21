const express = require('express');

// create new application of express
const app=express();

// handle the  route : route handler

// This will only handle get calls to the root path
app.use('/user',(req,res)=>{
    res.send('he he he');
});
app.get('/user',(req,res)=>{
    res.send({name:'John',age:30});
});

app.post('/user',(req,res)=>{
     console.log('Post request received');
    res.send('Post request received');
});
//this will match all the routes that have the word 'test' in them
app.use("/test",(req,res)=>{
    res.send('Hello World');
})


// listen to the root path
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});


