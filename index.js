const express = require('express');
const { PORT, HOST } = require('./constant');
const apiRouter = require('./router');

// create server with http
const app = express();

//http://localhost:3000/api
app.use("/api", apiRouter)

// running server
app.listen(PORT, HOST, (err) =>  {
    if(err) console.log(`Error : ${err}`);
    else console.log(`server is running on http://${HOST}:${PORT}`);
});