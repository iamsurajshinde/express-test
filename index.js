const express = require('express');
const { PORT, HOST } = require('./constant');
const router = require('./router');

// create server with http
const app = express();

app.use("/api", router)

// running server
app.listen(PORT, HOST, (err) =>  {
    if(err) console.log(`Error : ${err}`);
    else console.log(`server is running on http://${HOST}:${PORT}`);
});