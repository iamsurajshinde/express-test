const adminRouter = require('express').Router();

// http://localhost:1920/api/admin/
adminRouter.get("/", (req, res) => {
    res.json("This is get admin api")
});


adminRouter.post("/", (req, res) => {
    res.json("This is post admin api")
});


adminRouter.put("/", (req, res) => {
    res.json("This is put admin api")
});


adminRouter.delete("/", (req, res) => {
    res.json("This is delete admin api")
});

module.exports = adminRouter;