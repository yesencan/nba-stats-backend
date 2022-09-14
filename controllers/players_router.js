const Player = require("../models/player_schema");
const Name_Key = require("../models/name_key_schema");
const playerRouter = require("express").Router();
playerRouter.get("/single", async (request, response) => {
  const isPlayoff = request.query.isPlayoff === "true";
  response.json(
    await Player.findOne({ key: request.query.name, isPlayoff: isPlayoff })
  );
});

playerRouter.get("/all", async (request, response) => {
  response.json(
    await Player.find({
      surname: { $regex: "^" + request.query.letter, $options: "i" },
      isPlayoff: false,
    })
  );
});
playerRouter.get("/random", async (request, response) => {
  response.json(await Name_Key.find({ star: true }));
});
module.exports = playerRouter;
