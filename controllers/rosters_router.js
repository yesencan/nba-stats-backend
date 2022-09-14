const Roster = require("../models/roster_schema");
const rosterRouter = require("express").Router();

rosterRouter.get("/", async (request, response) => {
  request.query.season
    ? response.json(
        await Roster.findOne({
          name: request.query.team,
          year: request.query.season,
        })
      )
    : response.json(
        await Roster.find({
          name: request.query.team,
        })
      );
});

module.exports = rosterRouter;
