const Name_Key = require("../models/name_key_schema");
const keyToNameRouter = require("express").Router();

keyToNameRouter.get("/", async (request, response) => {
  response.json(await Name_Key.findOne({ key: request.query.key }));
});

module.exports = keyToNameRouter;
