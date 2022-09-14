const mongoose = require("mongoose");

const rosterSchema = new mongoose.Schema({
  name: String,
  year: String,
  players: Array,
});

rosterSchema.set("toJSON", {
  transform: (document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id;
    delete returnedObj.__v;
    returnedObj.players.forEach((player) => {
      player["BIRTH DATE"] = player.BIRTH_DATE.substring(0, 10);
      delete player.BIRTH_DATE;
      delete player.COLLEGE;
    });
  },
});

module.exports = mongoose.model("Roster", rosterSchema);
