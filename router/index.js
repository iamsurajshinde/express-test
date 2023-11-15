const adminRouter = require('./adminRouter');
const userRouter = require('./userRouter');

//  

const router = require('express').Router();

// http//:localhost:1920/api/user
router.use("/user", userRouter);

// http//:localhost:1920/api/admin
router.use("/admin", adminRouter);

// http//:localhost:1920/api  ==> HTTP GET
router.get("/", (req, res) => {
    res.send("this is GET api call")
})

// http//:localhost:1920/api  ==> HTTP POST
router.post("/", (req, res) => {
    res.send("this is POST api call")
})

module.exports = router;