const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mobilePhonesModel = require("./models/mobilePhones");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://Tuptuus:zaqwsX12@tupstore.wtkgi.mongodb.net/Store?retryWrites=true&w=majority"
);

app.get("/getMobile", (req, res) => {
  mobilePhonesModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

// ADD NEW PHONE TO DATABASE

// app.post("/addPhone", async (req, res) => {
//   const phone = req.body;
//   const newPhone = new mobilePhonesModel(phone);
//   await newPhone.save();
//   res.json(phone);
// });

app.listen(3001, () => {
  console.log("server runs");
});
