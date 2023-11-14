const adminRouter = require('./adminRouter');
const userRouter = require('./userRouter');

const router = require('express').Router();

// http//:localhost:1920/api
router.use("/user", userRouter);

// http//:localhost:1920/api
router.use("/admin", adminRouter);

module.exports = router;