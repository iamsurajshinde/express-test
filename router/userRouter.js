const { default: axios } = require('axios');

const userRouter = require('express').Router();

// http://localhost:1920/api/user/  === HTTP GET
userRouter.get("/", async (req, res) => {
    try {
        const { query } = req;
        const url = `https://dummyjson.com/users?limit=${query.limit}`;
        const response = await axios.get(url)
        // const userList = [
        //     { first: 'Shivaji', last: 'Bhosale' },
        //     { first: 'Pravin', last: 'Nikam' },
        // ]
        const userList = response.data.users
        res.json(userList)
    } catch (err) {
        console.log(err);
        res.json([])
    }
});


userRouter.post("/", (req, res) => {
    res.json("This is post user api")
});


userRouter.put("/", (req, res) => {
    res.json("This is put user api")
});


userRouter.delete("/", (req, res) => {
    res.json("This is delete user api")
});

module.exports = userRouter;