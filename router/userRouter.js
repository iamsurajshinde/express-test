const userRouter = require('express').Router();

// http://localhost:1920/api/user/
userRouter.get("/", (req, res) => {
    res.json("This is get user api")
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