const { default: mongoose } = require("mongoose");

const teamTableRowSchema = new mongoose.Schema({
  Franchise: String,
  Lg: String,
  From: String,
  To: String,
  Yrs: Number,
  G: Number,
  W: Number,
  L: Number,
  "W/L%": Number,
  Plyfs: Number,
  Div: Number,
  Conf: Number,
  Champ: Number,
  key: String,
});

teamTableRowSchema.set("toJSON", {
  transform: (document, returnedObj) => {
    delete returnedObj._id;
    delete returnedObj.__v;
  },
});

module.exports = mongoose.model("Team_Table_Row", teamTableRowSchema);
