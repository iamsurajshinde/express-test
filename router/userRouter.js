const { default: axios } = require('axios');

const userRouter = require('express').Router();


async function getUser(userId, limit) {
    let url = `https://dummyjson.com/users`;
    if (userId) {
        url = url + `/${userId}`
    }
    if (limit) {
        url = url + `?limit=${limit}`
    }
    const response = await axios.get(url)
    return response.data;
}

// http://localhost:1920/api/user/  === HTTP GET
userRouter.get("/", async (req, res) => {
    try {
        const { query } = req;
        const response = getUser();
        res.json(response.users)
    } catch (err) {
        console.log(err);
        res.json([])
    }
});

// http://localhost:1920/api/user/2
userRouter.get("/:userId", async (req, res) => {
    // const id = req.query.id //--- one way
    // const {id} = req.query --- another way
    const { userId } = req.params

    if (userId <= 100 && userId > 0) {
        const user = getUser(userId)
        res.json(user)
    } else {
        res.status(400).send("Please provide valid userId between 1 to 100")
    }

});




userRouter.post("/", async (req, res) => {
    const body = req.body;
    const url = `https://dummyjson.com/users/${body.id}`;
    const user = await axios.get(url)
    res.json(user.data)
});


userRouter.put("/", (req, res) => {
    res.json("This is put user api")
});


userRouter.delete("/", (req, res) => {
    res.json("This is delete user api")
});

module.exports = userRouter;