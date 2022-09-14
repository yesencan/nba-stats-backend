const mongoose = require("mongoose");

const miscStatsSchema = new mongoose.Schema({
  name: String,
  year: String,
  stats: Array,
  type: String,
});

miscStatsSchema.set("toJSON", {
  transform: (document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id;
    delete returnedObj.__v;
    returnedObj.season = `${returnedObj.year - 1}-${returnedObj.year.substring(
      2
    )}`;
  },
});

module.exports = mongoose.model("Misc_Stats", miscStatsSchema);
