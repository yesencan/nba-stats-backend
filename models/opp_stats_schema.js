const mongoose = require("mongoose");

const oppStatsSchema = new mongoose.Schema({
  name: String,
  year: String,
  stats: Array,
});

oppStatsSchema.set("toJSON", {
  transform: (document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id;
    delete returnedObj.__v;
  },
});

module.exports = mongoose.model("Opp_Stats", oppStatsSchema);
