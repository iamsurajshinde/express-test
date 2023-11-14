const router = require('express').Router();

// const express = require('express');
// express.Router();

// http://localhost:1920/api
router.get('/', (req, res) => {
    res.json("this is get /api");
});

router.post('/', (req, res) => {
    res.json("this is post /api ");
});


router.put('/', (req, res) => {
    res.json("this is put /api ");
});

router.delete('/', (req, res) => {
    res.json("this is delete /api ");
});

module.exports = router;