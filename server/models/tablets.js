const mongoose = require("mongoose");

const tabletsSchema = new mongoose.Schema({
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

const tabletsModel = mongoose.model("tablets", tabletsSchema);
module.exports = tabletsModel;
