const mongoose = require("mongoose");

const mobilePhonesSchema = new mongoose.Schema({
  mark: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const mobilePhonesModel = mongoose.model("mobilephones", mobilePhonesSchema);
module.exports = mobilePhonesModel;
