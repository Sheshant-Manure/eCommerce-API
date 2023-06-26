const express = require('express');
const app = express()

app.get('/', (req, res)=>{
    res.send('Welcome to eCommerce API');
});

//Setting the express server at defined port
const port = 8000;
app.listen(port, ()=>{
    console.log(`Server is running at port: ${port}`);
});