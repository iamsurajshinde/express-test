const adminRouter = require('./adminRouter');
const userRouter = require('./userRouter');

const router = require('express').Router();

// http//:localhost:1920/api/user
router.use("/user", userRouter);

// http//:localhost:1920/api/admin
router.use("/admin", adminRouter);

module.exports = router;