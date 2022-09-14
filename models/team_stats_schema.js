const mongoose = require("mongoose");

const teamStatsSchema = new mongoose.Schema({
  name: String,
  year: String,
  stats: Array,
});

teamStatsSchema.set("toJSON", {
  transform: (document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id;
    delete returnedObj.__v;
  },
});

module.exports = mongoose.model("Team_Stats", teamStatsSchema);
