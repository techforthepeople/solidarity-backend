var express = require("express");
var router = express.Router();
var MessageData = require("../db/models/messageData");

router.get("/", async (req, res, next) => {
  try {
    const allMessageData = await MessageData.findAll();
    if (allMessageData) {
      res.json(allMessageData);
    } else {
      res.status(404).send("Message data not Found");
    }
  } catch (err) {
    next(err);
  }
});


router.post("/", async (req, res, next) => {
  try {
    const newData = await MessageData.create(req.body);
    if (newData) {
      res.json(newData);
    } else {
      res.status(500).send("Message data post failed");
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;