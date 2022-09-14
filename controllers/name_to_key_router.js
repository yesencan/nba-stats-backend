const Name_Key = require("../models/name_key_schema");
const nameToKeyRouter = require("express").Router();

nameToKeyRouter.get("/", async (request, response) => {
  response.json(await Name_Key.findOne({ name: request.query.name }));
});

module.exports = nameToKeyRouter;
