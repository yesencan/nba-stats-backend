const mongoose = require("mongoose");

const nameKeySchema = new mongoose.Schema({
  name: String,
  key: String,
  star: Boolean,
});

nameKeySchema.set("toJSON", {
  transform: (document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id;
    delete returnedObj.__v;
  },
});

module.exports = mongoose.model("Name_Key", nameKeySchema);
