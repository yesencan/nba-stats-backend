const mongoose = require("mongoose");
const random = require("mongoose-random");

const playerSchema = new mongoose.Schema({
  name: String,
  surname: String,
  key: String,
  isPlayoff: Boolean,
  stats: Array,
});

playerSchema.plugin(random, { path: "r" });
playerSchema.set("toJSON", {
  transform: (document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id;
    delete returnedObj.__v;
  },
});

module.exports = mongoose.model("Player", playerSchema);
