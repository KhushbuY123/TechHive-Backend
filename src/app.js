const express = require('express');

// create new application of express
const app=express();

// handle the  route : route handler

// This will only handle get calls to the root path

app.use('/user',[(req,res,next)=>{
    console.log('First handler');
    next();
    res.send('uo uo uo');
},(req,res,next)=>{
    console.log('Second handler');
    next();
    res.send("no no no")
},(req,res)=>{
    console.log('Third handler');
    res.send("hey hey hey")
}]);

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


