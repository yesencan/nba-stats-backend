const mongoose = require("mongoose");

const rosterStatsSchema = new mongoose.Schema({
  name: String,
  year: String,
  stats: Array,
  type: String,
});

rosterStatsSchema.set("toJSON", {
  transform: (document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id;
    delete returnedObj.__v;
    returnedObj.stats.forEach((line) => {
      delete line.SEASON;
      delete line.TEAM;
      delete line["Unnamed: 19"];
      delete line["Unnamed: 24"];
    });
  },
});

module.exports = mongoose.model("Roster_Stats", rosterStatsSchema);
