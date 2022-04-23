const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const mobilePhonesModel = require("./models/mobilePhones");
const laptopsModel = require("./models/laptops");
const tabletsModel = require("./models/tablets");

const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

app.get("/getLaptops", (req, res) => {
  laptopsModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.get("/getTablets", (req, res) => {
  tabletsModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/getProduct", (req, res) => {
  let id = req.body.productID;
  let type = req.body.currentType;
  if (type === "MobilePhones") {
    mobilePhonesModel.find({ _id: id }, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        console.log(res.json(result));
      }
    });
  } else if (type === "Laptops") {
    laptopsModel.find({ _id: id }, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        console.log(res.json(result));
      }
    });
  } else if (type === "Tablets") {
    tabletsModel.find({ _id: id }, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        console.log(res.json(result));
      }
    });
  }
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
